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
import TimeInput from './TimeInput';
import userEvent from '@testing-library/user-event';
describe('<TimeInput /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(TimeInput, { label: "date input 1", value: new Date(), onChange: function (event) { }, required: true, errorMessage: "ERROR", invalid: false }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(TimeInput, { className: "test-class", label: "date input 1", value: new Date(), onChange: function (event) { }, required: true, errorMessage: "ERROR", invalid: false }, void 0)).container;
        expect(container).toBeInTheDocument();
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "dark" property to work correctly', function () {
        render(_jsx(TimeInput, { dark: true, label: "date input 1", value: new Date(), onChange: function (event) { }, required: true, errorMessage: "ERROR", invalid: false }, void 0));
        var darkedElement = screen.getByText('date input 1');
        expect(darkedElement).toBeInTheDocument();
        expect(darkedElement).toHaveClass('bg-light-gray');
        expect(darkedElement).not.toHaveClass('bg-white');
    });
    test('with "disabled" property to work correctly', function () {
        render(_jsx(TimeInput, { disabled: true, label: "date input 1", value: new Date(), onChange: function (event) { }, required: true, errorMessage: "ERROR", invalid: false }, void 0));
        var disabledElement = screen.getByText('date input 1').parentElement;
        expect(disabledElement).toBeInTheDocument();
        expect(disabledElement).toHaveClass('text-medium-light-gray-300 cursor-not-allowed');
    });
    test('with "helpText" property to work correctly', function () {
        var helpText = 'helpText';
        render(_jsx(TimeInput, { disabled: true, label: "date input 1", value: new Date(), onChange: function (event) { }, required: true, errorMessage: "ERROR", helpText: helpText, invalid: false }, void 0));
        var helpTextElement = screen.getByText(helpText);
        expect(helpTextElement).toBeInTheDocument();
    });
    test('with null "value" property to work correctly', function () {
        var container = render(_jsx(TimeInput, { disabled: true, label: "date input 1", value: null, onChange: function (event) { }, required: true, errorMessage: "ERROR", invalid: false }, void 0)).container;
        var inputElement = container.querySelector('.date-time-input');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.getAttribute('value')).toEqual('');
    });
    test('"onClose" property to change "modified" state', function () { return __awaiter(void 0, void 0, void 0, function () {
        var errorMessageText, ParentContainer, container, flatPickrOpenerElement, errorMessageElement;
        return __generator(this, function (_a) {
            errorMessageText = 'error-txt';
            ParentContainer = function () {
                return (_jsx(TimeInput, { label: "date input 1", value: null, required: true, onChange: function (event) { }, errorMessage: errorMessageText, invalid: true }, void 0));
            };
            container = render(_jsx(ParentContainer, {}, void 0)).container;
            flatPickrOpenerElement = container.querySelector('input[type=text]');
            act(function () {
                fireEvent.click(flatPickrOpenerElement);
            });
            act(function () {
                userEvent.click(document.body);
            });
            errorMessageElement = screen.getByText(errorMessageText);
            expect(errorMessageElement).toBeInTheDocument();
            return [2];
        });
    }); });
});
//# sourceMappingURL=TimeInput.test.js.map