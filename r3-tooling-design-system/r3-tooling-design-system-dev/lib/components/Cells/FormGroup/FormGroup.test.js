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
import FormGroup from './FormGroup';
describe('<FormGroup /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(FormGroup, { legend: "legend-txt", onSubmit: function () { } }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(FormGroup, __assign({ legend: "legend-txt", onSubmit: function () { }, className: "test-class" }, { children: "test" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
        var legendElement = container.firstElementChild.firstElementChild;
        expect(legendElement).toHaveClass('font-title text-dark-gray text-lg');
    });
    test('with "preview" property to work correctly', function () {
        var container = render(_jsx(FormGroup, __assign({ legend: "legend-txt", onSubmit: function () { }, className: "test-class", preview: true }, { children: "test" }), void 0)).container;
        var legendElement = container.firstElementChild.firstElementChild;
        expect(legendElement).toHaveClass('text-dark-gray-300 uppercase font-bold tracking-larger text-xs pt-4');
    });
});
//# sourceMappingURL=FormGroup.test.js.map