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
import { jsx as _jsx } from "react/jsx-runtime";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RadioButton from './RadioButton';
import { useState } from 'react';
describe('<RadioButton /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(RadioButton, __assign({ value: "radio1" }, { children: "Radio 1" }), void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "value" property to work correctly', function () {
        render(_jsx(RadioButton, __assign({ value: "radio1" }, { children: "Radio 1" }), void 0));
        var inputElement = screen.getByRole('radio');
        expect(inputElement.getAttribute('value')).toEqual('radio1');
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(RadioButton, __assign({ className: "test-class", value: "radio1" }, { children: "Radio 1" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "checked/dark/disabled/id/groupName" properties to work correctly', function () {
        var groupName = 'group-name';
        render(_jsx(RadioButton, __assign({ checked: true, dark: true, disabled: true, id: "testid", groupName: groupName, value: "radio1" }, { children: "Radio 1" }), void 0));
        var inputElement = screen.getByRole('radio');
        expect(inputElement).toBeChecked();
        expect(inputElement).toBeDisabled();
        expect(inputElement.getAttribute('id')).toEqual('testid');
        expect(inputElement.getAttribute('name')).toEqual(groupName);
        expect(inputElement.nextElementSibling).toHaveClass('bg-light-gray');
    });
    test('"onChange" properties to work correctly', function () {
        var ParentContainer = function () {
            var _a = useState('value'), value = _a[0], setValue = _a[1];
            var onChangeHanlder = function (value) {
                setValue(value + "-changed");
            };
            return (_jsx(RadioButton, __assign({ checked: true, onChange: function () { return onChangeHanlder(value); }, groupName: "group-name", value: value }, { children: "Radio 1" }), void 0));
        };
        render(_jsx(ParentContainer, {}, void 0));
        var inputElement = screen.getByRole('radio');
        expect(inputElement.getAttribute('value')).toEqual('value');
        fireEvent.change(inputElement, { target: { value: 'value-changed' } });
        expect(inputElement.getAttribute('value')).toEqual('value-changed');
    });
});
//# sourceMappingURL=RadioButton.test.js.map