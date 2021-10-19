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
var previewConfig = {
    name: 'Radio Group & Radio Button',
    form: true,
    defaultState: {
        dark: false,
        disabled: false,
        invalid: false,
        required: false,
        checked: false,
        componentProps: {
            dark: false,
            groupName: 'radio group',
            value: 'unchecked',
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
                name: 'dark',
                properties: {
                    dark: true,
                },
            },
        ],
    },
    childrenProps: {
        type: 'checkbox',
        options: [
            {
                name: 'disabled',
                properties: {
                    disabled: true,
                },
            },
        ],
    },
};
var RadioGroup = function (_a) {
    var groupName = _a.groupName, label = _a.label, value = _a.value, _b = _a.className, className = _b === void 0 ? '' : _b, dark = _a.dark, invalid = _a.invalid, preview = _a.preview, children = _a.children, onChange = _a.onChange, otherProps = __rest(_a, ["groupName", "label", "value", "className", "dark", "invalid", "preview", "children", "onChange"]);
    var _c = useState(value), selectedValue = _c[0], setSelectedValue = _c[1];
    var forwardSelectedValue = function (value) {
        setSelectedValue(value);
        onChange(value);
    };
    useEffect(function () {
        setSelectedValue(value);
    }, [value]);
    var childrenWithProps = Children.map(children, function (child) {
        if (isValidElement(child)) {
            return cloneElement(child, __assign(__assign({}, child.props), { checked: selectedValue === child.props.value, dark: dark, onChange: function () { return forwardSelectedValue(child.props.value); }, groupName: groupName }));
        }
        return child;
    });
    return (_jsxs("fieldset", __assign({ className: "radio-group " + (invalid ? 'invalid' : '') + " " + className + "  " + (preview ? 'py-4 border-b border-medium-light-gray-100' : '') }, otherProps, { children: [_jsx("legend", __assign({ className: preview
                    ? 'text-dark-gray-300 uppercase font-bold tracking-larger text-xs pt-4'
                    : 'font-title text-dark-gray text-lg' }, { children: label }), void 0), childrenWithProps] }), void 0));
};
export default RadioGroup;
export { previewConfig };
//# sourceMappingURL=RadioGroup.js.map