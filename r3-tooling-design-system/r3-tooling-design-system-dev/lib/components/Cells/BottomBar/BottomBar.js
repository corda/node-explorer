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
import { Children, isValidElement, cloneElement } from 'react';
var previewConfig = {
    name: 'bottom bar',
    defaultState: {
        componentProps: {},
    },
};
var BottomBar = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, copyright = _a.copyright, children = _a.children, otherProps = __rest(_a, ["className", "copyright", "children"]);
    var childrenWithClass = Children.map(children, function (child) {
        if (isValidElement(child)) {
            return cloneElement(child, __assign(__assign({}, child.props), { className: (child.props.className || '') + " ml-6 text-white" }));
        }
        return child;
    });
    return (_jsxs("footer", __assign({ className: "bottom-bar " + className + " w-full flex justify-between px-16 py-6 bg-medium-dark-gray-550 text-white text-xs tracking-normal" }, otherProps, { children: [_jsx("span", { children: copyright }, void 0), _jsx("div", { children: childrenWithClass }, void 0)] }), void 0));
};
export default BottomBar;
export { previewConfig };
//# sourceMappingURL=BottomBar.js.map