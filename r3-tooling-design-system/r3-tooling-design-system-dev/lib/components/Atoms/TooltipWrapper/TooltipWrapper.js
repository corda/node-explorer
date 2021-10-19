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
import { jsx as _jsx } from "react/jsx-runtime";
var TooltipWrapper = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, onMouseOver = _a.onMouseOver, onMouseOut = _a.onMouseOut, children = _a.children, otherProps = _a.otherProps;
    return (_jsx("div", __assign({ className: "relative " + className, onMouseOver: onMouseOver, onMouseOut: onMouseOut }, otherProps, { children: children }), void 0));
};
export default TooltipWrapper;
//# sourceMappingURL=TooltipWrapper.js.map