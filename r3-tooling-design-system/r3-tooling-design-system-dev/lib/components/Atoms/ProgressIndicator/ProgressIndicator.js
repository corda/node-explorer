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
var previewConfig = {
    name: 'progress indicator',
    defaultState: {
        progress: 75,
        componentProps: {
            progress: 75,
        },
    },
    progress: {
        type: 'radio',
        values: [25, 50, 75],
    },
};
var ProgressIndicator = function (_a) {
    var progress = _a.progress, _b = _a.className, className = _b === void 0 ? '' : _b, otherProps = __rest(_a, ["progress", "className"]);
    return (_jsxs("div", __assign({ className: "w-full " + className }, otherProps, { children: [_jsx("span", __assign({ className: "block p-2 font-bold text-dark-gray text-center tracking-wider" }, { children: progress + "%" }), void 0), _jsx("div", __assign({ className: "h-4 w-full bg-dark-gray-100 rounded-lg" }, { children: _jsx("div", { style: { borderRadius: 'inherit', width: progress + "%" }, className: "h-full bg-blue" }, void 0) }), void 0)] }), void 0));
};
export default ProgressIndicator;
export { previewConfig };
//# sourceMappingURL=ProgressIndicator.js.map