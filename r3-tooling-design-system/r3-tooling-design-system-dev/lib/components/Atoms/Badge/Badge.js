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
var previewConfig = {
    name: 'badge',
    form: true,
    defaultState: {
        variant: 'gray',
        whiteText: false,
        customColour: false,
        componentProps: {
            variant: 'gray',
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'whiteText',
                properties: {
                    whiteText: true,
                },
            },
            {
                name: 'customColour',
                properties: {
                    customColour: 'indigo',
                },
            },
        ],
    },
    variant: {
        type: 'radio',
        values: ['gray', 'red', 'yellow', 'green', 'blue'],
    },
};
var Badge = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, customColour = _a.customColour, variant = _a.variant, whiteText = _a.whiteText, children = _a.children, otherProps = __rest(_a, ["className", "customColour", "variant", "whiteText", "children"]);
    var backgroundClass = variant === 'blue'
        ? 'bg-blue-100'
        : variant === 'yellow'
            ? 'bg-yellow-300'
            : variant === 'red'
                ? 'bg-red-100'
                : variant === 'green'
                    ? 'bg-green-100'
                    : 'bg-medium-light-gray-100';
    return (_jsx("div", __assign({ style: { backgroundColor: customColour }, className: backgroundClass + " " + (whiteText ? 'text-white' : 'text-dark-gray') + " inline-block rounded uppercase text-xs font-bold py-1 px-2 tracking-larger " + className }, otherProps, { children: children }), void 0));
};
export default Badge;
export { previewConfig };
//# sourceMappingURL=Badge.js.map