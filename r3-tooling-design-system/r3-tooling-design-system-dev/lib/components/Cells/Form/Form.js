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
    var _b = _a.className, className = _b === void 0 ? '' : _b, dark = _a.dark, title = _a.title, preview = _a.preview, onSubmit = _a.onSubmit, children = _a.children, otherProps = __rest(_a, ["className", "dark", "title", "preview", "onSubmit", "children"]);
    return (_jsxs("form", __assign({ className: "shadow-0-3-6-dark-gray-1 rounded py-12 px-6 " + (dark ? 'bg-light-gray' : 'bg-white') + " " + (preview ? 'py-6' : 'py-12') + " " + className, onSubmit: onSubmit }, otherProps, { children: [title && (_jsx("p", __assign({ className: preview
                    ? 'text-dark-gray-300 uppercase font-bold tracking-larger text-base'
                    : 'text-dark-gray font-title text-2xl' }, { children: title }), void 0)), children] }), void 0));
};
export default Form;
//# sourceMappingURL=Form.js.map