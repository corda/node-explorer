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
import { useState, isValidElement, Children, } from 'react';
import { v4 as uniqId } from 'uuid';
import './TopNavBar.scss';
var previewConfig = {
    name: 'TopNavBar',
    defaultState: {
        background: 'dark',
        centerPos: 'end',
        componentProps: {
            title: 'tooling design system',
        },
    },
    centerPos: {
        type: 'radio',
        values: ['start', 'center', 'end'],
    },
};
var TopNavBar = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, logo = _a.logo, title = _a.title, center = _a.center, centerPos = _a.centerPos, id = _a.id, children = _a.children, otherProps = __rest(_a, ["className", "logo", "title", "center", "centerPos", "id", "children"]);
    var navId = useState(id ? id : uniqId())[0];
    var style = 'ml-4 uppercase text-xs cursor-pointer font-bold hover:text-blue text-medium-light-gray focus:shadow-large-blur-dark';
    var childrenItems = [];
    Children.forEach(children, function (child, i) {
        childrenItems.push(_jsx("div", __assign({ className: "header-nav-item " + style }, { children: child }), uniqId()));
    });
    var centerNavItems = [];
    Children.forEach(center === null || center === void 0 ? void 0 : center.props.children, function (child, i) {
        if (isValidElement(child)) {
            centerNavItems.push(_jsx("div", __assign({ className: "header-nav-item " + style }, { children: child }), uniqId()));
        }
    });
    return (_jsxs("nav", __assign({ id: navId, className: "header-nav flex items-center bg-medium-light-gray-100 w-full h-16 px-10 py-1 " + className }, otherProps, { children: [_jsxs("div", __assign({ className: "flex items-center pr-8" }, { children: [logo && logo, _jsx("h1", __assign({ className: (title ? 'ml-4' : '') + " flex items-center leading-snug tracking-larger font-bold text-medium-light-gray-600 text-xs uppercase" }, { children: title }), void 0)] }), void 0), center ? (_jsx("div", __assign({ className: (center && children ? 'pr-8' : '') + " " + (centerPos ? "justify-" + centerPos : 'justify-end') + " flex flex-1 item-center" }, { children: centerNavItems }), void 0)) : (''), children ? (_jsx("div", __assign({ className: (center && children ? 'flex-0' : 'flex-1') + " flex items-center justify-end" }, { children: childrenItems }), void 0)) : ('')] }), void 0));
};
export default TopNavBar;
export { previewConfig };
//# sourceMappingURL=TopNavBar.js.map