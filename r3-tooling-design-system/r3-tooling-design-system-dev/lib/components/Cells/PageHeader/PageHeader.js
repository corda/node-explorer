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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Tabs } from '../../../exports';
import './PageHeader.scss';
var previewConfig = {
    name: 'Page Header',
    defaultState: {
        size: 'large',
        dark: false,
        sticky: false,
        tabs: false,
        componentProps: {
            size: 'large',
            dark: false,
            sticky: false,
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'dark',
                properties: {
                    dark: true,
                },
            },
            {
                name: 'tabs',
                properties: {
                    tabs: ['lorem', 'ipsum', 'dolor'],
                },
            },
            {
                name: 'sticky',
                properties: {
                    sticky: true,
                    offset: 10,
                },
            },
        ],
    },
    size: {
        type: 'radio',
        values: ['large', 'small'],
    },
};
var PageHeader = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, dark = _a.dark, _c = _a.offset, offset = _c === void 0 ? 0 : _c, size = _a.size, sticky = _a.sticky, tabs = _a.tabs, children = _a.children, otherProps = __rest(_a, ["className", "dark", "offset", "size", "sticky", "tabs", "children"]);
    var _d = useState(false), isSticky = _d[0], setIsSticky = _d[1];
    var _e = useState('auto'), containerHeight = _e[0], setContainerHeight = _e[1];
    var pageHeaderRef = useRef(null);
    useEffect(function () {
        var stickyEl;
        if (!sticky)
            return;
        if (pageHeaderRef.current) {
            stickyEl = pageHeaderRef.current.offsetTop;
        }
        var handleSticky = function () {
            var shouldStick = window.pageYOffset + offset >= stickyEl;
            if (pageHeaderRef.current) {
                shouldStick
                    ? pageHeaderRef.current.classList.add('sticky')
                    : pageHeaderRef.current.classList.remove('sticky');
                setIsSticky(shouldStick);
                setContainerHeight(pageHeaderRef.current.classList.contains('sticky')
                    ? pageHeaderRef.current.offsetHeight + "px"
                    : 'auto');
            }
        };
        window.addEventListener('scroll', handleSticky);
        return function () {
            window.removeEventListener('scroll', handleSticky);
        };
    }, [offset, sticky]);
    return (_jsx("div", __assign({ style: isSticky && pageHeaderRef.current ? { height: containerHeight } : {} }, { children: _jsxs("div", __assign({ ref: pageHeaderRef, className: "w-full page-header " + className, style: isSticky ? { top: offset + "px" } : {} }, { children: [_jsx("div", __assign({ className: "page-header-main " + (dark ? 'bg-medium-dark-gray-550' : 'bg-light-gray') + " " + (tabs ? 'border-b' : '') + " px-16 " + (dark
                        ? 'text-white border-dark-gray-400'
                        : 'text-dark-gray  border-medium-light-gray-200') + " " + size + " font-title" }, otherProps, { children: children }), void 0), tabs && (_jsx(Tabs, __assign({ variant: dark ? 'dark' : 'light', inHeader: true }, { children: tabs }), void 0))] }), void 0) }), void 0));
};
export default PageHeader;
export { previewConfig };
//# sourceMappingURL=PageHeader.js.map