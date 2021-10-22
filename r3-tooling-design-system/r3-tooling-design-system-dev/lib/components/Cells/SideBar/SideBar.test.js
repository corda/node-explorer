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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SideBar from './SideBar';
import SideBarItem from './SideBarItem/SideBarItem';
describe('<SideBar /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(SideBar, {}, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(SideBar, { className: "test-class" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "id" and "children" property to work correctly', function () {
        var container = render(_jsxs(SideBar, __assign({ id: "abc123" }, { children: [_jsxs(SideBarItem, __assign({ icon: "Magnify", title: "Test 1" }, { children: [_jsxs(SideBarItem, __assign({ title: "Test 1.1" }, { children: [_jsx(SideBarItem, { title: _jsx("a", __assign({ rel: "noopener noreferrer", target: "_blank", href: "https://google.com" }, { children: "Test 1.1.1 - Link to Google" }), void 0) }, void 0), _jsx(SideBarItem, { title: "Test 1.1.2" }, void 0)] }), void 0), _jsx(SideBarItem, __assign({ title: "Test 1.2" }, { children: _jsx(SideBarItem, { title: "Test 1.2.1" }, void 0) }), void 0)] }), void 0), _jsxs(SideBarItem, __assign({ icon: "Magnify", title: "Test 2" }, { children: [_jsx(SideBarItem, __assign({ title: "Test 2.1" }, { children: _jsx(SideBarItem, { title: "Test 2.1.1" }, void 0) }), void 0), _jsx(SideBarItem, __assign({ title: "Test 2.2" }, { children: _jsx(SideBarItem, { title: "Test 2.2.1" }, void 0) }), void 0)] }), void 0)] }), void 0)).container;
        expect(container.firstElementChild.getAttribute('id')).toBe('abc123');
        expect(container.firstElementChild.firstElementChild.children).toHaveLength(2);
    });
    test('"children" with elements and text to display only the elements', function () {
        var container = render(_jsxs(SideBar, { children: [_jsxs(SideBarItem, __assign({ icon: "Magnify", title: "Test 1" }, { children: [_jsxs(SideBarItem, __assign({ title: "Test 1.1" }, { children: [_jsx(SideBarItem, { title: _jsx("a", __assign({ rel: "noopener noreferrer", target: "_blank", href: "https://google.com" }, { children: "Test 1.1.1 - Link to Google" }), void 0) }, void 0), _jsx(SideBarItem, { title: "Test 1.1.2" }, void 0)] }), void 0), _jsx(SideBarItem, __assign({ title: "Test 1.2" }, { children: _jsx(SideBarItem, { title: "Test 1.2.1" }, void 0) }), void 0)] }), void 0), _jsxs(SideBarItem, __assign({ icon: "Magnify", title: "Test 2" }, { children: [_jsx(SideBarItem, __assign({ title: "Test 2.1" }, { children: _jsx(SideBarItem, { title: "Test 2.1.1" }, void 0) }), void 0), _jsx(SideBarItem, __assign({ title: "Test 2.2" }, { children: _jsx(SideBarItem, { title: "Test 2.2.1" }, void 0) }), void 0)] }), void 0), "text"] }, void 0)).container;
        expect(container.firstElementChild.firstElementChild.children).toHaveLength(2);
    });
    test('"children" property with inner "children" to work correctly', function () {
        var container = render(_jsx(SideBar, { children: _jsx(SideBarItem, __assign({ icon: "Magnify", title: "Test 1" }, { children: _jsx(SideBarItem, __assign({ title: "Test 1.1" }, { children: _jsx(SideBarItem, { title: _jsx("a", __assign({ rel: "noopener noreferrer", target: "_blank", href: "https://google.com" }, { children: "Test 1.1.1 - Link to Google" }), void 0) }, void 0) }), void 0) }), void 0) }, void 0)).container;
        expect(container.querySelectorAll('.sidebar-item .sidebar-item .sidebar-item')).toHaveLength(1);
    });
    test('with `isOpen={true}` property to close the menu correctly via hamburger icon', function () {
        var container = render(_jsxs(SideBar, __assign({ toggable: true, open: true }, { children: [_jsx(SideBarItem, { icon: "Magnify", title: "Test 1" }, void 0), _jsx(SideBarItem, { icon: "Magnify", title: "Test 2" }, void 0)] }), void 0)).container;
        var hamburgerIcon = container.querySelector('.sidebar-icon-toggle');
        expect(hamburgerIcon).toBeInTheDocument();
        expect(container.firstElementChild).toHaveClass('open');
        fireEvent.click(hamburgerIcon);
        expect(container.firstElementChild).not.toHaveClass('open');
    });
    test('with `isOpen={false}` property to close the menu correctly via hamburger item', function () {
        var container = render(_jsxs(SideBar, __assign({ toggable: true }, { children: [_jsx(SideBarItem, { icon: "Magnify", title: "Test 1" }, void 0), _jsx(SideBarItem, { icon: "Magnify", title: "Test 2" }, void 0)] }), void 0)).container;
        var hamburgerIcon = container.querySelector('.sidebar-icon-toggle');
        expect(container.firstElementChild).not.toHaveClass('open', { exact: false });
        fireEvent.click(hamburgerIcon);
        expect(container.firstElementChild).toHaveClass('open', { exact: false });
    });
    test('first level menu items with NO submenu items when clicked should NOT toggle closed menu to `open`', function () {
        var container = render(_jsxs(SideBar, __assign({ toggable: true }, { children: [_jsx(SideBarItem, { active: true, icon: "Magnify", title: "Test 1" }, void 0), _jsx(SideBarItem, __assign({ active: true, icon: "Magnify", title: "Test 2" }, { children: _jsx(SideBarItem, { active: true, icon: "Magnify", title: "Test 2.1" }, void 0) }), void 0)] }), void 0)).container;
        var firstLevelItem = screen.getAllByText('Test 1');
        expect(container.firstElementChild).not.toHaveClass('open', { exact: false });
        expect(firstLevelItem).toHaveLength(1);
        fireEvent.click(firstLevelItem[0]);
        expect(container.firstElementChild).not.toHaveClass('open', { exact: false });
    });
    test('first level menu items when clicked should toggle closed menu to `open` if it has submenu items', function () {
        var container = render(_jsx(SideBar, __assign({ toggable: true }, { children: _jsx(SideBarItem, __assign({ icon: "Magnify", title: "Test 1" }, { children: _jsx(SideBarItem, { icon: "Magnify", title: "Test 2" }, void 0) }), void 0) }), void 0)).container;
        var firstLevelItemWithChildren = container.querySelector('.sidebar-item-title');
        expect(container.firstElementChild).not.toHaveClass('open', { exact: false });
        expect(container.firstElementChild.querySelectorAll('.sidebar-item .sidebar-item')).toHaveLength(1);
        fireEvent.click(firstLevelItemWithChildren);
        expect(container.firstElementChild).toHaveClass('open');
    });
    test('first level menu items witch are `Link` when clicked should NOT toggle closed menu to `open`', function () {
        var container = render(_jsx(SideBar, __assign({ toggable: true }, { children: _jsx(SideBarItem, { icon: "RobotExcitedOutline", title: _jsx("a", __assign({ rel: "noopener noreferrer", target: "_blank", href: "https://google.com" }, { children: "Link" }), void 0) }, void 0) }), void 0)).container;
        expect(container.firstElementChild).not.toHaveClass('open', { exact: false });
        var firstLevelLinkItem = screen.getAllByText('Link');
        fireEvent.click(firstLevelLinkItem[0]);
        expect(container.firstElementChild).not.toHaveClass('open', { exact: false });
    });
    test('`active` menu items with submenu should remain `active` on toggable menu from close to `open`', function () {
        var container = render(_jsx(SideBar, __assign({ toggable: true }, { children: _jsx(SideBarItem, __assign({ active: true, icon: "Magnify", title: "Test 1" }, { children: _jsx(SideBarItem, { icon: "Magnify", title: "Test 1.1" }, void 0) }), void 0) }), void 0)).container;
        var firstLevelItemWithChildren = container.querySelector('.sidebar-item-title');
        expect(container.firstElementChild).not.toHaveClass('open', { exact: false });
        expect(firstLevelItemWithChildren).toHaveClass('active', { exact: false });
        fireEvent.click(firstLevelItemWithChildren);
        var activeItem = container.querySelectorAll('.sidebar-item .sidebar-item');
        expect(activeItem).toHaveLength(1);
        expect(container.firstElementChild).toHaveClass('open', { exact: false });
        expect(firstLevelItemWithChildren).toHaveClass('active', { exact: false });
    });
    test('should work correctly with `multipleActiveItems={true}`', function () {
        var container = render(_jsxs(SideBar, __assign({ toggable: true, multipleActiveItems: true, open: true }, { children: [_jsx(SideBarItem, { icon: "Magnify", title: "Test 1" }, void 0), _jsx(SideBarItem, { icon: "Magnify", title: "Test 2" }, void 0)] }), void 0)).container;
        var items = container.querySelectorAll('.sidebar-item-title');
        expect(items[0]).not.toHaveClass('active', { exact: false });
        expect(items[1]).not.toHaveClass('active', { exact: false });
        fireEvent.click(items[0]);
        fireEvent.click(items[1]);
        expect(items[0]).toHaveClass('active', { exact: false });
        expect(items[1]).toHaveClass('active', { exact: false });
    });
    test('should work correctly with `multipleActiveItems={false}`', function () {
        var container = render(_jsxs(SideBar, __assign({ toggable: true, multipleActiveItems: false, open: true }, { children: [_jsx(SideBarItem, { icon: "Magnify", title: "Test 1" }, void 0), _jsx(SideBarItem, { icon: "Magnify", title: "Test 2" }, void 0)] }), void 0)).container;
        var items = container.querySelectorAll('.sidebar-item-title');
        expect(items[0]).not.toHaveClass('active', { exact: false });
        expect(items[1]).not.toHaveClass('active', { exact: false });
        fireEvent.click(items[0]);
        fireEvent.click(items[1]);
        expect(items[0]).not.toHaveClass('active', { exact: false });
        expect(items[1]).toHaveClass('active', { exact: false });
    });
});
//# sourceMappingURL=SideBar.test.js.map