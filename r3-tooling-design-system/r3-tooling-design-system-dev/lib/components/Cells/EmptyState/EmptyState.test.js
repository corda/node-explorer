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
import EmptyState from './EmptyState';
describe('<EmptyState /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(EmptyState, __assign({ icon: "AstronautHello", title: "title-txt" }, { children: "test" }), void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "show" and "className" property to work correctly', function () {
        var container = render(_jsx(EmptyState, __assign({ icon: "AstronautHello", title: "title-txt", show: true, className: "test-class" }, { children: "test" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
});
//# sourceMappingURL=EmptyState.test.js.map