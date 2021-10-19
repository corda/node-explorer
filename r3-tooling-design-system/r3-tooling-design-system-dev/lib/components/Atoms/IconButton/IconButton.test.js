import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconButton from './IconButton';
describe('<IconButton /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(IconButton, { variant: "primary", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(IconButton, { variant: "primary", size: "large", icon: "Twitter", className: "test-class" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
        expect(container.firstElementChild).toHaveClass('bg-dark-gray text-white cursor-pointer  hover:shadow-0-3-6-bluegray focus:shadow-0-0-12-blue');
    });
    test('with `variant=primary` property to work correctly', function () {
        var container = render(_jsx(IconButton, { variant: "primary", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-dark-gray text-white cursor-pointer  hover:shadow-0-3-6-bluegray focus:shadow-0-0-12-blue');
    });
    test('with `variant=secondary` property to work correctly', function () {
        var container = render(_jsx(IconButton, { variant: "secondary", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('border-2 border-dark-gray text-dark-gray cursor-pointer  hover:bg-blue hover:text-white hover:border-transparent focus:shadow-0-0-12-blue');
    });
    test('with `variant=tertiary` property to work correctly', function () {
        var container = render(_jsx(IconButton, { variant: "tertiary", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-blue cursor-pointer leading-normal focus:shadow-0-0-12-blue');
    });
    test('with `variant=label` property to work correctly', function () {
        var container = render(_jsx(IconButton, { variant: "label", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-medium-light-gray-300  cursor-pointer leading-normal focus:shadow-0-0-12-medium-light-gray');
    });
    test('with `variant=warning` property to work correctly', function () {
        var container = render(_jsx(IconButton, { variant: "warning", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-yellow text-white  cursor-pointer  hover:shadow-0-3-6-yellow-600 focus:shadow-0-0-12-yellow-600');
    });
    test('with `variant=danger` property to work correctly', function () {
        var container = render(_jsx(IconButton, { variant: "danger", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-red text-white  cursor-pointer  hover:shadow-0-3-6-red-600 focus:shadow-0-0-12-red-600');
    });
    test('with `variant=labeldanger` property to work correctly', function () {
        var container = render(_jsx(IconButton, { variant: "labeldanger", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-red cursor-pointer leading-normal focus:shadow-0-0-12-red-400');
    });
    test('with `variant=icon` property to work correctly', function () {
        var container = render(_jsx(IconButton, { variant: "icon", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-transparent text-dark-gray cursor-pointer');
    });
    test('with `variant=primary` and "dark" property to work correctly', function () {
        var container = render(_jsx(IconButton, { dark: true, variant: "primary", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-white text-dark-gray cursor-pointer  hover:shadow-0-3-6-dark-gray focus:shadow-0-0-12-white');
    });
    test('with `variant=secondary` and "dark" property to work correctly', function () {
        var container = render(_jsx(IconButton, { dark: true, variant: "secondary", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('border-2 border-white text-white cursor-pointer  hover:bg-blue-300 hover:border-transparent focus:shadow-0-0-12-white');
    });
    test('with `variant=tertiary` and "dark" property to work correctly', function () {
        var container = render(_jsx(IconButton, { dark: true, variant: "tertiary", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-blue-300 cursor-pointer leading-normal focus:shadow-0-0-12-white');
    });
    test('with `variant=label` and "dark" property to work correctly', function () {
        var container = render(_jsx(IconButton, { dark: true, variant: "label", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-white  cursor-pointer leading-normal focus:shadow-0-0-12-white');
    });
    test('with `variant=warning` and "dark" property to work correctly', function () {
        var container = render(_jsx(IconButton, { dark: true, variant: "warning", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-yellow text-white  cursor-pointer leading-normal hover:shadow-0-3-6-yellow-600 focus:shadow-0-0-12-white');
    });
    test('with `variant=danger` and "dark" property to work correctly', function () {
        var container = render(_jsx(IconButton, { dark: true, variant: "danger", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-red text-white  cursor-pointer leading-normal hover:shadow-0-3-6-red-600 focus:shadow-0-0-12-white');
    });
    test('with `variant=label` and "dark" property to work correctly', function () {
        var container = render(_jsx(IconButton, { dark: true, variant: "label", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-white  cursor-pointer leading-normal focus:shadow-0-0-12-white');
    });
    test('with `variant=icon` and "dark" property to work correctly', function () {
        var container = render(_jsx(IconButton, { dark: true, variant: "icon", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-transparent text-white cursor-pointer');
    });
    test('with `variant=primary` and "disabled" property to work correctly', function () {
        var container = render(_jsx(IconButton, { disabled: true, variant: "primary", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-dark-gray-100 text-dark-gray-200 cursor-not-allowed');
    });
    test('with `variant=secondary` and "disabled" property to work correctly', function () {
        var container = render(_jsx(IconButton, { disabled: true, variant: "secondary", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('border-2 border-dark-gray-200 text-dark-gray-200 cursor-not-allowed leading-none');
    });
    test('with `variant=tertiary` and "disabled" property to work correctly', function () {
        var container = render(_jsx(IconButton, { disabled: true, variant: "tertiary", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-dark-gray-100 cursor-not-allowed leading-normal');
    });
    test('with `variant=label` and "disabled" property to work correctly', function () {
        var container = render(_jsx(IconButton, { disabled: true, variant: "label", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-dark-gray-100 cursor-not-allowed leading-normal');
    });
    test('with `variant=warning` and "disabled" property to work correctly', function () {
        var container = render(_jsx(IconButton, { disabled: true, variant: "warning", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-dark-gray-100 text-dark-gray-200 cursor-not-allowed leading-normal');
    });
    test('with `variant=danger` and "disabled" property to work correctly', function () {
        var container = render(_jsx(IconButton, { disabled: true, variant: "danger", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-dark-gray-100 text-dark-gray-200 cursor-not-allowed leading-normal');
    });
    test('with `variant=label` and "disabled" property to work correctly', function () {
        var container = render(_jsx(IconButton, { disabled: true, variant: "label", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-dark-gray-100 cursor-not-allowed leading-normal');
    });
    test('with `variant=icon` and "disabled" property to work correctly', function () {
        var container = render(_jsx(IconButton, { disabled: true, variant: "icon", size: "large", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-transparent text-dark-gray-200 cursor-not-allowed');
    });
    test('with "isLink" property to work correctly', function () {
        var container = render(_jsx(IconButton, { variant: "icon", isLink: true, to: "test/1", rel: "rel-text", target: "_blank", size: "medium", icon: "Twitter" }, void 0)).container;
        expect(container.firstElementChild.getAttribute('href')).toEqual('test/1');
    });
});
//# sourceMappingURL=IconButton.test.js.map