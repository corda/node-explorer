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
import { useState, useRef, useEffect } from 'react';
import { v4 as uniqId } from 'uuid';
import HelpText from '../HelpText/HelpText';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { IconCustom } from '../../../exports';
import './NumberInput.css';
var previewConfig = {
    name: 'Number Input',
    form: true,
    defaultState: {
        background: 'light',
        disabled: false,
        invalid: false,
        required: false,
        helpText: false,
        errorMessage: false,
        step: false,
        componentProps: {
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
            {
                name: 'step',
                properties: {
                    step: 10,
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
var NumberInput = function (_a) {
    var value = _a.value, _b = _a.className, className = _b === void 0 ? '' : _b, dark = _a.dark, disabled = _a.disabled, errorMessage = _a.errorMessage, helpText = _a.helpText, id = _a.id, invalid = _a.invalid, required = _a.required, step = _a.step, onChange = _a.onChange, otherProps = __rest(_a, ["value", "className", "dark", "disabled", "errorMessage", "helpText", "id", "invalid", "required", "step", "onChange"]);
    var numberId = useState(id ? id : uniqId())[0];
    var _c = useState(false), modified = _c[0], setModified = _c[1];
    var numberRef = useRef(null);
    useEffect(function () {
        invalid && value === '' ? setModified(true) : setModified(false);
    }, [invalid]);
    var onClick = function (direction) {
        var event = new Event('input', { bubbles: true });
        var newValue = direction === 'add'
            ? (parseInt(numberRef.current.value) || 0) + (step || 1)
            : (parseInt(numberRef.current.value) || 0) - (step || 1);
        numberRef.current.focus();
        numberRef.current.value = newValue.toString();
        numberRef.current._valueTracker && numberRef.current._valueTracker.setValue();
        numberRef.current.dispatchEvent(event);
    };
    return (_jsxs("div", __assign({ className: "input relative " + className }, { children: [_jsxs("span", __assign({ className: "flex h-8 w-28 rounded overflow-hidden whitespace-no-wrap outline-none text-sm text-dark-gray uppercase " + (disabled ? 'cursor-not-allowed' : '') + " " + (dark ? 'bg-light-gray' : 'bg-white') }, { children: [_jsx("span", __assign({ className: "w-1/4 flex items-center justify-center border-t-2 border-b-2 border-l-2 border-medium-light-gray-300 " + (disabled
                            ? 'text-medium-light-gray-300'
                            : 'text-blue hover:bg-blue hover:text-white hover:border-transparent'), onClick: function () { return onClick('substract'); } }, { children: _jsx(IconCustom, { icon: "Minus", className: "h-5" }, void 0) }), void 0), _jsx("input", __assign({ className: "w-1/2 outline-none text-center border-2 border-medium-light-gray-300 " + (dark ? 'gray bg-light-gray' : 'white bg-white'), disabled: disabled, id: numberId, ref: numberRef, required: required, step: step, type: "number", value: value, "data-invalid": !disabled && invalid, "data-modified": modified, onBlur: function () { return !modified && setModified(true); }, onChange: onChange }, otherProps), void 0), _jsx("span", __assign({ className: "w-1/4 flex items-center justify-center border-t-2 border-r-2 border-b-2  " + (value === ''
                            ? 'border-medium-light-gray-300'
                            : 'border-medium-light-gray') + "  " + (disabled
                            ? 'text-medium-light-gray-300'
                            : 'text-blue hover:bg-blue hover:text-white hover:border-transparent'), onClick: function () { return onClick('add'); } }, { children: _jsx(IconCustom, { icon: "Plus", className: "h-5" }, void 0) }), void 0)] }), void 0), invalid && modified && errorMessage ? (_jsx(ErrorMessage, { errorMessage: errorMessage }, void 0)) : (helpText && _jsx(HelpText, { helpText: helpText }, void 0))] }), void 0));
};
export default NumberInput;
export { previewConfig };
//# sourceMappingURL=NumberInput.js.map