import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Option from './Option';
describe('<Option /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Option, { value: "opt-value" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Option, { value: "opt-value", className: "test-class" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "dropdown" and "active" properties to work correctly', function () {
        var container = render(_jsx(Option, { value: "opt-value", dropdown: true, active: true }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('active');
    });
    test('with "dropdown" and "icon" properties to work correctly', function () {
        var container = render(_jsx(Option, { value: "opt-value", dropdown: true, icon: "Magnify" }, void 0)).container;
        expect(container.firstElementChild.querySelector('p').children).toHaveLength(1);
    });
    test('with "disabeld" property to work correctly', function () {
        var container = render(_jsx(Option, { value: "opt-value", disabled: true }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('hidden');
        expect(container.firstElementChild).toBeDisabled();
    });
});
//# sourceMappingURL=Option.test.js.map