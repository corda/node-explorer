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
import { useState } from 'react';
import logo from '../assets/img/logo--r3.svg';
import { Button, Checkbox, Container, EmailInput, PasswordInput } from '../exports';
var LoginExample3 = function () {
    var _a = useState(''), passwordValue = _a[0], setPasswordValue = _a[1];
    var _b = useState(''), emailValue = _b[0], setEmailValue = _b[1];
    var _c = useState(true), checkboxOne = _c[0], setCheckboxOne = _c[1];
    return (_jsx(Container, __assign({ className: "bg-light-gray-600 flex items-center justify-end min-h-screen", fluid: true }, { children: _jsxs("div", __assign({ className: "bg-white p-16 mr-24 max-w-lg w-3/6" }, { children: [_jsx("div", __assign({ className: "mb-24" }, { children: _jsx("img", { src: logo, width: "80px", height: "30px", alt: "" }, void 0) }), void 0), _jsxs("div", __assign({ className: "flex flex-col" }, { children: [_jsx("h2", { children: "Log in" }, void 0), _jsx(EmailInput, { className: "mt-6", label: "email input", value: emailValue, required: true, errorMessage: "This field is required", onChange: function (event) { return setEmailValue(event.target.value); } }, void 0), _jsx(PasswordInput, { className: "mt-6", dark: true, label: "your password", value: passwordValue, onChange: function (event) { return setPasswordValue(event.target.value); } }, void 0), _jsx(Button, __assign({ variant: "primary", size: "large", className: "mt-6", style: { width: 'max-content' } }, { children: "sign in" }), void 0), _jsx(Checkbox, __assign({ className: "mt-6", value: "checkbox1", checked: checkboxOne, required: true, onChange: function () { return setCheckboxOne(!checkboxOne); } }, { children: "Remember me" }), void 0)] }), void 0)] }), void 0) }), void 0));
};
export default LoginExample3;
//# sourceMappingURL=LoginExample3.js.map