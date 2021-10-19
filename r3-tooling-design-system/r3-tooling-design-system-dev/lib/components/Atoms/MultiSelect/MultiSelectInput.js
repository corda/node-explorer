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
import { useState, useRef, useEffect, isValidElement, } from 'react';
import { v4 as uniqId } from 'uuid';
import { IconCustom } from '../../../exports';
var MultiSelect = function (_a) {
    var value = _a.value, label = _a.label, id = _a.id, focused = _a.focused, dark = _a.dark, disabled = _a.disabled, invalid = _a.invalid, options = _a.options, onBlur = _a.onBlur, onRemove = _a.onRemove, required = _a.required, modified = _a.modified, otherProps = __rest(_a, ["value", "label", "id", "focused", "dark", "disabled", "invalid", "options", "onBlur", "onRemove", "required", "modified"]);
    var multiSelectId = useState(id ? id : uniqId())[0];
    var multiSelectRef = useRef(null);
    var removeHandler = function (event, value) {
        event.stopPropagation();
        onRemove(value);
    };
    useEffect(function () {
        if (focused) {
            multiSelectRef.current.focus();
        }
    }, [focused]);
    var arrayChips = options &&
        options.map(function (option, i) {
            return (isValidElement(option) &&
                option.props.checked && (_jsxs("span", __assign({ "data-dropdown": "true", className: "p-2 uppercase leading-normal whitespace-no-wrap" }, { children: [option.props.children, _jsx(IconCustom, { "data-dropdown": "true", icon: "Close", className: "inline h-4 pb-1 pl-1 text-blue cursor-pointer", onClick: function (event) { return removeHandler(event, option.props.value); } }, void 0)] }), i)));
        });
    return (_jsx("div", __assign({ className: "input multiselect relative " + (disabled ? 'pointer-events-none' : '') }, { children: _jsxs("label", __assign({ htmlFor: multiSelectId, tabIndex: 0, "data-invalid": invalid, "data-modified": modified, className: "block min-h-12 w-full rounded-full py-3 px-6 outline-none border-2 text-sm uppercase " + (disabled
                ? 'text-medium-light-gray-300 cursor-not-allowed'
                : 'text-dark-gray-300') + " " + (dark ? 'bg-light-gray' : 'bg-white') + "\n        " + (focused
                ? 'focused border-dark-gray-300'
                : !value.length
                    ? 'border-medium-light-gray-300'
                    : 'border-medium-light-gray') }, { children: [_jsx(IconCustom, { icon: "ChevronDown", className: "input-icon absolute top-3 right-4 h-6 " + (disabled ? 'text-medium-light-gray-300' : 'text-dark-gray-300') }, void 0), _jsx("div", __assign({ className: "chips" }, { children: arrayChips }), void 0), _jsx("input", __assign({ "data-dropdown": true, className: "absolute top-4 outline-none text-transparent w-0 h-0", disabled: disabled, id: multiSelectId, required: required, type: "text", ref: multiSelectRef, defaultValue: Array.from(value).join(', '), onBlur: onBlur }, otherProps), void 0), _jsx("span", __assign({ className: "input-label absolute top-sm text-left left-6 bg-transparent font-bold text-sm uppercase tracking-smaller w-2/3 overflow-hidden whitespace-no-wrap " + (disabled
                        ? 'text-medium-light-gray-300'
                        : !value.length
                            ? 'text-dark-gray-300'
                            : 'text-medium-light-gray') }, { children: _jsx("span", __assign({ className: "px-1 " + (dark ? 'bg-light-gray' : 'bg-white') }, { children: label }), void 0) }), void 0)] }), void 0) }), void 0));
};
export default MultiSelect;
//# sourceMappingURL=MultiSelectInput.js.map