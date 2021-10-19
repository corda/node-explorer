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
import './Toggle.scss';
var previewConfig = {
    name: 'Toggle',
    form: true,
    defaultState: {
        variant: 'gray',
        checked: false,
        disabled: false,
        labels: false,
        textContent: false,
        componentProps: {
            variant: 'gray',
            checked: false,
            disabled: false,
            textContent: false,
            onChange: function () {
                var newComponentProps = __assign({}, this.state.componentProps);
                newComponentProps.checked = !newComponentProps.checked;
                this.setState({
                    componentProps: newComponentProps,
                    checked: newComponentProps.checked,
                });
            },
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
                name: 'labels',
                properties: {
                    labelOn: 'on',
                    labelOff: 'off',
                },
            },
            {
                name: 'textContent',
                properties: {
                    textContent: 'lorem ipsum dolor sit amet',
                },
            },
        ],
    },
    variant: {
        type: 'radio',
        values: ['gray', 'redgreen'],
    },
};
var ToggleSwitch = function (_a) {
    var variant = _a.variant, _b = _a.className, className = _b === void 0 ? '' : _b, checked = _a.checked, disabled = _a.disabled, id = _a.id, labelOff = _a.labelOff, labelOn = _a.labelOn, textContent = _a.textContent, onChange = _a.onChange, otherProps = __rest(_a, ["variant", "className", "checked", "disabled", "id", "labelOff", "labelOn", "textContent", "onChange"]);
    var toggleId = useState(id ? id : uniqId())[0];
    var toggle = function (event) {
        onChange();
    };
    var commonClasses = 'toggle h-7 inset-0 rounded-full focus:outline-none';
    var disabledClasses = disabled ? 'cursor-not-allowed' : 'cursor-pointer';
    var toggleClass = checked ? 'toggle-on' : 'toggle-off';
    var widthClass = labelOn ? 'w-20' : 'w-15';
    var labelOnClass = checked ? 'left-xs' : 'hidden';
    var labelOffClass = checked ? 'hidden' : 'left-md';
    var backgroundClass, textClass;
    if (disabled) {
        backgroundClass = 'bg-dark-gray-100';
        textClass = 'text-dark-gray-300';
    }
    else if (variant === 'gray') {
        backgroundClass = checked
            ? 'gray focus:shadow-0-0-7-dark-gray '
            : 'gray focus:shadow-0-0-7-dark-gray ';
        textClass = checked ? 'text-white' : 'text-medium-light-gray';
    }
    else if (variant === 'redgreen') {
        backgroundClass = checked
            ? 'redgreen focus:shadow-0-0-7-green-600'
            : 'redgreen focus:shadow-0-0-7-red-600';
        textClass = 'text-white';
    }
    var toggleClassList = [
        commonClasses,
        disabledClasses,
        toggleClass,
        backgroundClass,
        widthClass,
    ].join(' ');
    var textClassList = "absolute uppercase text-sm top-xxs mx-3 " + textClass;
    return (_jsxs("div", __assign({ className: "flex space-around " + className }, { children: [_jsx("label", __assign({ htmlFor: toggleId, className: "relative h-full flex " + disabledClasses }, { children: _jsxs("span", __assign({ className: "flex pointer-events-none" }, { children: [_jsx("input", __assign({ type: "checkbox", id: toggleId, checked: checked, onChange: function (event) { return toggle(event); }, className: "w-0 h-0 opacity-0", disabled: disabled }, otherProps), void 0), _jsx("span", { tabIndex: 0, className: toggleClassList }, void 0), labelOn && (_jsx("span", __assign({ className: textClassList + " " + labelOnClass }, { children: labelOn }), void 0)), labelOff && (_jsx("span", __assign({ className: textClassList + " " + labelOffClass }, { children: labelOff }), void 0))] }), void 0) }), void 0), textContent && (_jsx("label", __assign({ htmlFor: toggleId, className: "pl-2 text-sm text-medium-dark-gray " + disabledClasses }, { children: textContent }), void 0))] }), void 0));
};
export default ToggleSwitch;
export { previewConfig };
//# sourceMappingURL=Toggle.js.map