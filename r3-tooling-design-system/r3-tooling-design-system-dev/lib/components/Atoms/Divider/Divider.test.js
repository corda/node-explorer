import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Divider from './Divider';
describe('<Divider /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Divider, {}, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Divider, { className: "test-class" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "dark" property to work correctly', function () {
        var container = render(_jsx(Divider, { dark: true }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-dark-gray-400');
    });
});
//# sourceMappingURL=Divider.test.js.map