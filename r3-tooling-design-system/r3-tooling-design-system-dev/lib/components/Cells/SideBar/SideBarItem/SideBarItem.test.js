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
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SideBarItem from './SideBarItem';
describe('<SideBarItem /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(SideBarItem, { title: "" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(SideBarItem, { title: "", className: "test-class" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "active" state to work correctly', function () {
        var container = render(_jsx(SideBarItem, __assign({ multipleActiveItems: true, title: "Test 1.1.2", className: "test-class" }, { children: "text" }), void 0)).container;
        var itemElement = container.firstElementChild.firstElementChild.firstElementChild;
        fireEvent.click(itemElement);
        expect(itemElement).toHaveClass('active');
    });
    test('with element in "title" property to work correctly', function () {
        var container = render(_jsx(SideBarItem, { title: _jsx("div", __assign({ className: "test-class" }, { children: "Some text here" }), void 0) }, void 0)).container;
        var titleElements = container.querySelectorAll('.sidebar-item-title-text');
        var children = container.querySelector('.sidebar-item-title-text .test-class');
        expect(titleElements).toHaveLength(1);
        expect(children).toHaveClass('test-class');
    });
    test('with link element in "title" property to not change "active" state', function () {
        var container = render(_jsx(SideBarItem, { title: _jsx("a", __assign({ href: "a", className: "test-class" }, { children: "title-element" }), void 0), className: "test-class" }, void 0)).container;
        var menuItem = container.firstElementChild.firstElementChild.firstElementChild;
        fireEvent.click(menuItem);
        expect(menuItem).not.toHaveClass('active');
    });
});
//# sourceMappingURL=SideBarItem.test.js.map