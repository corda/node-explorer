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
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';
describe('<Form /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Form, __assign({ onSubmit: function () { } }, { children: "test" }), void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Form, __assign({ onSubmit: function () { }, className: "test-class" }, { children: "test" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
        expect(container.firstElementChild).toHaveClass('bg-white');
    });
    test('with "dark" property to work correctly', function () {
        var container = render(_jsx(Form, __assign({ onSubmit: function () { }, dark: true }, { children: "test" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-light-gray');
    });
    test('with "preview" property to work correctly', function () {
        var container = render(_jsx(Form, { onSubmit: function () { }, title: "title-txt", preview: true }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('py-6');
        var titleElement = screen.getByText('title-txt');
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveClass('text-dark-gray-300 uppercase font-bold tracking-larger text-base');
        expect(titleElement).not.toHaveClass('text-dark-gray font-title text-2xl');
    });
});
//# sourceMappingURL=Form.test.js.map