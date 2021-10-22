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
import './Alert.scss';
var previewConfig = {
    name: 'Alert',
    defaultState: {
        variant: 'danger',
        withTitle: false,
        withIcon: false,
        componentProps: {
            variant: 'danger',
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'withTitle',
                properties: {
                    title: 'lorem ipsum',
                },
            },
            {
                name: 'withIcon',
                properties: {
                    withIcon: true,
                },
            },
        ],
    },
    variant: {
        type: 'radio',
        values: ['danger', 'warning', 'success'],
    },
};
var Alert = function (_a) {
    var variant = _a.variant, _b = _a.className, className = _b === void 0 ? '' : _b, title = _a.title, withIcon = _a.withIcon, children = _a.children, otherProps = __rest(_a, ["variant", "className", "title", "withIcon", "children"]);
    var backgroundColour, icon, iconColour;
    if (variant === 'danger') {
        backgroundColour = 'bg-red-50';
        icon = 'CloseCircleOutline';
        iconColour = 'text-red-400';
    }
    else if (variant === 'warning') {
        backgroundColour = 'bg-yellow-100';
        icon = 'AlertOutline';
        iconColour = 'text-yellow';
    }
    else if (variant === 'success') {
        backgroundColour = 'bg-green-100';
        icon = 'CheckAll';
        iconColour = 'text-green';
    }
    return (_jsxs("div", __assign({ className: "alert alert-" + variant + " relative rounded-md px-6 py-4 " + backgroundColour + " " + className }, otherProps, { children: [title && (_jsx("p", __assign({ className: "alert-title font-title font-bold uppercase text-base pb-2" }, { children: title }), void 0)), _jsxs("span", __assign({ className: "flex text-medium-dark-gray text-sm text-left tracking-normal" }, { children: [withIcon && (_jsx(IconCustom, { icon: icon, className: "inline h-6 mr-2 " + iconColour }, void 0)), children] }), void 0)] }), void 0));
};
export default Alert;
export { previewConfig };
//# sourceMappingURL=Alert.js.map