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
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PasswordInput from './PasswordInput';
import { useState } from 'react';
describe('<PasswordInput /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(PasswordInput, { label: "passwordinput-label", value: 'p@ssword', onChange: function () { } }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with correct "value" property to work', function () {
        var container = render(_jsx(PasswordInput, { label: "passwordinput-label", value: "p@ssword", onChange: function () { } }, void 0)).container;
        var passwordElement = container.querySelector('input');
        expect(passwordElement.getAttribute('value')).toEqual('p@ssword');
    });
    test('with empty "value" property to work', function () {
        var container = render(_jsx(PasswordInput, { label: "passwordinput-label", value: "p@ssword", onChange: function () { } }, void 0)).container;
        var passwordElement = container.querySelector('input');
        expect(passwordElement.getAttribute('value')).toMatch('');
    });
    test('"onChange" method on "add" button', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, passwordElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState('p@ssword'), passwordValue = _a[0], setPasswordValue = _a[1];
                        return (_jsx(_Fragment, { children: _jsx(PasswordInput, { label: "emailinput-label", value: passwordValue, onChange: function (e) { return setPasswordValue(e.target.value); } }, void 0) }, void 0));
                    };
                    container = render(_jsx(ParentContainer, {}, void 0)).container;
                    passwordElement = container.querySelector('input');
                    return [4, fireEvent.change(passwordElement, { target: { value: 'p@@ssword' } })];
                case 1:
                    _a.sent();
                    expect(passwordElement.getAttribute('value')).toEqual('p@@ssword');
                    return [2];
            }
        });
    }); });
    test('with "className" property to display correctly', function () {
        var container = render(_jsx(PasswordInput, { className: "test-class", label: "emailinput-label", value: "p@ssword", onChange: function (e) { } }, void 0)).container;
        expect(container.firstChild).toHaveClass('test-class');
    });
    test('with "dark" property to display correctly', function () {
        var container = render(_jsx(PasswordInput, { label: "emailinput-label", dark: true, value: "", onChange: function () { } }, void 0)).container;
        var passwordElement = container.querySelector('input');
        expect(passwordElement).toHaveClass('gray bg-light-gray');
        var darkedElement = passwordElement.nextElementSibling.firstElementChild;
        expect(darkedElement).toHaveClass('bg-light-gray');
        expect(darkedElement).not.toHaveClass('bg-white');
    });
    test('with "disabled" property to display correctly', function () {
        var container = render(_jsx(PasswordInput, { label: "emailinput-label", disabled: true, value: "", onChange: function () { } }, void 0)).container;
        var passwordElement = container.querySelector('input');
        expect(passwordElement).toHaveClass('cursor-not-allowed');
        expect(passwordElement).toBeDisabled();
    });
    test('with "errorMessage" and "invalid" properties and modified to display correctly', function () {
        var errorMessageText = 'error-msg';
        var container = render(_jsx(PasswordInput, { label: "emailinput-label", errorMessage: errorMessageText, invalid: true, value: 'p@ssword', onChange: function () { } }, void 0)).container;
        var passwordElement = container.querySelector('input');
        fireEvent.focus(passwordElement);
        fireEvent.change(passwordElement, { target: { value: 'np@@ssword' } });
        fireEvent.blur(passwordElement);
        var errorElement = screen.getByText(errorMessageText, {
            exact: true,
        });
        expect(errorElement).toBeInTheDocument();
    });
    test('with "helpText" property to display correctly', function () {
        var helpText = 'help-msg';
        render(_jsx(PasswordInput, { label: "emailinput-label", helpText: helpText, invalid: true, value: '', onChange: function () { } }, void 0));
        var helpTextElement = screen.getByText(helpText, {
            exact: true,
        });
        expect(helpTextElement).toBeInTheDocument();
    });
    test('with "id" property to work correctly', function () {
        var id = 'abc123';
        var container = render(_jsx(PasswordInput, { label: "emailinput-label", helpText: "help-msg", invalid: true, id: id, value: 'test@test.test', onChange: function () { } }, void 0)).container;
        var passwordElement = container.querySelector('input');
        expect(passwordElement).toHaveProperty('id', id);
    });
    test('with "required" property to work correctly', function () {
        var container = render(_jsx(PasswordInput, { required: true, label: "emailinput-label", helpText: "help-msg", invalid: true, value: '', onChange: function () { } }, void 0)).container;
        var passwordElement = container.querySelector('input');
        expect(passwordElement).toBeRequired();
    });
    test('with "peekpassword" state set to true to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, passwordElement, peekPaswordChangeElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = render(_jsx(PasswordInput, { required: true, label: "emailinput-label", helpText: "help-msg", invalid: true, value: '', onChange: function () { } }, void 0)).container;
                    passwordElement = container.querySelector('input');
                    peekPaswordChangeElement = passwordElement.previousElementSibling;
                    return [4, fireEvent.click(peekPaswordChangeElement)];
                case 1:
                    _a.sent();
                    expect(passwordElement.getAttribute('type')).toBe('text');
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=PasswordInput.test.js.map