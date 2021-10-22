import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateTimeInputEl from './DateTimeInputEl';
describe('<DateTimeInputEl /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(DateTimeInputEl, { id: "test-id", type: "date", defaultValue: new Date().toDateString(), dark: false, disabled: false, required: false, invalid: false, modified: false }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "id" property to work correctly', function () {
        var id = 'test-id';
        var container = render(_jsx(DateTimeInputEl, { id: id, type: "date", defaultValue: "Thu May 20 2021", dark: false, disabled: false, required: false, invalid: false, modified: false }, void 0)).container;
        var inputElement = container.querySelector('.date-time-input');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.getAttribute('id')).toEqual(id);
    });
    test('with "type" property to work correctly', function () {
        var container = render(_jsx(DateTimeInputEl, { id: "test-id", type: "datetime", defaultValue: "Thu May 20 2021", dark: false, disabled: false, required: false, invalid: false, modified: false }, void 0)).container;
        var inputElement = container.querySelector('.date-time-input');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.getAttribute('type')).toEqual('datetime');
    });
    test('with "dark" property to work correctly', function () {
        var container = render(_jsx(DateTimeInputEl, { id: "test-id", type: "time", defaultValue: "Thu May 20 2021", dark: true, disabled: false, required: false, invalid: false, modified: false }, void 0)).container;
        var inputElement = container.querySelector('.date-time-input');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('gray bg-light-gray');
        expect(inputElement).not.toHaveClass('white bg-white');
    });
    test('"with disabled" property to work correctly', function () {
        var container = render(_jsx(DateTimeInputEl, { id: "test-id", type: "time", defaultValue: "Thu May 20 2021", dark: true, disabled: true, required: false, invalid: false, modified: false }, void 0)).container;
        var inputElement = container.querySelector('.date-time-input');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('cursor-not-allowed');
        expect(inputElement).toBeDisabled();
    });
    test('with empty "defaultValue" property to work correctly', function () {
        var container = render(_jsx(DateTimeInputEl, { id: "test-id", type: "time", defaultValue: "", dark: true, disabled: true, required: false, invalid: false, modified: false }, void 0)).container;
        var inputElement = container.querySelector('input');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('border-medium-light-gray-300');
    });
    test('"invalid" property and "modified" to work correctly', function () {
        var container = render(_jsx(DateTimeInputEl, { id: "test-id", type: "time", defaultValue: "Thu May 20 2021", dark: true, disabled: true, required: false, invalid: true, modified: false }, void 0)).container;
        var inputElement = container.querySelector('.date-time-input');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.getAttribute('data-invalid')).toEqual('true');
        expect(inputElement.getAttribute('data-modified')).toEqual('false');
    });
    test('with "required" property to work correctly', function () {
        var container = render(_jsx(DateTimeInputEl, { id: "test-id", type: "time", defaultValue: "Thu May 20 2021", dark: true, disabled: true, required: true, invalid: true, modified: false }, void 0)).container;
        var inputElement = container.querySelector('.date-time-input');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toBeRequired();
    });
});
//# sourceMappingURL=DateTimeInputEl.test.js.map