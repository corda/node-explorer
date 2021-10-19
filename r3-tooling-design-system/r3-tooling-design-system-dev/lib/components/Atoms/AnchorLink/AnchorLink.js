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
import { useEffect, useState } from 'react';
import { IconCustom } from '../../../exports';
import './AnchorLink.scss';
var previewConfig = {
    name: 'anchor Link',
    defaultState: {
        componentProps: {
            to: 'element',
        },
    },
};
var AnchorLink = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, to = _a.to, offsetEl = _a.offsetEl, _c = _a.offset, offset = _c === void 0 ? 0 : _c, children = _a.children, otherProps = __rest(_a, ["className", "to", "offsetEl", "offset", "children"]);
    var _d = useState(offsetEl), offsetElement = _d[0], setOffsetElement = _d[1];
    useEffect(function () {
        setOffsetElement(offsetEl);
    }, [offsetEl]);
    var smoothScroll = function (event, link) {
        event.preventDefault();
        var el = document.getElementById(link);
        var offsetValue = offset || (offsetElement ? offsetElement.clientHeight : 0);
        var offsetTop = el ? el.offsetTop - offsetValue : 0;
        window.scrollTo({
            top: offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    };
    return (_jsxs("a", __assign({ href: to.toString(), className: "anchor-link a-sm flex uppercase tracking-large cursor-pointer " + className, onClick: function (event) { return smoothScroll(event, to); } }, otherProps, { children: [_jsx(IconCustom, { icon: "ArrowBottomRight", className: "h-5 text-blue inline mr-2" }, void 0), _jsx("span", __assign({ className: "anchor-link-text" }, { children: children }), void 0)] }), void 0));
};
export default AnchorLink;
export { previewConfig };
//# sourceMappingURL=AnchorLink.js.map