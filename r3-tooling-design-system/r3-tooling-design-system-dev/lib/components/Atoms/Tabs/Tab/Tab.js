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
import './Tab.scss';
var Tab = function (_a) {
    var name = _a.name, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.variant, variant = _c === void 0 ? 'dark' : _c, onTabChange = _a.onTabChange, selected = _a.selected, otherProps = __rest(_a, ["name", "className", "variant", "onTabChange", "selected"]);
    var defineClasses = function (variant, selected) {
        var classList = 'tab px-8 py-4 uppercase tracking-larger relative z-0 cursor-pointer font-bold';
        var tabVariant = "" + (variant === 'dark'
            ? 'tab-dark bg-medium-dark-gray-550 hover:text-blue-300 text-white'
            : 'tab-light text-medium-dark-gray hover:text-blue');
        var selectedTabClass;
        if (selected) {
            selectedTabClass = 'active';
        }
        return [classList, tabVariant, selectedTabClass].join(' ');
    };
    return (_jsx("div", __assign({ className: defineClasses(variant, selected) + " " + className, onClick: function () { return onTabChange(); } }, otherProps, { children: name }), void 0));
};
export default Tab;
//# sourceMappingURL=Tab.js.map