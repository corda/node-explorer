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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconCustom } from '../../../exports';
var HelpText = function (_a) {
    var helpText = _a.helpText;
    return (_jsxs("span", __assign({ className: "flex space-around mt-2" }, { children: [_jsx(IconCustom, { icon: "InformationVariant", className: "h-4 inline ml-4 -mt-2 text-medium-light-gray" }, void 0), _jsx("span", __assign({ className: "text-sm text-medium-dark-gray text-left pl-1" }, { children: helpText }), void 0)] }), void 0));
};
export default HelpText;
//# sourceMappingURL=HelpText.js.map