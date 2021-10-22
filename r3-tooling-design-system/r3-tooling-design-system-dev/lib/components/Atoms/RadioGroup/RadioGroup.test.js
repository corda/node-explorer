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
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RadioGroup from './RadioGroup';
import RadioButton from '../RadioButton/RadioButton';
import { useState } from 'react';
describe('<RadioGroup /> component', function () {
    test('to be in the DOM tree with "className" and "label" and "invalid" property', function () {
        var container = render(_jsx(RadioGroup, { className: "test-class", label: "Radio Buttons", groupName: "r3-buttons-set", value: "radio1", invalid: true, preview: true, onChange: function () { } }, void 0)).container;
        expect(container).toBeInTheDocument();
        expect(container.firstElementChild).toHaveClass('test-class');
        expect(screen.getByText('Radio Buttons')).toBeInTheDocument();
        expect(container.firstElementChild).toHaveClass('invalid');
        expect(container.firstElementChild).toHaveClass('py-4 border-b border-medium-light-gray-100');
    });
    test('selected value and children to work correctly', function () {
        var container = render(_jsxs(RadioGroup, __assign({ className: "test-class", label: "Radio Buttons", groupName: "r3-buttons-set", value: "radio1", invalid: true, onChange: function () { } }, { children: [_jsx(RadioButton, __assign({ value: "radio1" }, { children: "radio1" }), void 0), _jsx(RadioButton, __assign({ value: "radio2" }, { children: "radio2" }), void 0), _jsx(RadioButton, __assign({ value: "radio3" }, { children: "radio3" }), void 0), _jsx(RadioButton, __assign({ value: "radio4" }, { children: "radio4" }), void 0), "only text child"] }), void 0)).container;
        expect(container.firstElementChild.children).toHaveLength(5);
        var selectedRadioButton = container.firstElementChild.children[1];
        var nonSelectedRadioButton = container.firstElementChild.children[2];
        expect(selectedRadioButton.querySelector('input[type=radio]')).toBeChecked();
        expect(nonSelectedRadioButton.querySelector('input[type=radio]')).not.toBeChecked();
    });
    test('"onChange" property with selected value to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, selectedRadioButton, nonSelectedRadioButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState('radio1'), selectedValue = _a[0], setSelectedValue = _a[1];
                        var _b = useState(false), radioInvalid = _b[0], setRadioInvalid = _b[1];
                        var onChangeHandler = function (value) {
                            setSelectedValue(value);
                            setRadioInvalid(false);
                        };
                        return (_jsx(_Fragment, { children: _jsxs(RadioGroup, __assign({ className: "test-class", label: "Radio Buttons", groupName: "r3-buttons-set", value: selectedValue, invalid: radioInvalid, onChange: onChangeHandler }, { children: [_jsx(RadioButton, __assign({ value: "radio1" }, { children: "radio1" }), void 0), _jsx(RadioButton, __assign({ value: "radio2" }, { children: "radio2" }), void 0), _jsx(RadioButton, __assign({ value: "radio3" }, { children: "radio3" }), void 0), _jsx(RadioButton, __assign({ value: "radio4" }, { children: "radio4" }), void 0)] }), void 0) }, void 0));
                    };
                    container = render(_jsx(ParentContainer, {}, void 0)).container;
                    selectedRadioButton = container.firstElementChild.children[1];
                    nonSelectedRadioButton = container.firstElementChild.children[2];
                    expect(selectedRadioButton.querySelector('input[type=radio]')).toBeChecked();
                    expect(nonSelectedRadioButton.querySelector('input[type=radio]')).not.toBeChecked();
                    return [4, fireEvent.click(nonSelectedRadioButton.firstElementChild.firstElementChild)];
                case 1:
                    _a.sent();
                    return [4, expect(selectedRadioButton.querySelector('input[type=radio]')).not.toBeChecked()];
                case 2:
                    _a.sent();
                    return [4, expect(nonSelectedRadioButton.querySelector('input[type=radio]')).toBeChecked()];
                case 3:
                    _a.sent();
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=RadioGroup.test.js.map