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
import PageHeader from './PageHeader';
import Tab from './../../Atoms/Tabs/Tab/Tab';
describe('<Toast /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(PageHeader, { size: "small" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(PageHeader, { size: "small", className: "test-class" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('test-class');
    });
    test('with "dark" property to work correctly', function () {
        var container = render(_jsx(PageHeader, { size: "small", dark: true }, void 0)).container;
        expect(container.firstElementChild.firstElementChild.firstElementChild).toHaveClass('bg-medium-dark-gray-550');
    });
    test('with "tabs" property to work correctly', function () {
        var tabLink = (_jsx(Tab, { name: _jsx("a", __assign({ href: "https://www.google.com" }, { children: "Content" }), void 0) }, "tabLink"));
        var tabLinkTwo = (_jsx(Tab, { name: _jsx("a", __assign({ href: "https://www.bing.com" }, { children: "Content 2" }), void 0) }, "tabLinkTwo"));
        var container = render(_jsx(PageHeader, { size: "small", tabs: [tabLink, tabLinkTwo] }, void 0)).container;
        expect(container.firstElementChild.firstElementChild.children).toHaveLength(2);
        expect(container.firstElementChild.firstElementChild.firstElementChild).toHaveClass('border-b');
    });
});
//# sourceMappingURL=PageHeader.test.js.map