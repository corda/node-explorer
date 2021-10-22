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
import { IconCustom } from '../../../exports';
import './Button.scss';
var previewConfig = {
    name: 'Button',
    defaultState: {
        background: 'light',
        withIcon: 'noIcon',
        variant: 'primary',
        size: 'large',
        disabled: false,
        isLink: false,
        noPaddingFocus: false,
        isLoading: false,
        componentProps: {
            size: 'large',
            variant: 'primary',
            dark: false,
            noPaddingFocus: false,
            isLoading: false,
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
                name: 'isLoading',
                properties: {
                    isLoading: true,
                },
            },
            {
                name: 'isLink',
                properties: {
                    isLink: true,
                },
            },
            {
                name: 'noPaddingFocus',
                properties: {
                    noPaddingFocus: true,
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
        ],
    },
    size: {
        type: 'radio',
        values: ['large', 'small'],
    },
    withIcon: {
        type: 'select',
        options: [
            {
                name: 'noIcon',
                properties: {
                    iconLeft: '',
                    iconRight: '',
                },
            },
            {
                name: 'iconLeft',
                properties: {
                    iconLeft: 'Download',
                    iconRight: '',
                },
            },
            {
                name: 'iconRight',
                properties: {
                    iconLeft: '',
                    iconRight: 'Share',
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
var Button = function (_a) {
    var size = _a.size, variant = _a.variant, _b = _a.className, className = _b === void 0 ? '' : _b, dark = _a.dark, disabled = _a.disabled, iconLeft = _a.iconLeft, iconRight = _a.iconRight, isLink = _a.isLink, rel = _a.rel, noPaddingFocus = _a.noPaddingFocus, target = _a.target, to = _a.to, children = _a.children, _c = _a.isLoading, isLoading = _c === void 0 ? false : _c, loadingIcon = _a.loadingIcon, loadingAnimationClass = _a.loadingAnimationClass, otherProps = __rest(_a, ["size", "variant", "className", "dark", "disabled", "iconLeft", "iconRight", "isLink", "rel", "noPaddingFocus", "target", "to", "children", "isLoading", "loadingIcon", "loadingAnimationClass"]);
    var noFocus = (variant === 'tertiary' || variant === 'label' || variant === 'labeldanger') &&
        noPaddingFocus;
    var classesVariant = {
        primary: 'bg-dark-gray text-white cursor-pointer leading-normal hover:shadow-0-3-6-bluegray focus:shadow-0-0-12-blue',
        primaryDark: 'bg-white text-dark-gray cursor-pointer leading-normal hover:shadow-0-3-6-dark-gray focus:shadow-0-0-12-white',
        primaryDisabled: 'bg-dark-gray-100 text-dark-gray-200 cursor-not-allowed leading-normal',
        secondary: 'border-2 border-dark-gray text-dark-gray cursor-pointer leading-none hover:bg-blue hover:text-white hover:border-transparent focus:shadow-0-0-12-blue',
        secondaryDark: 'border-2 border-white text-white cursor-pointer leading-none hover:bg-blue-300 hover:border-transparent focus:shadow-0-0-12-white',
        secondaryDisabled: 'border-2 border-dark-gray-200 text-dark-gray-200 cursor-not-allowed leading-none',
        tertiary: "text-blue cursor-pointer leading-normal " + (noFocus ? '' : 'focus:shadow-0-0-12-blue'),
        tertiaryDark: "text-blue-300 cursor-pointer leading-normal " + (noFocus ? '' : 'focus:shadow-0-0-12-white'),
        tertiaryDisabled: 'text-dark-gray-100 cursor-not-allowed leading-normal',
        label: "text-medium-light-gray-300  cursor-pointer leading-normal " + (noFocus ? '' : 'focus:shadow-0-0-12-medium-light-gray'),
        labelDark: "text-white  cursor-pointer leading-normal " + (noFocus ? '' : 'focus:shadow-0-0-12-white'),
        labelDisabled: 'text-dark-gray-100 cursor-not-allowed leading-normal',
        warning: 'bg-yellow text-white  cursor-pointer leading-normal hover:shadow-0-3-6-yellow-600 focus:shadow-0-0-12-yellow-600',
        warningDark: 'bg-yellow text-white  cursor-pointer leading-normal hover:shadow-0-3-6-yellow-600 focus:shadow-0-0-12-white',
        warningDisabled: 'bg-dark-gray-100 text-dark-gray-200 cursor-not-allowed leading-normal',
        danger: 'bg-red text-white  cursor-pointer leading-normal hover:shadow-0-3-6-red-600 focus:shadow-0-0-12-red-600',
        dangerDark: 'bg-red text-white  cursor-pointer leading-normal hover:shadow-0-3-6-red-600 focus:shadow-0-0-12-white',
        dangerDisabled: 'bg-dark-gray-100 text-dark-gray-200 cursor-not-allowed leading-normal',
        labeldanger: "text-red cursor-pointer leading-normal " + (noFocus ? '' : 'focus:shadow-0-0-12-red-400'),
        labeldangerDark: "text-red cursor-pointer leading-normal " + (noFocus ? '' : 'focus:shadow-0-0-12-white'),
        labeldangerDisabled: 'text-dark-gray-100 cursor-not-allowed leading-normal',
    };
    var classesSize = {
        large: 'min-h-12 text-base ',
        small: (noFocus ? '' : 'min-h-10') + " text-xs",
    };
    var defineClasses = function () {
        var classList = "flex items-center box-border inline-block tracking-wider " + (noFocus ? '' : 'py-3 px-8') + " font-title uppercase rounded-full duration-200 ease-in-out transition focus:outline-none";
        var btnVariant = "" + variant + (disabled ? 'Disabled' : dark ? 'Dark' : '');
        return [classList, classesVariant[btnVariant], classesSize[size]].join(' ');
    };
    var button = (_jsxs("button", __assign({ className: defineClasses() + " " + className, disabled: disabled }, otherProps, { children: [iconLeft && !isLoading && (_jsx(IconCustom, { icon: iconLeft, className: "h-4 mr-3 -ml-3" }, void 0)), isLoading && iconLeft && (_jsx(IconCustom, { icon: loadingIcon ? loadingIcon : 'Autorenew', className: "h-4 mr-3 -ml-3 " + (loadingAnimationClass ? loadingAnimationClass : 'button-icon-rotate') + " " }, void 0)), _jsx("span", __assign({ className: !disabled ? "relative button-" + variant + "-text" : '' }, { children: children }), void 0), iconRight && !isLoading && (_jsx(IconCustom, { icon: iconRight, className: "h-4 -mr-3 ml-3" }, void 0)), isLoading && (iconRight || (!iconLeft && !iconRight)) && (_jsx(IconCustom, { icon: loadingIcon ? loadingIcon : 'Autorenew', className: "h-4 -mr-3 ml-3 " + (loadingAnimationClass ? loadingAnimationClass : 'button-icon-rotate') + " " }, void 0))] }), void 0));
    return isLink ? (_jsx("a", __assign({ type: "button", href: to, rel: rel, target: target }, { children: button }), void 0)) : (button);
};
export default Button;
export { previewConfig };
//# sourceMappingURL=Button.js.map