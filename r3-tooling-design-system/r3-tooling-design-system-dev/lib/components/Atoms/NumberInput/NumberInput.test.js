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
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NumberInput from './NumberInput';
import { useState } from 'react';
describe('<NumbetInput /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(NumberInput, { value: "1", onChange: function () { } }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with correct "value" property to work', function () {
        render(_jsx(NumberInput, { value: '233', onChange: function () { } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement.getAttribute('value')).toEqual('233');
    });
    test('with empty "value" property to work', function () {
        render(_jsx(NumberInput, { value: "", onChange: function () { } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement.getAttribute('value')).toMatch('');
    });
    test('"onClick" method on "subtract" button works ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, numberInputElement, subtractButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState('111'), numberValue = _a[0], setNumberValue = _a[1];
                        return (_jsx(_Fragment, { children: _jsx(NumberInput, { id: "numberid", value: numberValue, onChange: function (e) { return setNumberValue(e.target.value); } }, void 0) }, void 0));
                    };
                    render(_jsx(ParentContainer, {}, void 0));
                    numberInputElement = screen.getByRole('spinbutton');
                    subtractButton = numberInputElement.previousElementSibling;
                    expect(subtractButton).toBeInTheDocument();
                    return [4, fireEvent.click(subtractButton)];
                case 1:
                    _a.sent();
                    return [4, waitFor(function () {
                            expect(numberInputElement).toHaveValue(110);
                        })];
                case 2:
                    _a.sent();
                    return [4, fireEvent.click(subtractButton)];
                case 3:
                    _a.sent();
                    return [4, waitFor(function () {
                            expect(numberInputElement).toHaveValue(109);
                        })];
                case 4:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    test('"onClick" method on "add" button works ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, numberInputElement, addButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState('111'), numberValue = _a[0], setNumberValue = _a[1];
                        return (_jsx(_Fragment, { children: _jsx(NumberInput, { id: "numberid", value: numberValue, onChange: function (e) { return setNumberValue(e.target.value); } }, void 0) }, void 0));
                    };
                    render(_jsx(ParentContainer, {}, void 0));
                    numberInputElement = screen.getByRole('spinbutton');
                    addButton = numberInputElement.nextElementSibling;
                    expect(addButton).toBeInTheDocument();
                    return [4, fireEvent.click(addButton)];
                case 1:
                    _a.sent();
                    return [4, waitFor(function () {
                            expect(numberInputElement).toHaveValue(112);
                        })];
                case 2:
                    _a.sent();
                    return [4, fireEvent.click(addButton)];
                case 3:
                    _a.sent();
                    return [4, waitFor(function () {
                            expect(numberInputElement).toHaveValue(113);
                        })];
                case 4:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    test('"onClick" method combined on "add" and "subtract" buttons works ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, numberInputElement, subtractButton, addButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState('111'), numberValue = _a[0], setNumberValue = _a[1];
                        return (_jsx(_Fragment, { children: _jsx(NumberInput, { id: "numberid", value: numberValue, onChange: function (e) { return setNumberValue(e.target.value); } }, void 0) }, void 0));
                    };
                    render(_jsx(ParentContainer, {}, void 0));
                    numberInputElement = screen.getByRole('spinbutton');
                    subtractButton = numberInputElement.previousElementSibling;
                    addButton = numberInputElement.nextElementSibling;
                    return [4, fireEvent.click(subtractButton)];
                case 1:
                    _a.sent();
                    return [4, fireEvent.click(addButton)];
                case 2:
                    _a.sent();
                    return [4, waitFor(function () {
                            expect(numberInputElement).toHaveValue(111);
                        })];
                case 3:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    test('"onChange" property works ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, numberInputElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState('111'), numberValue = _a[0], setNumberValue = _a[1];
                        return (_jsx(_Fragment, { children: _jsx(NumberInput, { id: "numberid", value: numberValue, onChange: function (e) { return setNumberValue(e.target.value); } }, void 0) }, void 0));
                    };
                    render(_jsx(ParentContainer, {}, void 0));
                    numberInputElement = screen.getByRole('spinbutton');
                    fireEvent.change(numberInputElement, { target: { value: '233' } });
                    return [4, waitFor(function () {
                            expect(numberInputElement).toHaveValue(233);
                        })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    test('"onChange" property along with "step" property works ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, numberInputElement, subtractButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState('111'), numberValue = _a[0], setNumberValue = _a[1];
                        return (_jsx(_Fragment, { children: _jsx(NumberInput, { id: "numberid", value: numberValue, step: 2, onChange: function (e) { return setNumberValue(e.target.value); } }, void 0) }, void 0));
                    };
                    render(_jsx(ParentContainer, {}, void 0));
                    numberInputElement = screen.getByRole('spinbutton');
                    subtractButton = numberInputElement.previousElementSibling;
                    return [4, fireEvent.click(subtractButton)];
                case 1:
                    _a.sent();
                    return [4, waitFor(function () {
                            expect(numberInputElement).toHaveValue(109);
                        })];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    test('with "className" property to display correctly', function () {
        var container = render(_jsx(NumberInput, { className: "test-class", value: '233', onChange: function () { } }, void 0)).container;
        expect(container.firstChild).toHaveClass('test-class');
    });
    test('with empty "className" property to display correctly', function () {
        var container = render(_jsx(NumberInput, { className: "", value: '233', onChange: function () { } }, void 0)).container;
        expect(container.firstChild).not.toHaveClass('test-class');
    });
    test('with "dark" property to display correctly', function () {
        var container = render(_jsx(NumberInput, { dark: true, value: '233', onChange: function () { } }, void 0)).container;
        var darkedElement = container.firstElementChild.firstElementChild;
        expect(darkedElement).toHaveClass('bg-light-gray');
        expect(darkedElement).not.toHaveClass('bg-white');
    });
    test('without "dark" property to display correctly', function () {
        var container = render(_jsx(NumberInput, { value: '233', onChange: function () { } }, void 0)).container;
        var nonDarkedElement = container.firstElementChild.firstElementChild;
        expect(nonDarkedElement).toHaveClass('bg-white');
        expect(nonDarkedElement).not.toHaveClass('bg-light-gray');
    });
    test('with "disabled" property to display correctly', function () {
        var container = render(_jsx(NumberInput, { disabled: true, value: '233', onChange: function () { } }, void 0)).container;
        expect(container.firstChild.firstChild).toHaveClass('cursor-not-allowed');
        expect(container.firstChild.firstChild.firstChild).toHaveClass('text-medium-light-gray-300');
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement).toBeDisabled();
        var addButton = numberInputElement.nextElementSibling;
        expect(addButton).toHaveClass('text-medium-light-gray-300');
    });
    test('without "disabled" property to display correctly', function () {
        var container = render(_jsx(NumberInput, { value: '233', onChange: function () { } }, void 0)).container;
        expect(container.firstChild.firstChild).not.toHaveClass('cursor-not-allowed');
        expect(container.firstChild.firstChild.firstChild).toHaveClass('text-blue hover:bg-blue hover:text-white hover:border-transparent');
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement).not.toBeDisabled();
        var addButton = numberInputElement.nextElementSibling;
        expect(addButton).toHaveClass('text-blue hover:bg-blue hover:text-white hover:border-transparent');
    });
    test('with "errorMessage" and "invalid" properties to display correctly', function () {
        var errorMessageText = 'error-msg';
        render(_jsx(NumberInput, { errorMessage: errorMessageText, invalid: true, value: '233', onChange: function () { } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        fireEvent.focus(numberInputElement);
        fireEvent.change(numberInputElement, { target: { value: '234' } });
        fireEvent.blur(numberInputElement);
        var errorElement = screen.getByText(errorMessageText, {
            exact: true,
        });
        expect(errorElement).toBeInTheDocument();
    });
    test('with "helpText" property to display correctly', function () {
        var helpText = 'help-msg';
        render(_jsx(NumberInput, { helpText: helpText, value: '233', onChange: function () { } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        fireEvent.focus(numberInputElement);
        fireEvent.change(numberInputElement, { target: { value: '234' } });
        fireEvent.blur(numberInputElement);
        var helpTextElement = screen.getByText(helpText, {
            exact: true,
        });
        expect(helpTextElement).toBeInTheDocument();
    });
    test('with "id" property to work correctly', function () {
        var id = 'abc123';
        var container = render(_jsx(NumberInput, { id: id, value: '233', onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).toHaveProperty('id', id);
    });
    test('without "id" property to work correctly', function () {
        var container = render(_jsx(NumberInput, { id: "abc123", value: '233', onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).toHaveProperty('id');
    });
    test('with "required" property to work correctly', function () {
        var container = render(_jsx(NumberInput, { id: "abc123", required: true, value: '233', onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).toBeRequired();
    });
    test('without "required" property to work correctly', function () {
        var container = render(_jsx(NumberInput, { id: "abc123", value: '233', onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).not.toBeRequired();
    });
    test('with non "required" property to work correctly', function () {
        var container = render(_jsx(NumberInput, { id: "abc123", required: false, value: '233', onChange: function () { } }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).not.toBeRequired();
    });
});
//# sourceMappingURL=NumberInput.test.js.map