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
var Column = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, cols = _a.cols, start = _a.start, sm = _a.sm, smStart = _a.smStart, md = _a.md, mdStart = _a.mdStart, lg = _a.lg, lgStart = _a.lgStart, children = _a.children, otherProps = __rest(_a, ["className", "cols", "start", "sm", "smStart", "md", "mdStart", "lg", "lgStart", "children"]);
    var colSpanClasses = cols
        ? "sm:col-span-" + (cols || '8') + " md:col-span-" + (cols || '12') + " lg:col-span-" + (cols || '12')
        : "sm:col-span-" + (sm || '8') + " md:col-span-" + (md || '12') + " lg:col-span-" + (lg || '12');
    var colStartClasses = start
        ? "col-start-" + start
        : (smStart ? "sm:col-start-" + smStart : '') + " " + (mdStart ? "md:col-start-" + mdStart : '') + " " + (lgStart ? "lg:col-start-" + lgStart : '');
    return (_jsx("div", __assign({ className: colSpanClasses + " " + colStartClasses + " " + className }, otherProps, { children: children }), void 0));
};
export default Column;
//# sourceMappingURL=Column.js.map