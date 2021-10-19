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
import Alert from './Alert';
describe('<Alert /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Alert, { variant: "success" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with `variant="success"` property to have correct "className"', function () {
        var container = render(_jsx(Alert, { variant: "success" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('alert-success');
    });
    test('with `variant="danger"` property to have correct "className"', function () {
        var container = render(_jsx(Alert, { variant: "danger" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('alert-danger');
    });
    test('with `variant="warning"` property to have correct "className"', function () {
        var container = render(_jsx(Alert, { variant: "warning" }, void 0)).container;
        expect(container.firstChild).toHaveClass('alert-warning');
    });
    test('with `variant="danger"` and `withIcon` property to have icon,', function () {
        var container = render(_jsx(Alert, { variant: "danger", withIcon: true, icon: "CloseCircleOutline" }, void 0)).container;
        var iconElement = container.querySelector('.icon-container');
        expect(iconElement).toBeInTheDocument();
        expect(iconElement.firstElementChild).toHaveClass('text-red-400');
    });
    test('with `variant="warning"` and `withIcon` property to have icon,', function () {
        var container = render(_jsx(Alert, { variant: "warning", withIcon: true, icon: "CloseCircleOutline" }, void 0)).container;
        var iconElement = container.querySelector('.icon-container');
        expect(iconElement).toBeInTheDocument();
        expect(iconElement.firstElementChild).toHaveClass('text-yellow');
    });
    test('with "variant" success and "withIcon" property to have icon,', function () {
        var container = render(_jsx(Alert, { variant: "success", withIcon: true, icon: "CloseCircleOutline" }, void 0)).container;
        var iconElement = container.querySelector('.icon-container');
        expect(container.firstElementChild).toHaveClass('bg-green-100');
        expect(iconElement).toBeInTheDocument();
        expect(iconElement.firstElementChild).toHaveClass('text-green');
    });
    test('without `withIcon` property to not have icon', function () {
        var container = render(_jsx(Alert, { variant: "danger" }, void 0)).container;
        var iconElement = container.querySelector('.icon-container');
        expect(iconElement).not.toBeInTheDocument();
    });
    test('with `className` property to have the correct classes', function () {
        var container = render(_jsx(Alert, { variant: "success", className: "test-class" }, void 0)).container;
        expect(container.firstChild).toHaveClass('test-class');
    });
    test('with `title` property to display paragraph with the rescpective text', function () {
        var titleText = 'title-txt';
        var container = render(_jsx(Alert, { variant: "success", title: titleText }, void 0)).container;
        var paragraphElement = container.querySelector('.alert-title');
        expect(paragraphElement).toBeInTheDocument();
        expect(paragraphElement).toHaveTextContent(titleText);
    });
    test('without `title` property NOT to display title paragraph', function () {
        var container = render(_jsx(Alert, { variant: "success" }, void 0)).container;
        var paragraphElement = container.querySelector('.alert-title');
        expect(paragraphElement).toBeNull();
    });
    test('with text as "children" propery to show them in the document', function () {
        render(_jsx(Alert, __assign({ variant: "success" }, { children: "text children" }), void 0));
        var childrenElement = screen.getByText('text children', {
            exact: true,
        });
        expect(childrenElement).toBeInTheDocument();
    });
    test('with elements as "children" to show them in the document', function () {
        var container = render(_jsx(Alert, __assign({ variant: "success" }, { children: _jsx("div", __assign({ className: "alert-child" }, { children: "first child" }), void 0) }), void 0)).container;
        var childElement = container.querySelector('.alert-child');
        expect(childElement).toBeInTheDocument();
    });
});
//# sourceMappingURL=Alert.test.js.map