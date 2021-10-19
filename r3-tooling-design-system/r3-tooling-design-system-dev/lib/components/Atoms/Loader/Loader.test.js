import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from './Loader';
describe('<Loader /> component', function () {
    test('with "title" to be in the DOM tree', function () {
        var container = render(_jsx(Loader, { size: "small", text: "loader-txt" }, void 0)).container;
        expect(container).toBeInTheDocument();
        expect(screen.getByText('loader-txt')).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Loader, { size: "small", className: "test-class" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('test-class');
    });
    test('with "loaderSpeed" property to be animated according to it', function () {
        var container = render(_jsx(Loader, { size: "small", loaderSpeed: 0.2 }, void 0)).container;
        expect(container.firstElementChild.firstElementChild.getAttribute('style')).toEqual('animation: load-rotate 0.2s infinite linear;');
    });
    test('with "loaderSpeed" property to be animated defaultly', function () {
        var container = render(_jsx(Loader, { size: "small" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild.getAttribute('style')).toEqual(null);
    });
    test('with `size="small"` to display correctly', function () {
        var container = render(_jsx(Loader, { size: "small" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('w-16 h-16');
    });
    test('with `size="medium"` to display correctly', function () {
        var container = render(_jsx(Loader, { size: "medium" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('w-20 h-20');
    });
    test('with `size="large"` to display correctly', function () {
        var container = render(_jsx(Loader, { size: "large" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('w-24 h-24');
    });
});
//# sourceMappingURL=Loader.test.js.map