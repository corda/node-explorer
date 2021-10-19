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
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BreadcrumbItem from './BreadcrumbItem';
describe('<BreadcrumbItem /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(BreadcrumbItem, { children: "test" }, void 0)).container;
        expect(container).toBeInTheDocument();
        expect(container.firstElementChild.firstElementChild).toHaveClass('text-blue cursor-pointer');
        expect(container.firstElementChild.children).toHaveLength(2);
    });
    test('with "active" property to work correctly', function () {
        var container = render(_jsx(BreadcrumbItem, __assign({ active: true }, { children: "test" }), void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('text-dark-gray cursor-default');
    });
});
//# sourceMappingURL=BreadcrumbItem.test.js.map