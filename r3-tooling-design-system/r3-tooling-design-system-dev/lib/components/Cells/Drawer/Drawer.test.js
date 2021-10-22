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
import { jsx as _jsx } from "react/jsx-runtime";
import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Drawer from './Drawer';
import { useState } from 'react';
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
describe('<Drawer /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Drawer, __assign({ position: "top", title: "title-txt", onClose: function () { } }, { children: "test" }), void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" and "open" properties to work correctly', function () {
        var container = render(_jsx(Drawer, __assign({ className: "test-class", position: "top", title: "title-txt", open: true, onClose: function () { } }, { children: "test" }), void 0)).container;
        expect(container.firstElementChild.children[1]).toHaveClass('test-class');
        expect(container.firstElementChild.children[1]).toHaveClass('right-0 w-full max-h-1/2');
    });
    test('with `position="left"` and "open" properties to work correctly', function () {
        var container = render(_jsx(Drawer, __assign({ className: "test-class", position: "left", title: "title-txt", open: true, onClose: function () { } }, { children: "test" }), void 0)).container;
        expect(container.firstElementChild.children[1]).toHaveClass('top-0 h-full w-4/5 sm:w-1/3 md:w-1/3 lg:w-1/3');
    });
    test('"onClose" property on "open" state to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, closeIconElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState(true), open = _a[0], setOpen = _a[1];
                        return (_jsx(Drawer, __assign({ className: "test-class", position: "left", title: "title-txt", open: open, onClose: function () { return setOpen(false); } }, { children: "test" }), void 0));
                    };
                    container = render(_jsx(ParentContainer, {}, void 0)).container;
                    expect(container.firstElementChild).not.toBeNull();
                    closeIconElement = screen.getByRole('presentation');
                    return [4, fireEvent.click(closeIconElement)];
                case 1:
                    _a.sent();
                    expect(container.firstElementChild).toBeNull();
                    return [2];
            }
        });
    }); });
    test('click outside to close it', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, backDropElement;
        return __generator(this, function (_a) {
            ParentContainer = function () {
                var _a = useState(true), open = _a[0], setOpen = _a[1];
                return (_jsx(Drawer, __assign({ className: "test-class", position: "left", title: "title-txt", open: open, closeOnOutsideClick: true, onClose: function () { return setOpen(false); } }, { children: "test" }), void 0));
            };
            container = render(_jsx(ParentContainer, {}, void 0)).container;
            expect(container.firstElementChild).not.toBeNull();
            backDropElement = document.querySelector('.backdrop');
            act(function () {
                fireEvent.click(backDropElement);
            });
            expect(container.firstElementChild).toBeNull();
            return [2];
        });
    }); });
    test('with `horizontalWidth="80%"`', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container;
        return __generator(this, function (_a) {
            ParentContainer = function () {
                var _a = useState(true), open = _a[0], setOpen = _a[1];
                return (_jsx(Drawer, __assign({ className: "test-class", position: "left", title: "title-txt", open: open, horizontalWidth: "80%", onClose: function () { return setOpen(false); } }, { children: "test" }), void 0));
            };
            container = render(_jsx(ParentContainer, {}, void 0)).container;
            expect(container.firstElementChild).not.toBeNull();
            expect(container.firstElementChild.firstElementChild.nextElementSibling.getAttribute('style')).toEqual('width: 80%;');
            return [2];
        });
    }); });
});
//# sourceMappingURL=Drawer.test.js.map