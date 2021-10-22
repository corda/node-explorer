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
import Tab from './Tab';
describe('<Tab /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Tab, __assign({ name: "design" }, { children: "content for design" }), void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Tab, __assign({ className: "test-class", name: "design" }, { children: "content for design" }), void 0)).container;
        expect(container.firstChild).toHaveClass('test-class');
    });
    test('without "className" property to work correctly', function () {
        var container = render(_jsx(Tab, __assign({ name: "design" }, { children: "content for design" }), void 0)).container;
        expect(container.firstChild).not.toHaveClass('test-class');
    });
    test('with "dark" property to work correctly', function () {
        var container = render(_jsx(Tab, __assign({ variant: "dark", name: "design" }, { children: "content for design" }), void 0)).container;
        expect(container.firstChild).toHaveClass('tab-dark');
    });
    test('with "light" property to work correctly', function () {
        var container = render(_jsx(Tab, __assign({ variant: "light", name: "design" }, { children: "content for design" }), void 0)).container;
        expect(container.firstChild).toHaveClass('tab-light');
    });
});
//# sourceMappingURL=Tab.test.js.map