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
import { useState, useRef } from 'react';
import { IconCustom, Divider } from '../../../exports';
import './Accordion.scss';
var previewConfig = {
    name: 'Accordion',
    defaultState: {
        background: 'light',
        componentProps: {
            title: 'Lorem Ipsum Dolor Sit Amet',
            dark: false,
        },
    },
    background: {
        type: 'select',
        options: [
            {
                name: 'light',
                properties: {
                    dark: false,
                },
            },
            {
                name: 'dark',
                properties: {
                    dark: true,
                },
            },
        ],
    },
};
var Accordion = function (_a) {
    var title = _a.title, _b = _a.className, className = _b === void 0 ? '' : _b, dark = _a.dark, children = _a.children, otherProps = __rest(_a, ["title", "className", "dark", "children"]);
    var _c = useState(false), open = _c[0], setOpen = _c[1];
    var _d = useState(0), height = _d[0], setHeight = _d[1];
    var accordionRef = useRef(null);
    var toggleAccordion = function () {
        var elHeight = !open && accordionRef.current ? accordionRef.current.scrollHeight : 0;
        setOpen(!open);
        setHeight(elHeight);
    };
    return (_jsxs("div", __assign({ className: (dark ? 'bg-light-gray' : 'bg-white') + " " + className + " accordion " + (open ? 'open' : 'closed') + " w-full px-6 rounded-md shadow-0-3-6-dark-gray-1" }, otherProps, { children: [_jsxs("div", __assign({ className: "flex justify-between cursor-pointer py-4", onClick: toggleAccordion }, { children: [_jsx("span", __assign({ className: "text-base font-bold text-dark-gray uppercase" }, { children: title }), void 0), _jsx(IconCustom, { icon: open ? 'MinusCircleOutline' : 'PlusCircleOutline', className: "h-6 text-blue" }, void 0)] }), void 0), _jsxs("div", __assign({ ref: accordionRef, style: { height: height + "px" }, className: "accordion-content " + (open ? 'open' : 'closed') + " text-sm text-medium-dark-gray overflow-hidden" }, { children: [_jsx(Divider, {}, void 0), _jsx("div", __assign({ className: "py-4" }, { children: children }), void 0)] }), void 0)] }), void 0));
};
export default Accordion;
export { previewConfig };
//# sourceMappingURL=Accordion.js.map