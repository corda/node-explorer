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
import { v4 as uniqId } from 'uuid';
import HelpText from '../HelpText/HelpText';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { IconCustom } from '../../../exports';
var previewConfig = {
    name: 'Select',
    form: true,
    defaultState: {
        background: 'light',
        disabled: false,
        invalid: false,
        required: false,
        helpText: false,
        errorMessage: false,
        componentProps: {
            label: 'lorem ipsum',
            value: '',
            onChange: function (event) {
                var newComponentProps = __assign({}, this.state.componentProps);
                newComponentProps.value = event.target.value;
                this.setState({ componentProps: newComponentProps });
            },
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'disabled',
                properties: {
                    disabled: true,
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
            {
                name: 'helpText',
                properties: {
                    helpText: 'lorem ipsum dolor sit amet',
                },
            },
            {
                name: 'errorMessage',
                properties: {
                    invalid: true,
                    errorMessage: 'lorem ipsum dolor sit amet - error',
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
var SelectInput = function (_a) {
    var label = _a.label, _b = _a.className, className = _b === void 0 ? '' : _b, dark = _a.dark, disabled = _a.disabled, children = _a.children, value = _a.value, id = _a.id, invalid = _a.invalid, errorMessage = _a.errorMessage, helpText = _a.helpText, required = _a.required, onChange = _a.onChange, otherProps = __rest(_a, ["label", "className", "dark", "disabled", "children", "value", "id", "invalid", "errorMessage", "helpText", "required", "onChange"]);
    var selectId = useState(id ? id : uniqId())[0];
    var _c = useState(false), modified = _c[0], setModified = _c[1];
    useEffect(function () {
        invalid && value === '' ? setModified(true) : setModified(false);
    }, [invalid]);
    return (_jsxs("div", __assign({ className: "input relative w-full " + className }, { children: [_jsxs("label", __assign({ htmlFor: selectId, className: disabled ? 'text-medium-light-gray-300' : 'text-dark-gray-300' }, { children: [_jsx(IconCustom, { icon: "ChevronDown", className: "input-icon absolute top-3 right-4 h-5-1/2 pointer-events-none" }, void 0), _jsx("select", __assign({ id: selectId, disabled: disabled, className: "appearance-none input-field block h-12 w-full rounded-full py-3 px-6 tracking-small outline-none border-2  " + (value === ''
                            ? 'border-medium-light-gray-300'
                            : 'border-medium-light-gray') + " text-base focus:border-dark-gray-300 " + (disabled ? 'cursor-not-allowed' : '') + " " + (dark ? 'gray bg-light-gray' : 'white bg-white'), value: value, "data-value": value, required: required, "data-modified": modified, "data-invalid": !disabled && invalid, onBlur: function () { return !modified && setModified(true); }, onChange: onChange }, otherProps, { children: children }), void 0), _jsx("span", __assign({ className: "select-label absolute top-sm text-left left-6 bg-transparent font-bold text-sm uppercase tracking-smaller pointer-events-none w-2/3 overflow-hidden whitespace-no-wrap " + (disabled
                            ? 'text-medium-light-gray-300 cursor-not-allowed'
                            : value === ''
                                ? 'text-dark-gray-300'
                                : 'text-medium-light-gray') }, { children: _jsx("span", __assign({ className: "px-1 " + (dark ? 'bg-light-gray' : 'bg-white') }, { children: label }), void 0) }), void 0)] }), void 0), invalid && modified && errorMessage ? (_jsx(ErrorMessage, { errorMessage: errorMessage }, void 0)) : (helpText && _jsx(HelpText, { helpText: helpText }, void 0))] }), void 0));
};
export default SelectInput;
export { previewConfig };
//# sourceMappingURL=Select.js.map