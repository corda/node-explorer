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
import { useState, useEffect, useRef } from 'react';
import { v4 as uniqId } from 'uuid';
var previewConfig = {
    name: 'Checkbox',
    form: true,
    defaultState: {
        background: 'light',
        checked: false,
        disabled: false,
        indeterminate: false,
        invalid: false,
        required: false,
        componentProps: {
            value: 'lorem ipsum',
            checked: false,
            onChange: function () {
                var newComponentProps = __assign({}, this.state.componentProps);
                newComponentProps.checked = !newComponentProps.checked;
                this.setState({
                    componentProps: newComponentProps,
                    checked: newComponentProps.checked,
                });
            },
            dark: false,
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'checked',
                properties: {
                    checked: true,
                },
            },
            {
                name: 'disabled',
                properties: {
                    disabled: true,
                },
            },
            {
                name: 'indeterminate',
                properties: {
                    indeterminate: true,
                },
            },
            {
                name: 'invalid',
                properties: {
                    invalid: true,
                },
            },
            {
                name: 'required',
                properties: {
                    required: true,
                },
            },
        ],
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
var Checkbox = function (_a) {
    var value = _a.value, _b = _a.className, className = _b === void 0 ? '' : _b, checked = _a.checked, dark = _a.dark, disabled = _a.disabled, dropdown = _a.dropdown, id = _a.id, indeterminate = _a.indeterminate, invalid = _a.invalid, required = _a.required, onChange = _a.onChange, children = _a.children, otherProps = __rest(_a, ["value", "className", "checked", "dark", "disabled", "dropdown", "id", "indeterminate", "invalid", "required", "onChange", "children"]);
    var checkboxId = useState(id ? id : uniqId())[0];
    var _c = useState(false), modified = _c[0], setModified = _c[1];
    var checkboxRef = useRef(null);
    useEffect(function () {
        checkboxRef.current.indeterminate = indeterminate;
    }, [indeterminate]);
    invalid = !disabled && (invalid || (modified && required && !checked));
    return (_jsx("div", __assign({ className: className }, { children: _jsxs("label", __assign({ className: "flex space-around relative p-2 " + (disabled ? 'cursor-not-allowed' : 'cursor-pointer') + " " + (dropdown
                ? 'dropdown-item-checkbox py-4 border-b border-medium-light-gray-100'
                : ''), htmlFor: checkboxId }, { children: [_jsx("input", __assign({ className: "absolute opacity-0 h-0 w-0 " + (invalid ? 'invalid' : ''), type: "checkbox", value: value, id: checkboxId, ref: checkboxRef, checked: checked, disabled: disabled, onBlur: function () { return setModified(true); }, onChange: onChange }, otherProps), void 0), _jsx("span", { className: "checkmark h-5 w-5 min-w-5 border-2 rounded border-dark-gray-300 " + (dark ? 'bg-light-gray' : 'bg-white') }, void 0), _jsx("span", __assign({ className: dropdown
                        ? 'pl-2 text-xs uppercase text-dark-gray-300 font-bold'
                        : 'pl-2 text-sm text-medium-dark-gray text-left' }, { children: children }), void 0)] }), void 0) }), void 0));
};
export default Checkbox;
export { previewConfig };
//# sourceMappingURL=Checkbox.js.map