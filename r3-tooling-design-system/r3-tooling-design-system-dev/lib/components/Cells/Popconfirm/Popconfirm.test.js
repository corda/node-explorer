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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Popconfirm from './Popconfirm';
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
describe('<Popconfirm /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Popconfirm, { children: "Pop confirm" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Popconfirm, __assign({ show: true, className: "test-class" }, { children: "Success toast" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with `position="bottomRight"` property to work correctly', function () {
        var container = render(_jsx(Popconfirm, __assign({ position: "bottomRight", show: true, className: "test-class" }, { children: "Success toast" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('-bottom-4');
        expect(container.firstElementChild.firstElementChild).toHaveClass('bottomRight top-full right-0');
    });
    test('with `position="topLeft"` property to work correctly', function () {
        var container = render(_jsx(Popconfirm, __assign({ position: "topLeft", show: true, className: "test-class" }, { children: "Success toast" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('-top-4');
        expect(container.firstElementChild.firstElementChild).toHaveClass('topLeft bottom-full left-0');
    });
    test('with `position="bottomLeft"` property to work correctly', function () {
        var container = render(_jsx(Popconfirm, __assign({ position: "bottomLeft", show: true, className: "test-class" }, { children: "Success toast" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('-bottom-4');
        expect(container.firstElementChild.firstElementChild).toHaveClass('bottomLeft top-full left-0');
    });
    test('with `position="topRight"` property to work correctly', function () {
        var container = render(_jsx(Popconfirm, __assign({ position: "topRight", show: true, className: "test-class" }, { children: "Success toast" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('-top-4');
        expect(container.firstElementChild.firstElementChild).toHaveClass('topRight bottom-full right-0');
    });
    test('with "acceptText" and "refuseText" properties to work correctly', function () {
        var acceptText = 'accept-txt';
        var refuseText = 'refuse-txt';
        render(_jsx(Popconfirm, __assign({ position: "topRight", show: true, className: "test-class", acceptText: acceptText, refuseText: refuseText }, { children: "Success toast" }), void 0));
        var acceptTextElement = screen.getByText(acceptText);
        var refuseTextElement = screen.getByText(refuseText);
        expect(acceptTextElement).toBeInTheDocument();
        expect(refuseTextElement).toBeInTheDocument();
    });
    test('click outside to close it', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fireEvent, ParentContainer, container;
        return __generator(this, function (_a) {
            fireEvent = createDocumentListenersMock();
            ParentContainer = function () {
                var _a = useState(true), show = _a[0], setShow = _a[1];
                return (_jsx(_Fragment, { children: _jsx(Popconfirm, __assign({ position: "topRight", show: show, onClose: function () { return setShow(!show); }, className: "test-class", acceptText: "accept-txt", refuseText: "refuse-txt" }, { children: "Success toast" }), void 0) }, void 0));
            };
            container = render(_jsx(ParentContainer, {}, void 0)).container;
            expect(container.firstElementChild).not.toBeNull();
            act(function () {
                fireEvent.mouseDown(document.body);
            });
            expect(container.firstElementChild).toBeNull();
            return [2];
        });
    }); });
});
//# sourceMappingURL=Popconfirm.test.js.map