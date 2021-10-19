import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Badge from './Badge';
Object.assign(navigator, {
    clipboard: {
        writeText: function () { },
    },
});
describe('<Badge /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Badge, { children: "text" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Badge, { className: "test-class" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
        expect(container.firstElementChild).toHaveClass('bg-medium-light-gray-100');
    });
    test('with `variant=green` property to work correctly', function () {
        var container = render(_jsx(Badge, { variant: "green" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-green-100');
        expect(container.firstElementChild).not.toHaveClass('bg-red-100');
        expect(container.firstElementChild).not.toHaveClass('bg-blue-100');
        expect(container.firstElementChild).not.toHaveClass('bg-yellow-300');
    });
    test('with `variant=blue` property blue to work correctly', function () {
        var container = render(_jsx(Badge, { variant: "blue" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-blue-100');
        expect(container.firstElementChild).not.toHaveClass('bg-red-100');
        expect(container.firstElementChild).not.toHaveClass('bg-green-100');
        expect(container.firstElementChild).not.toHaveClass('bg-yellow-300');
    });
    test('with `variant=yellow` property yellow blue to work correctly', function () {
        var container = render(_jsx(Badge, { variant: "yellow" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-yellow-300');
        expect(container.firstElementChild).not.toHaveClass('bg-red-100');
        expect(container.firstElementChild).not.toHaveClass('bg-green-100');
        expect(container.firstElementChild).not.toHaveClass('bg-blue-100');
    });
    test('with `variant=red` property red blue to work correctly', function () {
        var container = render(_jsx(Badge, { variant: "red" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-red-100');
        expect(container.firstElementChild).not.toHaveClass('bg-yellow-300');
        expect(container.firstElementChild).not.toHaveClass('bg-green-100');
        expect(container.firstElementChild).not.toHaveClass('bg-blue-100');
    });
    test('with "whiteText" property to work correctly', function () {
        var container = render(_jsx(Badge, { whiteText: true }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('text-white');
        expect(container.firstElementChild).not.toHaveClass('text-dark-gray');
    });
    test('with "customColour" property to work correctly', function () {
        var container = render(_jsx(Badge, { customColour: "olive" }, void 0)).container;
        expect(container.firstElementChild.getAttribute('style')).toEqual('background-color: olive;');
        expect(container.firstElementChild).toHaveClass('bg-medium-light-gray-100');
    });
});
//# sourceMappingURL=Badge.test.js.map