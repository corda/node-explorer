var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from './Modal';
import { useState } from 'react';
import { DateInput } from '../../../exports';
export var createDocumentListenersMock = function () {
    var listeners = {};
    var handler = function (domEl, event) { var _a; return (_a = listeners === null || listeners === void 0 ? void 0 : listeners[event]) === null || _a === void 0 ? void 0 : _a.call(listeners, { target: domEl }); };
    document.addEventListener = jest.fn(function (event, cb) {
        listeners[event] = cb;
    });
    document.removeEventListener = jest.fn(function (event) {
        delete listeners[event];
    });
    return {
        mouseDown: function (domEl) { return handler(domEl, 'mousedown'); },
        click: function (domEl) { return handler(domEl, 'click'); },
    };
};
describe('<Modal /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Modal, __assign({ size: "large", title: "modal-title", onClose: function () { } }, { children: "test" }), void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "children" and "open" properties to work correctly', function () {
        render(_jsxs(Modal, __assign({ size: "large", title: "modal-title", onClose: function () { }, open: true }, { children: [_jsx("p", { children: "child-1" }, void 0), _jsx("p", { children: "child-2" }, void 0), _jsx("p", { children: "child-3" }, void 0), _jsx("p", { children: "child-4" }, void 0)] }), void 0));
        expect(screen.getByText('child-3')).toBeInTheDocument();
    });
    test('with "size" and "open" properties to work correctly', function () {
        var container = render(_jsxs(Modal, __assign({ size: "large", title: "modal-title", onClose: function () { }, open: true }, { children: [_jsx("p", { children: "child-1" }, void 0), _jsx("p", { children: "child-2" }, void 0), _jsx("p", { children: "child-3" }, void 0), _jsx("p", { children: "child-4" }, void 0)] }), void 0)).container;
        var childrenContainerElement = screen.getByText('child-3').parentElement;
        expect(childrenContainerElement).toHaveClass('text-center');
        var titleContainerElement = screen.getByText('modal-title');
        expect(titleContainerElement).toHaveClass('text-center');
        expect(titleContainerElement).toHaveClass('text-dark-gray');
        expect(container.firstElementChild.firstElementChild.nextElementSibling).toHaveClass('w-1/2');
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsxs(Modal, __assign({ size: "large", title: "modal-title", onClose: function () { }, className: "test-class", open: true }, { children: [_jsx("p", { children: "child-1" }, void 0), _jsx("p", { children: "child-2" }, void 0), _jsx("p", { children: "child-3" }, void 0), _jsx("p", { children: "child-4" }, void 0)] }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('without "open" property to work correctly', function () {
        var container = render(_jsxs(Modal, __assign({ size: "large", title: "modal-title", onClose: function () { }, className: "test-class" }, { children: [_jsx("p", { children: "child-1" }, void 0), _jsx("p", { children: "child-2" }, void 0), _jsx("p", { children: "child-3" }, void 0), _jsx("p", { children: "child-4" }, void 0)] }), void 0)).container;
        expect(container.firstElementChild).toBeNull();
    });
    test('with "variant" - danger and "open" property to work correctly', function () {
        render(_jsxs(Modal, __assign({ size: "large", title: "modal-title", onClose: function () { }, className: "test-class", variant: "danger", open: true }, { children: [_jsx("p", { children: "child-1" }, void 0), _jsx("p", { children: "child-2" }, void 0), _jsx("p", { children: "child-3" }, void 0), _jsx("p", { children: "child-4" }, void 0)] }), void 0));
        var titleContainerElement = screen.getByText('modal-title');
        expect(titleContainerElement).toHaveClass('text-red');
    });
    test('with "withBackdrop" property to work correctly', function () {
        var container = render(_jsxs(Modal, __assign({ size: "large", title: "modal-title", onClose: function () { }, className: "test-class", variant: "danger", withBackdrop: true, open: true }, { children: [_jsx("p", { children: "child-1" }, void 0), _jsx("p", { children: "child-2" }, void 0), _jsx("p", { children: "child-3" }, void 0), _jsx("p", { children: "child-4" }, void 0)] }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('overflow-auto');
        expect(container.firstElementChild.children).toHaveLength(2);
        expect(container.firstElementChild.children[1]).toHaveClass('relative');
    });
    test('with "onClose" and "closeOnOutsideClick" properties to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, backDropElement;
        return __generator(this, function (_a) {
            ParentContainer = function () {
                var _a = useState(true), open = _a[0], setOpen = _a[1];
                return (_jsx(_Fragment, { children: _jsxs(Modal, __assign({ size: "large", title: "modal-title", onClose: function () { return setOpen(!open); }, className: "test-class", variant: "danger", closeOnOutsideClick: true, withBackdrop: true, open: open }, { children: [_jsx("p", { children: "child-1" }, void 0), _jsx("p", { children: "child-2" }, void 0), _jsx("p", { children: "child-3" }, void 0), _jsx("p", { children: "child-4" }, void 0)] }), void 0) }, void 0));
            };
            container = render(_jsx(ParentContainer, {}, void 0)).container;
            expect(container.firstElementChild.children).toHaveLength(2);
            backDropElement = document.querySelector('.backdrop');
            act(function () {
                fireEvent.click(backDropElement);
            });
            expect(container.firstElementChild).toBeNull();
            return [2];
        });
    }); });
    test('click on "DateTime" component that is part of the content of the `<Modal />` that goes outside of the modal box should not close the `Modal`', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fireEvent, ParentContainer, modalRenderedContainer, flatPickerSelectedDayElement, flatPickerNextToSelectedDayElement;
        return __generator(this, function (_a) {
            fireEvent = createDocumentListenersMock();
            ParentContainer = function () {
                var _a = useState(true), open = _a[0], setOpen = _a[1];
                return (_jsxs(Modal, __assign({ size: "large", title: "modal-title", onClose: function () { return setOpen(!open); }, className: "test-class", variant: "danger", withBackdrop: true, open: open }, { children: [_jsx("p", { children: "child-1" }, void 0), _jsx("p", { children: "child-2" }, void 0), _jsx("p", { children: "child-3" }, void 0), _jsx(DateInput, { label: "date input disabled", value: new Date(), onChange: function () {
                                return;
                            } }, void 0)] }), void 0));
            };
            modalRenderedContainer = render(_jsx(ParentContainer, {}, void 0)).container;
            flatPickerSelectedDayElement = screen.getAllByText(new Date().getDate())[0];
            flatPickerNextToSelectedDayElement = flatPickerSelectedDayElement.nextElementSibling;
            act(function () {
                fireEvent.mouseDown(flatPickerNextToSelectedDayElement);
            });
            expect(modalRenderedContainer.firstElementChild).not.toBeNull();
            return [2];
        });
    }); });
});
//# sourceMappingURL=Modal.test.js.map