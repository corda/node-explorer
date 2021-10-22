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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { isValidElement, cloneElement, useEffect, useRef, } from 'react';
import { v4 as uniqId } from 'uuid';
import './SideBarItem.scss';
import { IconCustom } from '../../../../exports';
var SideBarItemTitleBody = function (_a) {
    var children = _a.children, icon = _a.icon, level = _a.level, title = _a.title;
    return (_jsxs(_Fragment, { children: [icon && (_jsx(IconCustom, { icon: icon, className: "h-5 sidebar-item-icon mx-auto w-8" }, void 0)), _jsxs("div", __assign({ className: "sidebar-item-title-content flex items-center" }, { children: [_jsx("span", __assign({ className: "sidebar-item-title-text truncate" }, { children: title }), void 0), level === 0 && children && (_jsxs(_Fragment, { children: [_jsx(IconCustom, { icon: "Plus", className: "icon-plus h-4 flex ml-2" }, void 0), _jsx(IconCustom, { icon: "Minus", className: "icon-minus h-4 flex ml-2" }, void 0)] }, void 0)), level === 1 && children && (_jsx(IconCustom, { icon: "ChevronUp", className: "icon-chevronUp h-5 flex ml-2" }, void 0))] }), void 0)] }, void 0));
};
var SideBarItem = function (_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? '' : _c, icon = _a.icon, _d = _a.active, active = _d === void 0 ? null : _d, level = _a.level, children = _a.children, _e = _a.multipleActiveItems, multipleActiveItems = _e === void 0 ? false : _e, title = _a.title, otherProps = __rest(_a, ["className", "icon", "active", "level", "children", "multipleActiveItems", "title"]);
    var titleText = isValidElement(title) && typeof (title === null || title === void 0 ? void 0 : title.type) !== 'string'
        ? title.props.children
        : title;
    var sidebarItemTitleRef = useRef(null);
    var sidebarItemTitleStyle = "\n    sidebar-item-title flex items-center cursor-pointer h-8\n    " + (level === 1 ? 'mt-2' : '') + " \n    " + (level === 0
        ? 'uppercase text-blue-200 hover:text-blue-300'
        : 'hover:bg-medium-dark-gray-500 text-sm') + "\n  ";
    var tooltipText = level === 0
        ? {
            'data-title': isValidElement(titleText)
                ? titleText.props['children']
                : titleText,
        }
        : null;
    var closeAllNavItems = function (rootElement) {
        rootElement
            .querySelectorAll('.active')
            .forEach(function (navItem) { return navItem === null || navItem === void 0 ? void 0 : navItem.classList.remove('active'); });
    };
    var openNavItemThreePath = function (target, flag, initial) {
        var _a;
        if (flag === void 0) { flag = true; }
        if (initial === void 0) { initial = false; }
        target.classList.toggle('active', flag);
        var item = target.closest('.sidebar-item');
        var parentItem = (_a = item === null || item === void 0 ? void 0 : item.closest('.sidebar-item-container')) === null || _a === void 0 ? void 0 : _a.querySelector('.sidebar-item-title');
        if (!item.classList.contains('level-0') && parentItem) {
            parentItem.classList.toggle('active', flag || initial);
            openNavItemThreePath(parentItem, flag || initial);
        }
    };
    var openNavItem = function (target, flag, initial) {
        if (flag === void 0) { flag = true; }
        if (initial === void 0) { initial = false; }
        if (!target) {
            return;
        }
        if (!multipleActiveItems && flag) {
            closeAllNavItems(target.closest('.sidebar'));
        }
        openNavItemThreePath(target, flag, initial);
    };
    var activateSidebarItem = function (event) {
        var _a;
        if (event.currentTarget.closest('.sidebar-toggable:not(.open)') &&
            ((_a = event.currentTarget.nextSibling) === null || _a === void 0 ? void 0 : _a.childNodes.length) &&
            event.currentTarget.classList.contains('active')) {
            return;
        }
        var linkInSidebarItem = event.target
            .closest('.sidebar-item-container > .sidebar-item-title')
            .querySelector('a');
        if (!(linkInSidebarItem && linkInSidebarItem.target !== '_self')) {
            var wasItemActive = event.currentTarget.classList.contains('active');
            openNavItem(event.currentTarget, !wasItemActive, true);
        }
    };
    var onClick = function (e) {
        if (isValidElement(title) && title.props.onClick) {
            title['props'].onClick(e);
        }
        activateSidebarItem(e);
    };
    if (isValidElement(title) && typeof title.type !== 'string') {
        title = cloneElement(title, __assign(__assign(__assign(__assign({}, tooltipText), { key: uniqId() }), title.props), { className: (title.props.className || '') + " " + sidebarItemTitleStyle, children: (function () {
                return (_jsx(SideBarItemTitleBody, { children: children, icon: icon, level: level, title: titleText }, void 0));
            })() }));
    }
    useEffect(function () {
        if (active !== null) {
            openNavItem(sidebarItemTitleRef.current, active, false);
        }
    }, [active]);
    return (_jsx("ul", __assign({ className: "sidebar-item level-" + level + " mt-3 w-full flex text-white " + (className || '') }, otherProps, { children: _jsxs("li", __assign({ className: "sidebar-item-container w-full" }, { children: [isValidElement(title) && typeof (title === null || title === void 0 ? void 0 : title.type) !== 'string' ? (title) : (_jsx("div", __assign({ ref: sidebarItemTitleRef }, { active: Boolean(active).toString() }, tooltipText, { className: sidebarItemTitleStyle + " " + (((_b = title['props']) === null || _b === void 0 ? void 0 : _b.className) || '') + " ", onClick: onClick }, { children: _jsx(SideBarItemTitleBody, { children: children, icon: icon, title: titleText, level: level }, void 0) }), void 0)), children && _jsx("div", __assign({ className: "sidebar-item-children" }, { children: children }), void 0)] }), void 0) }), void 0));
};
export default SideBarItem;
//# sourceMappingURL=SideBarItem.js.map