import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tooltip from './Tooltip';
describe('<Tooltip /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Tooltip, {}, void 0)).container;
        expect(container.firstElementChild).toBeNull();
    });
    test('with "className" and "show" properties to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, className: "test-class" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
        expect(container.firstElementChild).toHaveClass('tooltip block absolute w-full');
    });
    test('with `position="topRight"` property to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, position: "topRight" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('-top-4');
        expect(container.firstElementChild.firstElementChild).toHaveClass('topRight bottom-full right-0');
    });
    test('with `position="bottomLeft"` property to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, position: "bottomLeft" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('-bottom-4');
        expect(container.firstElementChild.firstElementChild).toHaveClass('bottomLeft top-full left-0');
    });
    test('with `position="bottomRight"` property to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, position: "bottomRight" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('-bottom-4');
        expect(container.firstElementChild.firstElementChild).toHaveClass('bottomRight top-full right-0');
    });
    test('with `position="topLeft"` property to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, position: "topLeft" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('-top-4');
        expect(container.firstElementChild.firstElementChild).toHaveClass('topLeft bottom-full left-0');
    });
    test('with `position="topLeft"` and `variant="light"` to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, position: "topLeft", variant: "light" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('bg-light-gray text-dark-gray');
    });
    test('with `position="topLeft"` and `variant="dark"` to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, position: "topLeft", variant: "dark" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('bg-dark-gray text-white');
    });
    test('with `position="bottomRight"` and `variant="light"` to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, position: "bottomRight", variant: "light" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('bg-light-gray text-dark-gray');
    });
    test('with `position="bottomRight"` and `variant="dark"` to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, position: "bottomRight", variant: "dark" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('bg-dark-gray text-white');
    });
    test('with `position="bottomLeft"` and `variant="light"` to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, position: "bottomLeft", variant: "light" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('bg-light-gray text-dark-gray');
    });
    test('with `position="bottomLeft"` and `variant="dark"` to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, position: "bottomLeft", variant: "dark" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('bg-dark-gray text-white');
    });
    test('with `position="topRight"` and `variant="light"` to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, position: "topRight", variant: "light" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('bg-light-gray text-dark-gray');
    });
    test('with `position="topRight"` and `variant="dark"` to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, position: "topRight", variant: "dark" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('bg-dark-gray text-white');
    });
    test('with `size="small"` to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, size: "small" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('w-1/2');
    });
    test('with `size="medium"` to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, size: "medium" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('w-3/4');
    });
    test('with `size="large"` to work correctly', function () {
        var container = render(_jsx(Tooltip, { show: true, size: "large" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('w-full');
    });
});
//# sourceMappingURL=Tooltip.test.js.map