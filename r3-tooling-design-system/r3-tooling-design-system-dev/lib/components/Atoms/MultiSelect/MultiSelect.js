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
import { useState, Children, isValidElement, cloneElement, useEffect, } from 'react';
import MultiSelectInput from './MultiSelectInput';
import HelpText from '../HelpText/HelpText';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Dropdown } from '../../../exports';
import { removeDuplicateStringsInArray } from '../../../utils/helpers';
var previewConfig = {
    name: 'Multiselect',
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
            value: [],
            onChange: function (event) {
                var newComponentProps = __assign({}, this.state.componentProps);
                newComponentProps.value = event;
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
var MultiSelect = function (_a) {
    var value = _a.value, label = _a.label, _b = _a.className, className = _b === void 0 ? '' : _b, id = _a.id, dark = _a.dark, disabled = _a.disabled, errorMessage = _a.errorMessage, helpText = _a.helpText, invalid = _a.invalid, required = _a.required, onChange = _a.onChange, children = _a.children, _c = _a.dropdownBlock, dropdownBlock = _c === void 0 ? false : _c, otherProps = __rest(_a, ["value", "label", "className", "id", "dark", "disabled", "errorMessage", "helpText", "invalid", "required", "onChange", "children", "dropdownBlock"]);
    var _d = useState(removeDuplicateStringsInArray(value)), selectedValues = _d[0], setSelectedValues = _d[1];
    var _e = useState(false), modified = _e[0], setModified = _e[1];
    useEffect(function () {
        setSelectedValues(removeDuplicateStringsInArray(value));
    }, [value]);
    useEffect(function () {
        invalid && value.length === 0 ? setModified(true) : setModified(false);
    }, [invalid]);
    if (!disabled && required && modified && !value.length) {
        invalid = true;
    }
    var forwardselectedValues = function (value) {
        var newSelectedValues = selectedValues;
        var valuePositionIndex = newSelectedValues.indexOf(value);
        valuePositionIndex === -1
            ? newSelectedValues.push(value)
            : newSelectedValues.splice(valuePositionIndex, 1);
        setSelectedValues(newSelectedValues);
        onChange(newSelectedValues);
    };
    var options = Children.map(children, function (child, index) {
        if (isValidElement(child)) {
            return cloneElement(child, __assign(__assign({}, child.props), { checked: selectedValues.includes(child.props.value), onChange: function () { return forwardselectedValues(child.props.value); } }));
        }
    });
    return (_jsxs("div", __assign({ className: className + " w-full" }, { children: [disabled ? (_jsx(MultiSelectInput, __assign({ value: value, label: label, id: id, dark: dark, disabled: true, invalid: invalid, required: required, modified: modified, onBlur: function () { return !modified && setModified(true); }, onRemove: forwardselectedValues }, otherProps), void 0)) : (_jsx(Dropdown, __assign({ checkbox: true, block: dropdownBlock, trigger: _jsx(MultiSelectInput, { value: value, options: options, label: label, id: id, dark: dark, disabled: disabled, invalid: invalid, required: required, modified: modified, onBlur: function () {
                        return setTimeout(function () { return !modified && setModified(true); }, 100);
                    }, onRemove: forwardselectedValues }, void 0) }, { children: options }), void 0)), invalid && modified && errorMessage ? (_jsx(ErrorMessage, { errorMessage: errorMessage }, void 0)) : (helpText && _jsx(HelpText, { helpText: helpText }, void 0))] }), void 0));
};
export default MultiSelect;
export { previewConfig };
//# sourceMappingURL=MultiSelect.js.map