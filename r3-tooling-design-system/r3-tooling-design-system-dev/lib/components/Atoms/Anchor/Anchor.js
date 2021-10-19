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
import { IconCustom } from '../../../exports';
var previewConfig = {
    name: 'anchor',
    defaultState: {
        componentProps: {
            idToScrollTo: 'element',
        },
    },
};
var Anchor = function (_a) {
    var idToScrollTo = _a.idToScrollTo, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, otherProps = __rest(_a, ["idToScrollTo", "children", "className"]);
    return (_jsxs("div", __assign({ id: idToScrollTo, className: "anchor flex items-center " + className }, otherProps, { children: [_jsx(IconCustom, { icon: "LinkVariant", className: "h-7 text-blue-400 inline mr-2 cursor-pointer duration-200 ease-in-out transition hover:text-blue-500", onClick: function () {
                    return idToScrollTo &&
                        navigator.clipboard.writeText(window.location.href + "#" + idToScrollTo);
                } }, void 0), children] }), void 0));
};
export default Anchor;
export { previewConfig };
//# sourceMappingURL=Anchor.js.map