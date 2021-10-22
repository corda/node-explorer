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
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MultiSelectInput from './MultiSelectInput';
import { cloneElement, isValidElement, useState } from 'react';
import Option from './../Option/Option';
describe('<MultiSelectInput /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(MultiSelectInput, { value: ['one', 'two'], label: "ms-label", onBlur: function () { }, onRemove: function () { } }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "label" property to work correctly', function () {
        render(_jsx(MultiSelectInput, { value: ['one', 'two'], label: "ms-label", onBlur: function () { }, onRemove: function () { } }, void 0));
        expect(screen.getByText('ms-label')).toBeInTheDocument();
    });
    test('with "id" property to work correctly', function () {
        var id = 'abc123';
        render(_jsx(MultiSelectInput, { value: ['one', 'two'], label: "ms-label", id: id, onBlur: function () { }, onRemove: function () { } }, void 0));
        var inputElement = screen.getByRole('textbox');
        expect(inputElement.getAttribute('id')).toEqual(id);
    });
    test('with "dark" property to work correctly', function () {
        var container = render(_jsx(MultiSelectInput, { value: ['one', 'two'], label: "ms-label", dark: true, onBlur: function () { }, onRemove: function () { } }, void 0)).container;
        var labelElement = container.firstElementChild.firstElementChild;
        var labelTextElement = screen.getByText('ms-label');
        expect(labelElement).toHaveClass('bg-light-gray');
        expect(labelTextElement).toHaveClass('bg-light-gray');
    });
    test('with "disabled" property to work correctly', function () {
        var container = render(_jsx(MultiSelectInput, { value: ['one', 'two'], label: "ms-label", disabled: true, onBlur: function () { }, onRemove: function () { } }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('pointer-events-none');
        var labelElement = container.firstElementChild.firstElementChild;
        expect(labelElement).toHaveClass('text-medium-light-gray-300 cursor-not-allowed');
        var customIconElement = container.querySelector('.input-icon');
        expect(customIconElement).toHaveClass('text-medium-light-gray-300');
        var inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeDisabled();
        var labelTextWrapperElement = screen.getByText('ms-label').parentElement;
        expect(labelTextWrapperElement).toHaveClass('text-medium-light-gray-300');
    });
    test('with "invalid" property to work correctly', function () {
        var container = render(_jsx(MultiSelectInput, { value: ['one', 'two'], label: "ms-label", invalid: true, onBlur: function () { }, onRemove: function () { } }, void 0)).container;
        var labelElement = container.firstElementChild.firstElementChild;
        expect(labelElement.getAttribute('data-invalid')).toBeTruthy();
    });
    test('with "focused" property to work correctly', function () {
        var container = render(_jsx(MultiSelectInput, { value: ['one', 'two'], label: "ms-label", focused: true, onBlur: function () { }, onRemove: function () { } }, void 0)).container;
        var labelElement = container.firstElementChild.firstElementChild;
        expect(labelElement).toHaveClass('focused border-dark-gray-300');
    });
    test('with "modified" property to work correctly', function () {
        var container = render(_jsx(MultiSelectInput, { value: ['one', 'two'], label: "ms-label", modified: true, onBlur: function () { }, onRemove: function () { } }, void 0)).container;
        var labelElement = container.firstElementChild.firstElementChild;
        expect(labelElement.getAttribute('data-modified')).toBeTruthy();
    });
    test('with "required" property to work correctly', function () {
        render(_jsx(MultiSelectInput, { value: ['one', 'two'], label: "ms-label", required: true, onBlur: function () { }, onRemove: function () { } }, void 0));
        var inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeRequired();
    });
    test('with "value" property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, labelElement;
        return __generator(this, function (_a) {
            container = render(_jsx(MultiSelectInput, { value: ['one', 'tow'], label: "ms-label", onBlur: function () { }, onRemove: function () { } }, void 0)).container;
            labelElement = container.firstElementChild.firstElementChild;
            expect(labelElement).toHaveClass('border-medium-light-gray');
            return [2];
        });
    }); });
    test('with empty "value" property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, labelElement;
        return __generator(this, function (_a) {
            container = render(_jsx(MultiSelectInput, { value: [], label: "ms-label", onBlur: function () { }, onRemove: function () { } }, void 0)).container;
            labelElement = container.firstElementChild.firstElementChild;
            expect(labelElement).toHaveClass('text-dark-gray-300');
            return [2];
        });
    }); });
    test('with "options" property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, chipsHolderElement, chipsHolderElementChildren, firstSelectedChip, firstSelectedChipRemoveIcon, newChipsHolderElement, newChipsHolderElementChildren;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState(['one', 'two']), value = _a[0], setValue = _a[1];
                        var options = [
                            _jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0),
                            _jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0),
                            _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0),
                            _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0),
                            _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0),
                            _jsx(Option, __assign({ value: "four" }, { children: "Four" }), void 0),
                            _jsx(Option, __assign({ value: "five" }, { children: "Five" }), void 0),
                            _jsx(Option, __assign({ value: "six" }, { children: "Six" }), void 0),
                            _jsx(Option, __assign({ value: "seven" }, { children: "Seven" }), void 0),
                            _jsx(Option, __assign({ value: "eight" }, { children: "Eight" }), void 0),
                        ];
                        var mappedOptions = options.map(function (child, index) {
                            if (isValidElement(child)) {
                                return cloneElement(child, __assign(__assign({}, child.props), { checked: value.includes(child.props.value), onChange: function () { } }));
                            }
                        });
                        return (_jsx(MultiSelectInput, { value: value, label: "ms-label", onBlur: function () { }, onRemove: function () {
                                setValue(['two']);
                            }, options: mappedOptions }, void 0));
                    };
                    container = render(_jsx(ParentContainer, {}, void 0)).container;
                    chipsHolderElement = container.querySelector('.chips');
                    chipsHolderElementChildren = chipsHolderElement.children;
                    expect(chipsHolderElementChildren).toHaveLength(4);
                    firstSelectedChip = chipsHolderElementChildren[0];
                    firstSelectedChipRemoveIcon = firstSelectedChip.firstElementChild.firstElementChild;
                    return [4, fireEvent.click(firstSelectedChipRemoveIcon)];
                case 1:
                    _a.sent();
                    newChipsHolderElement = container.querySelector('.chips');
                    newChipsHolderElementChildren = newChipsHolderElement.children;
                    expect(newChipsHolderElementChildren).toHaveLength(2);
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=MultiSelectInput.test.js.map