var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Component, createContext } from 'react';
import { Button, IconCustom } from '../../../../exports';
import './Snackbar.scss';
var previewConfig = {
    name: 'Snackbar',
    defaultState: {
        variant: 'info',
        kind: 'toast',
        withIcon: false,
        button: false,
        componentProps: {
            variant: false,
            withIcon: false,
            button: null,
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'withIcon',
                properties: {
                    withIcon: true,
                },
            },
            {
                name: 'button',
                properties: {
                    button: "<Button noPaddingFocus size=\"small\" variant=\"label\">Undo</Button>",
                },
            },
        ],
    },
    variant: {
        type: 'radio',
        values: ['info', 'danger', 'warning', 'success'],
    },
};
export var snackbarIdContext = createContext('');
var Snackbar = (function (_super) {
    __extends(Snackbar, _super);
    function Snackbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.button = (_jsx(Button, __assign({ size: "small", variant: "label", noPaddingFocus: true }, { children: "Undo" }), void 0));
        _this.icon = _this.props.variant === 'danger'
            ? 'CloseCircleOutline'
            : _this.props.variant === 'warning'
                ? 'AlertOutline'
                : _this.props.variant === 'success'
                    ? 'CheckAll'
                    : 'InformationOutline';
        _this.iconColour = _this.props.variant === 'danger'
            ? 'text-red-400'
            : _this.props.variant === 'warning'
                ? 'text-yellow'
                : _this.props.variant === 'success'
                    ? 'text-green'
                    : 'text-blue';
        _this.id = _this.props.context && _this.props.context.currentId;
        _this.close = function () { return _this.props.context.dismiss(_this.id); };
        return _this;
    }
    Snackbar.prototype.render = function () {
        var _a = this.props, context = _a.context, closeToast = _a.closeToast, variant = _a.variant, _b = _a.className, className = _b === void 0 ? '' : _b, withIcon = _a.withIcon, button = _a.button, children = _a.children, otherProps = __rest(_a, ["context", "closeToast", "variant", "className", "withIcon", "button", "children"]);
        return (_jsx(snackbarIdContext.Provider, __assign({ value: this.id }, { children: _jsx("div", __assign({ className: "snackbar snackbar-" + (variant || 'info') + " relative w-148 rounded-md px-8 py-4 bg-light-gray shadow-0-3-6-dark-gray-1 leading-normal " + (className || '') }, otherProps, { children: _jsxs("div", __assign({ className: "flex justify-between align-center font-title font-bold uppercase text-base tracking-larger text-medium-dark-gray" }, { children: [_jsxs("div", __assign({ className: "flex text-dark-gray" }, { children: [withIcon && (_jsx(IconCustom, { icon: this.icon, className: "inline h-5 mr-2 " + this.iconColour }, void 0)), children] }), void 0), this.button] }), void 0) }), void 0) }), void 0));
    };
    return Snackbar;
}(Component));
export default Snackbar;
export { previewConfig };
//# sourceMappingURL=Snackbar.js.map