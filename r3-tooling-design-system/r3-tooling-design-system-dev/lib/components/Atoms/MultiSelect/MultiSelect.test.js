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
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MultiSelect from './MultiSelect';
import { useState } from 'react';
import Option from './../Option/Option';
import userEvent from '@testing-library/user-event';
describe('<MultiSelect /> component', function () {
    test('to be in the DOM tree', function () {
        var ParentContainer = function () {
            var _a = useState(['one', 'two']), value = _a[0], setValue = _a[1];
            return (_jsxs(MultiSelect, __assign({ required: true, helpText: "choose at least one option", errorMessage: "you haven't selected an option", label: "multiselect", value: value, onChange: setValue }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "two" }, { children: "Two" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0), _jsx(Option, __assign({ value: "four" }, { children: "Four" }), void 0), _jsx(Option, __assign({ value: "five" }, { children: "Five" }), void 0), _jsx(Option, __assign({ value: "six" }, { children: "Six" }), void 0), _jsx(Option, __assign({ value: "seven" }, { children: "Seven" }), void 0), _jsx(Option, __assign({ value: "eight" }, { children: "Eight" }), void 0)] }), void 0));
        };
        var container = render(_jsx(ParentContainer, {}, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly ', function () {
        var container = render(_jsx(MultiSelect, { className: "test-class", label: "multiselect", value: [], onChange: function () { } }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "disabled" property to work correctly ', function () {
        render(_jsx(MultiSelect, { disabled: true, label: "multiselect", value: [], onChange: function () { } }, void 0));
        var inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeDisabled();
    });
    test('with "helpText" property to work correctly ', function () {
        var helpText = 'help-text';
        render(_jsx(MultiSelect, { helpText: helpText, label: "multiselect", value: [], onChange: function () { } }, void 0));
        var helpTextElement = screen.getByText(helpText);
        expect(helpTextElement).toBeInTheDocument();
    });
    test('with "errorMessage" and "disabled" properties to work correctly ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var errorMessageText, inputElement, errorMessageElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errorMessageText = 'error-text';
                    render(_jsx(MultiSelect, { errorMessage: errorMessageText, label: "multiselect", required: true, disabled: true, invalid: true, value: [], onChange: function () { } }, void 0));
                    inputElement = screen.getByRole('textbox');
                    expect(inputElement).toBeRequired();
                    return [4, userEvent.click(inputElement)];
                case 1:
                    _a.sent();
                    return [4, fireEvent.blur(inputElement)];
                case 2:
                    _a.sent();
                    errorMessageElement = screen.queryByText(errorMessageText);
                    expect(errorMessageElement).toBeInTheDocument();
                    return [2];
            }
        });
    }); });
    test('with "errorMessage" and "modified" state to work correctly ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var errorMessageText, container, inputElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errorMessageText = 'error-text';
                    container = render(_jsx(MultiSelect, { errorMessage: errorMessageText, helpText: "help-text", label: "multiselect", required: true, dropdownBlock: true, invalid: true, value: [], onChange: function () { } }, void 0)).container;
                    inputElement = container.querySelector('input');
                    act(function () {
                        fireEvent.focus(inputElement);
                        fireEvent.blur(inputElement);
                    });
                    return [4, waitFor(function () {
                            var errorMessageElement = screen.queryByText(errorMessageText);
                            expect(errorMessageElement).toBeInTheDocument();
                        })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    test('removing chip element and forwardSelectedValues to work correctly ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, chips, newChipsToRemove;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState(['one', 'three']), mutiSelectValue = _a[0], setMultiselectValue = _a[1];
                        return (_jsxs(MultiSelect, __assign({ errorMessage: "error-text", helpText: "help-text", label: "multiselect", required: true, dropdownBlock: true, invalid: true, value: mutiSelectValue, onChange: setMultiselectValue }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0));
                    };
                    container = render(_jsx(ParentContainer, {}, void 0)).container;
                    chips = container.querySelector('.chips').children;
                    expect(chips).toHaveLength(2);
                    return [4, fireEvent.click(chips[0].firstElementChild.firstElementChild)];
                case 1:
                    _a.sent();
                    newChipsToRemove = container.querySelector('.chips').children;
                    expect(newChipsToRemove[0]).toHaveTextContent('Three');
                    expect(newChipsToRemove).toHaveLength(1);
                    return [2];
            }
        });
    }); });
    test('children"s "onChange" was called on change', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, options, newChipsToRemove;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState(['one', 'three']), mutiSelectValue = _a[0], setMultiselectValue = _a[1];
                        return (_jsxs(MultiSelect, __assign({ label: "multiselect", required: true, dropdownBlock: true, invalid: true, value: mutiSelectValue, onChange: setMultiselectValue }, { children: [_jsx(Option, __assign({ value: "one" }, { children: "One" }), void 0), _jsx(Option, __assign({ value: "three" }, { children: "Three" }), void 0)] }), void 0));
                    };
                    container = render(_jsx(ParentContainer, {}, void 0)).container;
                    options = container.querySelector('.dropdown').children;
                    expect(options).toHaveLength(2);
                    return [4, fireEvent.click(options[1].firstElementChild.nextElementSibling.firstElementChild
                            .firstElementChild)];
                case 1:
                    _a.sent();
                    newChipsToRemove = container.querySelector('.chips').children;
                    expect(newChipsToRemove).toHaveLength(1);
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=MultiSelect.test.js.map