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
import Select from './Select';
import userEvent from '@testing-library/user-event';
describe('<Select /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Select, { value: "text-value", onChange: function () { }, label: "choose one" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "label" property to work correctly', function () {
        var labelText = 'choose one';
        render(_jsx(Select, { value: "text-value", label: labelText, onChange: function () { } }, void 0));
        expect(screen.getByText(labelText)).toBeInTheDocument();
    });
    test('with "value" property to work correctly', function () {
        var labelText = 'choose one';
        render(_jsx(Select, { value: "text-value", label: labelText, onChange: function () { } }, void 0));
        var selectElement = screen.getByRole('combobox');
        expect(selectElement).toHaveClass('border-medium-light-gray');
        expect(selectElement.getAttribute('data-value')).toEqual('text-value');
        expect(selectElement.nextElementSibling).toHaveClass('text-medium-light-gray');
    });
    test('with empty "value" property to work correctly', function () {
        render(_jsx(Select, { value: "", label: "choose one", onChange: function () { } }, void 0));
        var selectElement = screen.getByRole('combobox');
        expect(selectElement).toHaveClass('border-medium-light-gray-300');
        expect(selectElement.nextElementSibling).toHaveClass('text-dark-gray-300');
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Select, { className: "test-class", value: "text-value", label: "choose one", onChange: function () { } }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "dark" property to work correctly', function () {
        render(_jsx(Select, { dark: true, value: "text-value", label: "choose one", onChange: function () { } }, void 0));
        var selectElement = screen.getByRole('combobox');
        expect(selectElement).toHaveClass('gray bg-light-gray');
        expect(selectElement).not.toHaveClass('white bg-white');
        var darkedElement = selectElement.nextElementSibling.firstChild;
        expect(darkedElement).toHaveClass('bg-light-gray');
    });
    test('with "disabled" property to work correctly', function () {
        var container = render(_jsx(Select, { disabled: true, value: "text-value", label: "choose one", onChange: function () { } }, void 0)).container;
        var selectElement = screen.getByRole('combobox');
        expect(selectElement).toBeDisabled();
        expect(container.firstElementChild.firstElementChild).toHaveClass('text-medium-light-gray-300');
    });
    test('with "invalid" and "errorMessage" properties and "modified" to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var errorMessageText, selectElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errorMessageText = 'error-text';
                    render(_jsx(Select, { invalid: true, errorMessage: errorMessageText, value: "text-value", label: "choose one", onChange: function () { } }, void 0));
                    selectElement = screen.getByRole('combobox');
                    return [4, userEvent.click(selectElement)];
                case 1:
                    _a.sent();
                    return [4, fireEvent.blur(selectElement)];
                case 2:
                    _a.sent();
                    expect(screen.queryByText(errorMessageText)).toBeInTheDocument();
                    return [2];
            }
        });
    }); });
    test('with "helpText" property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var helpText;
        return __generator(this, function (_a) {
            helpText = 'help-text';
            render(_jsx(Select, { helpText: helpText, value: "text-value", label: "choose one", onChange: function () { } }, void 0));
            expect(screen.queryByText(helpText)).toBeInTheDocument();
            return [2];
        });
    }); });
    test('with "id" property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, selectElement;
        return __generator(this, function (_a) {
            id = 'abc123';
            render(_jsx(Select, { id: id, value: "text-value", label: "choose one", onChange: function () { } }, void 0));
            selectElement = screen.getByRole('combobox');
            expect(selectElement.getAttribute('id')).toEqual(id);
            return [2];
        });
    }); });
});
//# sourceMappingURL=Select.test.js.map