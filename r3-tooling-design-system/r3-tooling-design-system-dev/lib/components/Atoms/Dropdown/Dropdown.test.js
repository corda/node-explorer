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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { act, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';
import IconCustom from './../IconCustom/IconCustom';
import Option from './../Option/Option';
import React from 'react';
describe('<Dropdown /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsxs(Dropdown, __assign({ trigger: _jsx(IconCustom, { icon: "ChevronDown" }, void 0) }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0), "text child"] }), void 0)).container;
        expect(container).toBeInTheDocument();
        var dropdownContainerElement = container.querySelector('.dropdown-options');
        expect(dropdownContainerElement.children).toHaveLength(3);
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsxs(Dropdown, __assign({ className: "test-class", trigger: _jsx(IconCustom, { icon: "ChevronDown" }, void 0) }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with empty or missing "className" property to work correctly', function () {
        var container = render(_jsxs(Dropdown, __assign({ className: "", trigger: _jsx(IconCustom, { icon: "ChevronDown" }, void 0) }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0)).container;
        expect(container.firstElementChild).not.toHaveClass('test-class');
    });
    test('with "block" property to work correctly', function () {
        var container = render(_jsxs(Dropdown, __assign({ block: true, trigger: _jsx(IconCustom, { icon: "ChevronDown" }, void 0) }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0)).container;
        var targetElement = container.querySelector('.dropdown-options');
        expect(targetElement).toHaveClass('w-full');
        expect(targetElement).not.toHaveClass('w-w-48');
    });
    test('with `positionX="left"` property to work correctly', function () {
        var container = render(_jsxs(Dropdown, __assign({ positionX: "left", trigger: _jsx(IconCustom, { icon: "ChevronDown" }, void 0) }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0)).container;
        var targetElement = container.querySelector('.dropdown-options');
        expect(targetElement).toHaveClass('left-0');
        expect(targetElement).not.toHaveClass('right-0');
    });
    test('with `positionX="right"` property to work correctly', function () {
        var container = render(_jsxs(Dropdown, __assign({ positionX: "right", trigger: _jsx(IconCustom, { icon: "ChevronDown" }, void 0) }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0)).container;
        var targetElement = container.querySelector('.dropdown-options');
        expect(targetElement).not.toHaveClass('left-0');
        expect(targetElement).toHaveClass('right-0');
    });
    test('with `positionY="top"` property to work correctly', function () {
        var container = render(_jsxs(Dropdown, __assign({ positionY: "top", trigger: _jsx(IconCustom, { icon: "ChevronDown" }, void 0) }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0)).container;
        var targetElement = container.querySelector('.dropdown-options');
        expect(targetElement).toHaveClass('bottom-full');
        expect(targetElement).not.toHaveClass('top-full');
    });
    test('with `positionY="bottom"` property to work correctly', function () {
        var container = render(_jsxs(Dropdown, __assign({ positionY: "bottom", trigger: _jsx(IconCustom, { icon: "ChevronDown" }, void 0) }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0)).container;
        var targetElement = container.querySelector('.dropdown-options');
        expect(targetElement).toHaveClass('top-full');
        expect(targetElement).not.toHaveClass('bottom-full');
    });
    test('with "closeOnSelectOption" property to work correctly', function () {
        var container = render(_jsxs(Dropdown, __assign({ closeOnSelectOption: true, trigger: _jsx(IconCustom, { icon: "ChevronDown" }, void 0) }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0)).container;
        var dropdownContainerElement = container.querySelector('.dropdown-options');
        expect(dropdownContainerElement).toHaveClass('hidden');
        fireEvent.click(container.firstElementChild);
        expect(dropdownContainerElement).not.toHaveClass('hidden');
        expect(dropdownContainerElement).toHaveClass('block');
    });
    test('without "closeOnSelectOption" property to work correctly', function () {
        var container = render(_jsxs(Dropdown, __assign({ trigger: _jsx(IconCustom, { icon: "ChevronDown" }, void 0) }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0)).container;
        var dropdownContainerElement = container.querySelector('.dropdown-options');
        expect(dropdownContainerElement).toHaveClass('hidden');
        fireEvent.click(container.firstElementChild.firstElementChild);
        expect(dropdownContainerElement).not.toHaveClass('hidden');
        expect(dropdownContainerElement).toHaveClass('block');
    });
    test('with "checkbox" property to work correctly', function () {
        var container = render(_jsxs(Dropdown, __assign({ checkbox: true, trigger: _jsx(IconCustom, { icon: "ChevronDown" }, void 0) }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0)).container;
        var dropdownContainerElement = container.querySelector('.dropdown-options');
        expect(dropdownContainerElement).toHaveClass('right-0 mt-2');
    });
    test('with "trigger" property to work correctly', function () {
        var container = render(_jsxs(Dropdown, __assign({ trigger: "trigger-text" }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0)).container;
        var dropdownContainerElement = container.querySelector('.dropdown-options');
        expect(dropdownContainerElement).toHaveClass('hidden');
    });
    test('with "ref" property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, dropdownContainerElement;
        return __generator(this, function (_a) {
            container = render(_jsxs(Dropdown, __assign({ closeOnSelectOption: true, trigger: "trigger-text" }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0)).container;
            dropdownContainerElement = container.querySelector('.dropdown-options');
            expect(dropdownContainerElement).toHaveClass('hidden');
            jest
                .spyOn(React, 'useRef')
                .mockReturnValueOnce({ current: document.createElement('button') });
            act(function () {
                fireEvent.click(container.firstElementChild);
            });
            expect(dropdownContainerElement).not.toHaveClass('hidden');
            act(function () {
                fireEvent.mouseDown(document);
            });
            expect(dropdownContainerElement).toHaveClass('hidden');
            return [2];
        });
    }); });
});
//# sourceMappingURL=Dropdown.test.js.map