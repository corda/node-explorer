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
import { useState, Children, isValidElement, cloneElement, useEffect, } from 'react';
var previewConfig = {
    name: 'Tabs',
    defaultState: {
        variant: 'light',
        selected: 0,
        componentProps: {
            variant: 'light',
            selected: 0,
            onChange: function (value) {
                if (this && this.state) {
                    this.changeRadioHandler('selected', value);
                }
            },
        },
    },
    variant: {
        type: 'radio',
        values: ['dark', 'light'],
    },
    selected: {
        type: 'radio',
        values: [0, 1, 2, 3],
    },
};
var Tabs = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'dark' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, children = _a.children, selected = _a.selected, inHeader = _a.inHeader, onChange = _a.onChange, otherProps = __rest(_a, ["variant", "className", "children", "selected", "inHeader", "onChange"]);
    var _d = useState(selected || 0), selectedTabIndex = _d[0], setSelectedTabIndex = _d[1];
    useEffect(function () {
        setSelectedTabIndex(selected || 0);
    }, [selected]);
    var setSelectedTabHandler = function (index) {
        setSelectedTabIndex(index);
        if (onChange) {
            onChange(index);
        }
    };
    var tabsList = Children.map(children, function (child, i) {
        if (isValidElement(child)) {
            return cloneElement(child, __assign(__assign({}, child.props), { onTabChange: function () {
                    setSelectedTabHandler(i);
                }, selected: inHeader ? false : selectedTabIndex === i, variant: variant }));
        }
        return child;
    });
    var tabContent = Children.map(children, function (child, i) {
        if (isValidElement(child)) {
            if (selectedTabIndex === i) {
                return child.props.children;
            }
        }
    });
    return (_jsxs("div", __assign({ className: "flex flex-col " + className }, otherProps, { children: [_jsx("div", __assign({ className: "inline-flex flex-wrap " + (inHeader
                    ? "pl-16 " + (variant === 'dark' ? 'bg-medium-dark-gray-550' : 'bg-light-gray')
                    : '') }, { children: tabsList }), void 0), tabContent.length ? _jsx("div", __assign({ className: "mt-2 mb-2" }, { children: tabContent }), void 0) : null] }), void 0));
};
export default Tabs;
export { previewConfig };
//# sourceMappingURL=Tabs.js.map