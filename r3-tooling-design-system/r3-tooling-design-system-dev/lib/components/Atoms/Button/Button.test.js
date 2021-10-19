import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';
describe('<Button /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Button, { variant: "primary", size: "large" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Button, { variant: "primary", size: "large", className: "test-class" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with `variant=primary` property to work correctly', function () {
        var container = render(_jsx(Button, { variant: "primary", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-dark-gray text-white cursor-pointer leading-normal hover:shadow-0-3-6-bluegray focus:shadow-0-0-12-blue');
    });
    test('with `variant=secondary` property to work correctly', function () {
        var container = render(_jsx(Button, { variant: "secondary", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('border-2 border-dark-gray text-dark-gray cursor-pointer leading-none hover:bg-blue hover:text-white hover:border-transparent focus:shadow-0-0-12-blue');
    });
    test('with `variant=tertiary` property to work correctly', function () {
        var container = render(_jsx(Button, { variant: "tertiary", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-blue cursor-pointer leading-normal focus:shadow-0-0-12-blue');
    });
    test('with `variant=label` property to work correctly', function () {
        var container = render(_jsx(Button, { variant: "label", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-medium-light-gray-300  cursor-pointer leading-normal focus:shadow-0-0-12-medium-light-gray');
    });
    test('with `variant=warning` property to work correctly', function () {
        var container = render(_jsx(Button, { variant: "warning", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-yellow text-white  cursor-pointer leading-normal hover:shadow-0-3-6-yellow-600 focus:shadow-0-0-12-yellow-600');
    });
    test('with `variant=danger` property to work correctly', function () {
        var container = render(_jsx(Button, { variant: "danger", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-red text-white  cursor-pointer leading-normal hover:shadow-0-3-6-red-600 focus:shadow-0-0-12-red-600');
    });
    test('with `variant=labeldanger` property to work correctly', function () {
        var container = render(_jsx(Button, { variant: "labeldanger", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-red cursor-pointer leading-normal focus:shadow-0-0-12-red-400');
    });
    test('with `variant=primary` and "dark" property to work correctly', function () {
        var container = render(_jsx(Button, { dark: true, variant: "primary", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-white text-dark-gray cursor-pointer leading-normal hover:shadow-0-3-6-dark-gray focus:shadow-0-0-12-white');
    });
    test('with `variant=secondary` and "dark" property to work correctly', function () {
        var container = render(_jsx(Button, { dark: true, variant: "secondary", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('border-2 border-white text-white cursor-pointer leading-none hover:bg-blue-300 hover:border-transparent focus:shadow-0-0-12-white');
    });
    test('with `variant=tertiary` and "dark" property to work correctly', function () {
        var container = render(_jsx(Button, { dark: true, variant: "tertiary", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-blue-300 cursor-pointer leading-normal focus:shadow-0-0-12-white');
    });
    test('with `variant=label` and "dark" property to work correctly', function () {
        var container = render(_jsx(Button, { dark: true, variant: "label", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-white  cursor-pointer leading-normal focus:shadow-0-0-12-white');
    });
    test('with `variant=warning` and "dark" property to work correctly', function () {
        var container = render(_jsx(Button, { dark: true, variant: "warning", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-yellow text-white  cursor-pointer leading-normal hover:shadow-0-3-6-yellow-600 focus:shadow-0-0-12-white');
    });
    test('with `variant=danger` and "dark" property to work correctly', function () {
        var container = render(_jsx(Button, { dark: true, variant: "danger", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-red text-white  cursor-pointer leading-normal hover:shadow-0-3-6-red-600 focus:shadow-0-0-12-white');
    });
    test('with `variant=labeldanger` and "dark" property to work correctly', function () {
        var container = render(_jsx(Button, { dark: true, variant: "labeldanger", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-red cursor-pointer leading-normal focus:shadow-0-0-12-white');
    });
    test('with `variant=primary` and "disabled" property to work correctly', function () {
        var container = render(_jsx(Button, { disabled: true, variant: "primary", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-dark-gray-100 text-dark-gray-200 cursor-not-allowed leading-normal');
    });
    test('with `variant=secondary` and "disabled" property to work correctly', function () {
        var container = render(_jsx(Button, { disabled: true, variant: "secondary", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('border-2 border-dark-gray-200 text-dark-gray-200 cursor-not-allowed leading-none');
    });
    test('with `variant=tertiary` and "disabled" property to work correctly', function () {
        var container = render(_jsx(Button, { disabled: true, variant: "tertiary", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-dark-gray-100 cursor-not-allowed leading-normal');
    });
    test('with `variant=label` and "disabled" property to work correctly', function () {
        var container = render(_jsx(Button, { disabled: true, variant: "label", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-dark-gray-100 cursor-not-allowed leading-normal');
    });
    test('with `variant=warning` and "disabled" property to work correctly', function () {
        var container = render(_jsx(Button, { disabled: true, variant: "warning", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-dark-gray-100 text-dark-gray-200 cursor-not-allowed leading-normal');
    });
    test('with `variant=danger` and "disabled" property to work correctly', function () {
        var container = render(_jsx(Button, { disabled: true, variant: "danger", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-dark-gray-100 text-dark-gray-200 cursor-not-allowed leading-normal');
    });
    test('with `variant=labeldanger` and "disabled" property to work correctly', function () {
        var container = render(_jsx(Button, { disabled: true, variant: "labeldanger", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-dark-gray-100 cursor-not-allowed leading-normal');
    });
    test('with `variant=tertiary` and "noPaddingFocus" property to work correctly', function () {
        var container = render(_jsx(Button, { noPaddingFocus: true, variant: "tertiary", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-blue cursor-pointer leading-normal');
    });
    test('with `variant=tertiary` and "dark" and "noPaddingFocus" property to work correctly', function () {
        var container = render(_jsx(Button, { noPaddingFocus: true, dark: true, variant: "tertiary", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-blue-300 cursor-pointer leading-normal');
    });
    test('with `variant=label` and "noPaddingFocus" property to work correctly', function () {
        var container = render(_jsx(Button, { noPaddingFocus: true, variant: "label", size: "large" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-medium-light-gray-300  cursor-pointer leading-normal');
    });
    test('with `variant=label` and "dark" and "noPaddingFocus" property to work correctly', function () {
        var container = render(_jsx(Button, { noPaddingFocus: true, dark: true, variant: "label", size: "large" }, void 0)).container;
        expect(container.firstElementChild).not.toHaveClass('focus:shadow-0-0-12-white');
    });
    test('with `variant=labeldanger` and "noPaddingFocus" property to work correctly', function () {
        var container = render(_jsx(Button, { noPaddingFocus: true, variant: "labeldanger", size: "large" }, void 0)).container;
        expect(container.firstElementChild).not.toHaveClass('focus:shadow-0-0-12-red-400');
    });
    test('with `variant=labeldanger` and "dark" and "noPaddingFocus" property to work correctly', function () {
        var container = render(_jsx(Button, { noPaddingFocus: true, dark: true, variant: "labeldanger", size: "large" }, void 0)).container;
        expect(container.firstElementChild).not.toHaveClass('focus:shadow-0-0-12-white');
    });
    test('with "isLink" property to work correctly', function () {
        var toHref = "test/1";
        var container = render(_jsx(Button, { variant: "primary", isLink: true, to: toHref, rel: "rel-text", target: "_blank", size: "small" }, void 0)).container;
        expect(container.firstElementChild.getAttribute('href')).toEqual(toHref);
    });
    test('with "iconLeft" property to work correctly', function () {
        var container = render(_jsx(Button, { variant: "primary", iconLeft: "Download", size: "small", className: "test-btn" }, void 0)).container;
        var buttonElement = container.querySelector('.button-primary-text');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.previousElementSibling).toHaveClass('icon-container');
    });
    test('with "iconLeft" and "isLoading" properties to work correctly', function () {
        var rotatingIconClass = 'button-icon-rotate';
        var container = render(_jsx(Button, { variant: "primary", isLoading: true, iconLeft: "Download", size: "small", className: "test-btn" }, void 0)).container;
        var buttonElement = container.querySelector('.button-primary-text');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.previousElementSibling).toHaveClass('icon-container');
        expect(buttonElement.previousElementSibling.firstElementChild).toHaveClass(rotatingIconClass);
    });
    test('with "iconLeft", "isLoading" and "loadingAnimationClass" properties to work correctly', function () {
        var loadingClass = 'test-loading';
        var container = render(_jsx(Button, { variant: "primary", isLoading: true, iconLeft: "Download", loadingAnimationClass: loadingClass, size: "small", className: "test-btn" }, void 0)).container;
        var buttonElement = container.querySelector('.button-primary-text');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.previousElementSibling).toHaveClass('icon-container');
        expect(buttonElement.previousElementSibling.firstElementChild).toHaveClass(loadingClass);
    });
    test('with "iconLeft", "isLoading" and "loadingIcon" properties to work correctly', function () {
        var rotatingIconClass = 'button-icon-rotate';
        var container = render(_jsx(Button, { variant: "primary", isLoading: true, iconLeft: "Download", loadingIcon: "AtomVariant", size: "small", className: "test-btn" }, void 0)).container;
        var buttonElement = container.querySelector('.button-primary-text');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.previousElementSibling).toHaveClass('icon-container');
        expect(buttonElement.previousElementSibling.firstElementChild).toHaveClass(rotatingIconClass);
    });
    test('with "iconLeft", "isLoading", "loadingIcon" and "loadingAnimationClass" properties to work correctly', function () {
        var loadingClass = 'test-loading';
        var container = render(_jsx(Button, { variant: "primary", isLoading: true, iconLeft: "Download", loadingIcon: "AtomVariant", loadingAnimationClass: loadingClass, size: "small", className: "test-btn" }, void 0)).container;
        var buttonElement = container.querySelector('.button-primary-text');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.previousElementSibling).toHaveClass('icon-container');
        expect(buttonElement.previousElementSibling.firstElementChild).toHaveClass(loadingClass);
    });
    test('with "iconRight" property to work correctly', function () {
        var container = render(_jsx(Button, { variant: "primary", iconRight: "Download", size: "small", className: "test-btn" }, void 0)).container;
        var buttonElement = container.querySelector('.button-primary-text');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.nextElementSibling).toHaveClass('icon-container');
    });
    test('with "iconRight" and "isLoading" properties to work correctly', function () {
        var rotatingIconClass = 'button-icon-rotate';
        var container = render(_jsx(Button, { variant: "primary", isLoading: true, iconRight: "Download", size: "small", className: "test-btn" }, void 0)).container;
        var buttonElement = container.querySelector('.button-primary-text');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.nextElementSibling).toHaveClass('icon-container');
        expect(buttonElement.nextElementSibling.firstElementChild).toHaveClass(rotatingIconClass);
    });
    test('with "iconRight", "isLoading" and "loadingAnimationClass" properties to work correctly', function () {
        var loadingClass = 'test-loading';
        var container = render(_jsx(Button, { variant: "primary", isLoading: true, iconRight: "Download", loadingAnimationClass: loadingClass, size: "small", className: "test-btn" }, void 0)).container;
        var buttonElement = container.querySelector('.button-primary-text');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.nextElementSibling).toHaveClass('icon-container');
        expect(buttonElement.nextElementSibling.firstElementChild).toHaveClass(loadingClass);
    });
    test('with "iconRight", "isLoading" and "loadingIcon" properties to work correctly', function () {
        var rotatingIconClass = 'button-icon-rotate';
        var container = render(_jsx(Button, { variant: "primary", isLoading: true, iconRight: "Download", loadingIcon: "AtomVariant", size: "small", className: "test-btn" }, void 0)).container;
        var buttonElement = container.querySelector('.button-primary-text');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.nextElementSibling).toHaveClass('icon-container');
        expect(buttonElement.nextElementSibling.firstElementChild).toHaveClass(rotatingIconClass);
    });
    test('with "iconRight", "isLoading", "loadingIcon" and "loadingAnimationClass" properties to work correctly', function () {
        var loadingClass = 'test-loading';
        var container = render(_jsx(Button, { variant: "primary", isLoading: true, iconRight: "Download", loadingIcon: "AtomVariant", loadingAnimationClass: loadingClass, size: "small", className: "test-btn" }, void 0)).container;
        var buttonElement = container.querySelector('.button-primary-text');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.nextElementSibling).toHaveClass('icon-container');
        expect(buttonElement.nextElementSibling.firstElementChild).toHaveClass(loadingClass);
    });
    test('without "iconRight" and "iconLeft" and "loading" state properties to work correctly', function () {
        var rotatingIconClass = 'button-icon-rotate';
        var container = render(_jsx(Button, { variant: "primary", isLoading: true, size: "small", className: "test-btn" }, void 0)).container;
        var buttonElement = container.querySelector('.button-primary-text');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.nextElementSibling).toHaveClass('icon-container');
        expect(buttonElement.nextElementSibling.firstElementChild).toHaveClass(rotatingIconClass);
    });
    test('without "iconRight" and "iconLeft" and not "loading" state properties to work correctly', function () {
        var container = render(_jsx(Button, { variant: "primary", size: "small", className: "test-btn" }, void 0)).container;
        expect(container.firstElementChild.children).toHaveLength(1);
    });
    test('with "iconLeft" and ""iconRight"" property to work correctly', function () {
        var container = render(_jsx(Button, { variant: "primary", iconLeft: "Download", iconRight: "Download", size: "small" }, void 0)).container;
        var buttonElement = container.querySelector('.button-primary-text');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.previousElementSibling).toHaveClass('icon-container');
        expect(buttonElement.nextElementSibling).toHaveClass('icon-container');
    });
});
//# sourceMappingURL=Button.test.js.map