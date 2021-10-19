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
import { jsx as _jsx } from "react/jsx-runtime";
var CustomInput = function (_a) {
    var defaultValue = _a.defaultValue, inputRef = _a.inputRef, dark = _a.dark, disabled = _a.disabled, required = _a.required, invalid = _a.invalid, id = _a.id, type = _a.type, modified = _a.modified, props = __rest(_a, ["defaultValue", "inputRef", "dark", "disabled", "required", "invalid", "id", "type", "modified"]);
    return (_jsx("input", __assign({ className: "date-time-input block h-12 w-full rounded-full py-3 px-6 tracking-small overflow-hidden whitespace-no-wrap outline-none border-2 text-body text-base  " + (defaultValue === ''
            ? 'border-medium-light-gray-300'
            : 'border-medium-light-gray') + " focus:border-dark-gray-300 " + (disabled ? 'cursor-not-allowed' : '') + " " + (dark ? 'gray bg-light-gray' : 'white bg-white'), required: required, defaultValue: defaultValue, ref: inputRef, disabled: disabled, type: type, id: id, "data-invalid": invalid, "data-modified": modified }, props), void 0));
};
export default CustomInput;
//# sourceMappingURL=DateTimeInputEl.js.map