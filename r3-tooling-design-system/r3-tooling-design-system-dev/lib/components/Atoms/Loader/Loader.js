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
import './Loader.scss';
var previewConfig = {
    name: 'Loader',
    defaultState: {
        text: false,
        size: 'small',
        loaderSpeed: '',
        componentProps: {
            size: 'small',
            text: false,
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'text',
                properties: {
                    text: 'loading...',
                },
            },
            {
                name: 'loaderSpeed',
                properties: {
                    loaderSpeed: 0.2,
                },
            },
        ],
    },
    size: {
        type: 'radio',
        values: ['small', 'medium', 'large'],
    },
};
var Loader = function (_a) {
    var size = _a.size, text = _a.text, loaderSpeed = _a.loaderSpeed, _b = _a.className, className = _b === void 0 ? '' : _b, otherProps = __rest(_a, ["size", "text", "loaderSpeed", "className"]);
    var classesSize = {
        small: 'w-16 h-16',
        medium: 'w-20 h-20',
        large: 'w-24 h-24',
    };
    return (_jsxs("div", __assign({ className: "m-auto flex flex-col items-center" }, { children: [_jsx("div", __assign({ className: "loader relative rounded-full m-auto " + classesSize[size] + " " + className }, otherProps, { style: loaderSpeed
                    ? {
                        animation: "load-rotate " + (loaderSpeed + 's') + " infinite linear",
                    }
                    : {} }, { children: ' ' }), void 0), text && (_jsx("span", __assign({ className: "pt-4 text-xs text-dark-gray-300 font-bold uppercase tracking-large" }, { children: text }), void 0))] }), void 0));
};
export default Loader;
export { previewConfig };
//# sourceMappingURL=Loader.js.map