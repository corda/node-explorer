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
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getByText } from '@testing-library/dom';
import Checkbox from './Checkbox';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';
describe('<Checkbox /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Checkbox, { value: "text", onChange: function () { } }, void 0)).container;
        expect(container).toBeInTheDocument();
        var darkedElement = container.querySelector('.checkmark');
        expect(darkedElement).toHaveClass('bg-white');
    });
    test('text or "children" elements to be displayed when existing', function () {
        var container = render(_jsxs(Checkbox, __assign({ value: "input-text", onChange: function () { } }, { children: ["text", _jsx("p", __assign({ id: "test-paragraph" }, { children: "test-paragraph" }), void 0)] }), void 0)).container;
        expect(container).toHaveTextContent('text');
        expect(getByText(container, 'test-paragraph')).toBeTruthy();
    });
    test('with "className" property to display correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", className: "test-class", onChange: function () { } }, void 0)).container;
        expect(container.firstChild).toHaveClass('test-class');
    });
    test('with "dark" property to display correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", dark: true, onChange: function () { } }, void 0)).container;
        var darkedElement = container.querySelector('.checkmark');
        expect(darkedElement).toHaveClass('bg-light-gray');
    });
    test('with "disabled" property to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", disabled: true, onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        var labelElement = container.querySelector('label');
        expect(inputElement).toBeDisabled();
        expect(labelElement).toHaveClass('cursor-not-allowed');
    });
    test('without "disabled" property to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        var labelElement = container.querySelector('label');
        expect(inputElement).not.toBeDisabled();
        expect(labelElement).toHaveClass('cursor-pointer');
    });
    test('with "id" property to work correctly', function () {
        var id = 'abc123';
        var container = render(_jsx(Checkbox, { value: "text", id: id, onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).toHaveProperty('id', id);
    });
    test('without "id" property to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).toHaveProperty('id');
    });
    test('"value" property to display correctly', function () {
        var container = render(_jsx(Checkbox, { value: "test-value", onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).toHaveProperty('value', 'test-value');
    });
    test('with "indeterminate" property to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", indeterminate: true, onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).toHaveProperty('indeterminate', true);
    });
    test('without "indeterminate" property to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).toHaveProperty('indeterminate', false);
    });
    test('with "checked" property to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", checked: true, onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).toBeChecked();
    });
    test('without "checked" property to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).not.toBeChecked();
    });
    test('"onChange" property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, checkbox;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState(false), checked = _a[0], setChecked = _a[1];
                        return (_jsx(Checkbox, { value: "text", checked: checked, onChange: function () { return setChecked(!checked); } }, void 0));
                    };
                    container = render(_jsx(ParentContainer, {}, void 0)).container;
                    checkbox = container.querySelector('input');
                    expect(checkbox).not.toBeChecked();
                    return [4, fireEvent.click(checkbox)];
                case 1:
                    _a.sent();
                    expect(checkbox).toBeChecked();
                    return [4, fireEvent.click(checkbox)];
                case 2:
                    _a.sent();
                    expect(checkbox).not.toBeChecked();
                    return [2];
            }
        });
    }); });
    test('with "invalid" property to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", invalid: true, onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).toHaveClass('invalid');
    });
    test('with "invalid" property and "disabled" property to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", disabled: true, invalid: true, onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).not.toHaveClass('invalid');
    });
    test('with "invalid" property and "required" property to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", required: true, invalid: true, onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).toHaveClass('invalid');
    });
    test('without "invalid" property to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).not.toHaveClass('invalid');
    });
    test('without "invalid" property and with required to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", required: true, onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).not.toHaveClass('invalid');
    });
    test('with "required" property and "modified" to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", required: true, onChange: function () { } }, void 0)).container;
        var checkbox = container.querySelector('input');
        expect(checkbox).not.toBeChecked();
        fireEvent.click(checkbox);
        checkbox.blur();
        expect(checkbox).not.toHaveClass('invalid');
    });
    test('with "required", "disabled" properties and "modified" to work correctly', function () {
        var container = render(_jsx(Checkbox, { value: "text", disabled: true, required: true, onChange: function () { } }, void 0)).container;
        var checkbox = container.querySelector('input');
        expect(checkbox).not.toBeChecked();
        fireEvent.click(checkbox);
        checkbox.blur();
        expect(checkbox).not.toHaveClass('invalid');
    });
    test('text as "children" elements to be displayed', function () {
        var textChild = "text children";
        render(_jsx(Checkbox, __assign({ value: "text", disabled: true, required: true, onChange: function () {
            } }, { children: textChild }), void 0));
        var childrenElement = screen.getByText(textChild, {
            exact: true,
        });
        expect(childrenElement).toBeInTheDocument();
    });
    test('text or element as "children" to be displayed', function () {
        var textChild = "text children";
        render(_jsx(Checkbox, __assign({ value: "text", disabled: true, required: true, onChange: function () { } }, { children: _jsx("div", { children: textChild }, void 0) }), void 0));
        var childrenElement = screen.getByText(textChild, {
            exact: true,
        });
        expect(childrenElement).toBeInTheDocument();
    });
    test('blurred with "modified" state to show error message', function () {
        var ParentContainer = function () {
            var _a = useState(false), checked = _a[0], setChecked = _a[1];
            return (_jsx(Checkbox, { value: "text", required: true, checked: true, invalid: true, onChange: function () { return setChecked(!checked); } }, void 0));
        };
        var container = render(_jsx(ParentContainer, {}, void 0)).container;
        var checkboxElement = container.querySelector('input[type=checkbox]');
        act(function () {
            fireEvent.click(checkboxElement);
            fireEvent.blur(checkboxElement);
        });
        expect(checkboxElement).toHaveClass('invalid');
    });
});
//# sourceMappingURL=Checkbox.test.js.map