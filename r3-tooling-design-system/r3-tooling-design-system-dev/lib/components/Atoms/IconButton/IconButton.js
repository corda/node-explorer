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
import { IconCustom } from '../../../exports';
var previewConfig = {
    name: 'Icon Button',
    defaultState: {
        background: 'light',
        variant: 'primary',
        size: 'large',
        disabled: false,
        isLink: false,
        componentProps: {
            size: 'large',
            variant: 'primary',
            dark: false,
            icon: 'Twitter',
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
                name: 'isLink',
                properties: {
                    isLink: true,
                },
            },
        ],
    },
    variant: {
        type: 'radio',
        values: [
            'primary',
            'secondary',
            'tertiary',
            'label',
            'danger',
            'warning',
            'labeldanger',
            'icon',
        ],
    },
    size: {
        type: 'radio',
        values: ['large', 'medium', 'small'],
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
var IconButton = function (_a) {
    var icon = _a.icon, size = _a.size, variant = _a.variant, _b = _a.className, className = _b === void 0 ? '' : _b, dark = _a.dark, disabled = _a.disabled, isLink = _a.isLink, rel = _a.rel, to = _a.to, target = _a.target, children = _a.children, otherProps = __rest(_a, ["icon", "size", "variant", "className", "dark", "disabled", "isLink", "rel", "to", "target", "children"]);
    var classesVariant = {
        primary: 'bg-dark-gray text-white cursor-pointer  hover:shadow-0-3-6-bluegray focus:shadow-0-0-12-blue',
        primaryDark: 'bg-white text-dark-gray cursor-pointer  hover:shadow-0-3-6-dark-gray focus:shadow-0-0-12-white',
        primaryDisabled: 'bg-dark-gray-100 text-dark-gray-200 cursor-not-allowed ',
        secondary: 'border-2 border-dark-gray text-dark-gray cursor-pointer  hover:bg-blue hover:text-white hover:border-transparent focus:shadow-0-0-12-blue',
        secondaryDark: 'border-2 border-white text-white cursor-pointer  hover:bg-blue-300 hover:border-transparent focus:shadow-0-0-12-white',
        secondaryDisabled: 'border-2 border-dark-gray-200 text-dark-gray-200 cursor-not-allowed leading-none',
        tertiary: 'text-blue cursor-pointer leading-normal focus:shadow-0-0-12-blue',
        tertiaryDark: 'text-blue-300 cursor-pointer leading-normal focus:shadow-0-0-12-white',
        tertiaryDisabled: 'text-dark-gray-100 cursor-not-allowed leading-normal',
        label: 'text-medium-light-gray-300  cursor-pointer leading-normal focus:shadow-0-0-12-medium-light-gray',
        labelDark: 'text-white  cursor-pointer leading-normal focus:shadow-0-0-12-white',
        labelDisabled: 'text-dark-gray-100 cursor-not-allowed leading-normal',
        warning: 'bg-yellow text-white  cursor-pointer  hover:shadow-0-3-6-yellow-600 focus:shadow-0-0-12-yellow-600',
        warningDark: 'bg-yellow text-white  cursor-pointer leading-normal hover:shadow-0-3-6-yellow-600 focus:shadow-0-0-12-white',
        warningDisabled: 'bg-dark-gray-100 text-dark-gray-200 cursor-not-allowed leading-normal',
        danger: 'bg-red text-white  cursor-pointer  hover:shadow-0-3-6-red-600 focus:shadow-0-0-12-red-600',
        dangerDark: 'bg-red text-white  cursor-pointer leading-normal hover:shadow-0-3-6-red-600 focus:shadow-0-0-12-white',
        dangerDisabled: 'bg-dark-gray-100 text-dark-gray-200 cursor-not-allowed leading-normal',
        labeldanger: 'text-red cursor-pointer leading-normal focus:shadow-0-0-12-red-400',
        labeldangerDark: 'text-red cursor-pointer leading-normal focus:shadow-0-0-12-white',
        labeldangerDisabled: 'text-dark-gray-100 cursor-not-allowed leading-normal',
        icon: 'bg-transparent text-dark-gray cursor-pointer',
        iconDark: 'bg-transparent text-white cursor-pointer',
        iconDisabled: 'bg-transparent text-dark-gray-200 cursor-not-allowed',
    };
    var classesSize = {
        large: 'w-12 min-w-12 max-w-12 min-h-12 leading-0',
        medium: 'w-10 min-w-10 max-w-10 min-h-10 leading-0',
        small: 'w-6 min-w-6 max-w-6 min-h-6',
    };
    var defineClasses = function (disabled, variant, size) {
        var classList = 'box-border inline-block text-base rounded-full duration-200 ease-in-out transition focus:outline-none';
        var btnVariant = "" + variant + (disabled ? 'Disabled' : dark ? 'Dark' : '');
        return [classList, classesVariant[btnVariant], classesSize[size]].join(' ');
    };
    var button = (_jsx("button", __assign({ className: defineClasses(disabled, variant, size) + " " + className, disabled: disabled }, otherProps, { children: _jsx(IconCustom, { icon: icon, className: "inline " + (size === 'large' ? 'h-5-1/2' : 'h-4') }, void 0) }), void 0));
    return isLink ? (_jsx("a", __assign({ href: to, rel: rel, target: target }, { children: button }), void 0)) : (button);
};
export default IconButton;
export { previewConfig };
//# sourceMappingURL=IconButton.js.map