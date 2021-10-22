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
import { Checkbox, IconCustom } from '../../../exports';
var Option = function (_a) {
    var value = _a.value, active = _a.active, _b = _a.className, className = _b === void 0 ? '' : _b, disabled = _a.disabled, dropdown = _a.dropdown, icon = _a.icon, checkbox = _a.checkbox, checked = _a.checked, onChange = _a.onChange, onClick = _a.onClick, children = _a.children, otherProps = __rest(_a, ["value", "active", "className", "disabled", "dropdown", "icon", "checkbox", "checked", "onChange", "onClick", "children"]);
    return dropdown ? (checkbox ? (_jsx("div", __assign({ className: "dropdown-item relative block px-2 tracking-large hover:bg-medium-light-gray-100 " + className }, otherProps, { children: _jsx(Checkbox, __assign({ dropdown: true, value: value, checked: checked, onChange: onChange }, { children: children }), void 0) }), void 0)) : (_jsx("div", __assign({ onClick: onClick, className: "dropdown-item relative block px-2 tracking-large hover:bg-medium-light-gray-100 " + (active ? 'active' : '') + " " + (className || '') }, otherProps, { children: _jsxs("p", __assign({ className: "p-4 border-b border-medium-light-gray-100 text-xs uppercase text-dark-gray-300 font-bold" }, { children: [icon && (_jsx(IconCustom, { icon: icon, className: "inline h-4 text-dark-gray-200 mr-2" }, void 0)), children] }), void 0) }), void 0))) : (_jsx("option", __assign({ disabled: disabled, className: (disabled ? 'hidden' : '') + " " + (className || ''), value: value }, otherProps, { children: children }), void 0));
};
export default Option;
//# sourceMappingURL=Option.js.map