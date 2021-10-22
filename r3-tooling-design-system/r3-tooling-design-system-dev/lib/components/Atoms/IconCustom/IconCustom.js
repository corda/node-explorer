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
import Icon from '@mdi/react';
import * as mdiSet from '@mdi/js';
var IconCustom = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, icon = _a.icon, otherProps = __rest(_a, ["className", "icon"]);
    var iconPath = "mdi" + icon;
    return (_jsx("span", __assign({}, otherProps, { className: "icon-container" }, { children: _jsx(Icon, { className: "icon " + className, path: mdiSet[iconPath] }, void 0) }), void 0));
};
export default IconCustom;
//# sourceMappingURL=IconCustom.js.map