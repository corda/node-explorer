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
import './Tooltip.scss';
var previewConfig = {
    name: 'Tooltip',
    defaultState: {
        show: true,
        componentProps: {
            show: true,
            position: 'topRight',
            className: 'relative',
            variant: 'light',
            size: 'large',
        },
    },
    position: {
        type: 'radio',
        values: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'],
    },
    variant: {
        type: 'radio',
        values: ['dark', 'light'],
    },
    size: {
        type: 'radio',
        values: ['small', 'medium', 'large'],
    },
};
var Tooltip = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.position, position = _c === void 0 ? 'topRight' : _c, _d = _a.variant, variant = _d === void 0 ? 'light' : _d, _e = _a.size, size = _e === void 0 ? 'large' : _e, show = _a.show, children = _a.children, otherProps = __rest(_a, ["className", "position", "variant", "size", "show", "children"]);
    var widthsBySize = {
        small: 'w-1/2',
        medium: 'w-3/4',
        large: 'w-full',
    };
    var backgroundsByVariant = {
        light: 'bg-light-gray text-dark-gray',
        dark: 'bg-dark-gray text-white',
    };
    var parentClass, childClass;
    switch (position) {
        case 'topLeft':
            parentClass = '-top-4';
            childClass = 'topLeft bottom-full left-0';
            break;
        case 'bottomRight':
            parentClass = '-bottom-4';
            childClass = 'bottomRight top-full right-0';
            break;
        case 'bottomLeft':
            parentClass = '-bottom-4';
            childClass = 'bottomLeft top-full left-0';
            break;
        case 'topRight':
        default:
            parentClass = '-top-4';
            childClass = 'topRight bottom-full right-0';
            break;
    }
    return show ? (_jsx("div", __assign({ className: "tooltip block absolute w-full " + parentClass + " " + className }, otherProps, { children: _jsx("div", __assign({ className: "tooltip-text z-10 absolute right-0  text-sm text-left p-4 rounded-md shadow-0-3-6-dark-gray-1 " + childClass + " " + backgroundsByVariant[variant] + " " + widthsBySize[size] }, { children: children }), void 0) }), void 0)) : null;
};
export default Tooltip;
export { previewConfig };
//# sourceMappingURL=Tooltip.js.map