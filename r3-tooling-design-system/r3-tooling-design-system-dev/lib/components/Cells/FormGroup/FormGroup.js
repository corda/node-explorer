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
var Form = function (_a) {
    var legend = _a.legend, _b = _a.className, className = _b === void 0 ? '' : _b, preview = _a.preview, children = _a.children, otherProps = __rest(_a, ["legend", "className", "preview", "children"]);
    return (_jsxs("fieldset", __assign({ className: className + " " + (preview ? 'py-4 border-b border-medium-light-gray-100' : '') }, otherProps, { children: [_jsx("legend", __assign({ className: preview
                    ? 'text-dark-gray-300 uppercase font-bold tracking-larger text-xs pt-4'
                    : 'font-title text-dark-gray text-lg' }, { children: legend }), void 0), children] }), void 0));
};
export default Form;
//# sourceMappingURL=FormGroup.js.map