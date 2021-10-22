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
import { Pictogram } from '../../../exports';
var previewConfig = {
    name: 'Empty state',
    defaultState: {
        componentProps: {
            show: true,
            icon: 'AstronautWave',
            title: 'Lorem ipsum',
        },
    },
};
var EmptyState = function (_a) {
    var icon = _a.icon, title = _a.title, _b = _a.className, className = _b === void 0 ? '' : _b, show = _a.show, children = _a.children, otherProps = __rest(_a, ["icon", "title", "className", "show", "children"]);
    return show ? (_jsxs("div", __assign({ className: className + " bg-light-gray shadow-0-3-6-dark-gray-1 py-10 px-20 w-full flex flex-col items-center" }, otherProps, { children: [_jsx(Pictogram, { className: "pb-2", icon: icon }, void 0), _jsx("span", __assign({ className: "font-bold text-xs uppercase text-medium-dark-gray-400 tracking-larger pb-2" }, { children: title }), void 0), _jsx("span", __assign({ className: "text-medium-dark-gray text-sm" }, { children: children }), void 0)] }), void 0)) : null;
};
export default EmptyState;
export { previewConfig };
//# sourceMappingURL=EmptyState.js.map