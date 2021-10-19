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
import Textarea from './Textarea';
describe('<Textarea /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Textarea, { label: "textarea", value: "textarea-txt", onChange: function () { } }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "label property to work correctly"', function () {
        var labelText = 'textarea-label';
        render(_jsx(Textarea, { label: labelText, value: "textarea-value", onChange: function () { } }, void 0));
        expect(screen.getByText(labelText)).toBeInTheDocument();
    });
    test('with "value" property to work correctly"', function () {
        var valueText = 'textarea-value';
        render(_jsx(Textarea, { label: "textarea-label", value: valueText, onChange: function () { } }, void 0));
        expect(screen.getByText(valueText)).toBeInTheDocument();
        var textareaElement = screen.getByRole('textbox');
        expect(textareaElement).toHaveClass('border-medium-light-gray');
        expect(textareaElement.getAttribute('data-value')).toEqual(valueText);
    });
    test('with empty "value" property to work correctly"', function () {
        render(_jsx(Textarea, { label: "textarea-label", value: "", onChange: function () { } }, void 0));
        var textareaElement = screen.getByRole('textbox');
        expect(textareaElement).toHaveClass('border-medium-light-gray-300');
        expect(textareaElement.getAttribute('data-value')).toEqual('');
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Textarea, { className: "test-class", label: "textarea-label", value: "textarea-value", onChange: function () { } }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "dark" property to work correctly"', function () {
        render(_jsx(Textarea, { dark: true, label: "textarea-label", value: "textarea-txt", onChange: function () { } }, void 0));
        expect(screen.getByText('textarea-label')).toHaveClass('bg-light-gray');
        var textareaElement = screen.getByRole('textbox');
        expect(textareaElement).toHaveClass('gray bg-light-gray');
    });
    test('with "disabled" property to work correctly"', function () {
        render(_jsx(Textarea, { disabled: true, label: "textarea-label", value: "textarea-txt", onChange: function () { } }, void 0));
        var textareaElement = screen.getByRole('textbox');
        expect(textareaElement).toHaveClass('cursor-not-allowed');
        expect(screen.getByText('textarea-label').parentElement).toHaveClass('text-medium-light-gray-300 cursor-not-allowed');
    });
    test('with "helpText" property to work correctly"', function () {
        var helpText = 'textarea-helptext';
        render(_jsx(Textarea, { helpText: helpText, label: "textarea-label", value: "textarea-txt", onChange: function () { } }, void 0));
        expect(screen.getByText(helpText)).toBeInTheDocument();
    });
    test('with "required" and "id" properties to work correctly"', function () {
        render(_jsx(Textarea, { required: true, id: "abc123", label: "textarea-label", value: "textarea-txt", onChange: function () { } }, void 0));
        var textareaElement = screen.getByRole('textbox');
        expect(textareaElement).toBeRequired();
        expect(textareaElement.getAttribute('id')).toBe('abc123');
    });
    test('with "invalid" and "erroMessage" properties and "modified" state to work correctly"', function () { return __awaiter(void 0, void 0, void 0, function () {
        var errorMessageText, textareaElement, errorMessageElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errorMessageText = 'textarea-errormessage';
                    render(_jsx(Textarea, { invalid: true, errorMessage: errorMessageText, label: "textarea-label", value: "textarea-txt", onChange: function () { } }, void 0));
                    textareaElement = screen.getByRole('textbox');
                    return [4, fireEvent.change(textareaElement, { target: { value: 'new value' } })];
                case 1:
                    _a.sent();
                    return [4, fireEvent.blur(textareaElement)];
                case 2:
                    _a.sent();
                    return [4, screen.queryByText(errorMessageText)];
                case 3:
                    errorMessageElement = _a.sent();
                    expect(errorMessageElement).toBeInTheDocument();
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=Textarea.test.js.map