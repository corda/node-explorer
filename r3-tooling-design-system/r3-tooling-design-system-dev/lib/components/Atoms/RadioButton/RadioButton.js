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
import { useState } from 'react';
import { v4 as uniqId } from 'uuid';
var RadioButton = function (_a) {
    var value = _a.value, _b = _a.className, className = _b === void 0 ? '' : _b, checked = _a.checked, dark = _a.dark, disabled = _a.disabled, groupName = _a.groupName, id = _a.id, required = _a.required, onChange = _a.onChange, children = _a.children, otherProps = __rest(_a, ["value", "className", "checked", "dark", "disabled", "groupName", "id", "required", "onChange", "children"]);
    var radioId = useState(id ? id : uniqId())[0];
    return (_jsx("div", __assign({ className: className }, { children: _jsxs("label", __assign({ className: "flex space-around relative p-2 select-none " + (disabled ? 'cursor-not-allowed' : 'cursor-pointer'), htmlFor: radioId }, { children: [_jsx("input", __assign({ className: "absolute opacity-0 h-0 w-0", id: radioId, type: "radio", name: groupName, value: value, checked: checked, disabled: disabled, onChange: function () { return onChange(value); } }, otherProps), void 0), _jsx("span", { className: "checkmark h-5 w-5 min-w-5 border-2 rounded-full border-dark-gray-300 " + (dark ? 'bg-light-gray' : 'bg-white') }, void 0), _jsx("span", __assign({ className: "pl-2 text-sm text-medium-dark-gray text-left" }, { children: children }), void 0)] }), void 0) }), radioId));
};
export default RadioButton;
//# sourceMappingURL=RadioButton.js.map