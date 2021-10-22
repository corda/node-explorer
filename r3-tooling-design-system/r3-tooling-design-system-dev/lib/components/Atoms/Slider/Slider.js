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
import { useState } from 'react';
import { v4 as uniqId } from 'uuid';
import './Slider.css';
var previewConfig = {
    name: 'Slider',
    form: true,
    defaultState: {
        background: 'light',
        disabled: false,
        required: false,
        max: false,
        min: false,
        componentProps: {
            label: 'lorem ipsum',
            value: '50',
            onChange: function (event) {
                var newComponentProps = __assign({}, this.state.componentProps);
                newComponentProps.value = event.target.value;
                this.setState({ componentProps: newComponentProps });
            },
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'disabled',
                properties: {
                    disabled: true,
                },
            },
            {
                name: 'required',
                properties: {
                    required: true,
                },
            },
            {
                name: 'min',
                properties: {
                    min: 10,
                },
            },
            {
                name: 'max',
                properties: {
                    max: 1000,
                },
            },
        ],
    },
    background: {
        type: 'select',
        options: [
            {
                name: 'light',
                properties: {
                    dark: false,
                },
            },
            {
                name: 'dark',
                properties: {
                    dark: true,
                },
            },
        ],
    },
};
var Slider = function (_a) {
    var value = _a.value, _b = _a.className, className = _b === void 0 ? '' : _b, dark = _a.dark, disabled = _a.disabled, id = _a.id, max = _a.max, min = _a.min, onChange = _a.onChange, otherProps = __rest(_a, ["value", "className", "dark", "disabled", "id", "max", "min", "onChange"]);
    var sliderId = useState(id || uniqId())[0];
    var _c = useState(false), onFocus = _c[0], setOnFocus = _c[1];
    var percent = Math.ceil(((parseInt(value) - (parseInt(min) || 0)) /
        ((parseInt(max) || 100) - (parseInt(min) || 0))) *
        100);
    var valueOutOfMinMax = function (value) {
        var isValueLowerThanMin = parseFloat(value) < parseFloat(min);
        var isValueHigherThanMax = parseFloat(value) > parseFloat(max);
        if (min && !max) {
            return isValueLowerThanMin ? min : value;
        }
        else if (!min && max) {
            return isValueHigherThanMax ? max : value;
        }
        else if (min && max) {
            return isValueLowerThanMin ? min : isValueHigherThanMax ? max : value;
        }
        else {
            return value;
        }
    };
    return (_jsxs("div", __assign({ className: "input relative w-full " + className }, { children: [_jsx("input", { className: "slider-number block w-8 border-2 outline-none m-auto mb-4 text-center font-bold " + (disabled ? 'text-dark-gray-200 cursor-not-allowed' : 'text-blue') + " " + (onFocus ? 'focused' : '') + " " + (dark ? 'bg-light-gray' : 'bg-white'), type: "number", value: isNaN(parseFloat(value)) ? '0' : valueOutOfMinMax(value), min: min || '0', max: max || '100', onChange: onChange, onFocus: function () { return setOnFocus(true); }, onBlur: function () { return setOnFocus(false); } }, void 0), _jsx("input", __assign({ style: disabled
                    ? {
                        backgroundImage: "linear-gradient(to right, #a5a7b4 0%, #a5a7b4 " + percent + "%, #d2d3d9 " + percent + "%",
                    }
                    : {
                        backgroundImage: "linear-gradient(to right, #5e39e9 0%, #5e39e9 " + percent + "%, #d2d3d9 " + percent + "%",
                    }, className: "slider appearance-none w-full h-4  rounded-full outline-none " + (disabled ? 'cursor-not-allowed' : '') + " " + (onFocus ? 'focused' : ''), type: "range", disabled: disabled, min: min || 0, max: max || 100, value: isNaN(parseFloat(value)) ? '0' : valueOutOfMinMax(value), onChange: onChange, onFocus: function () { return setOnFocus(true); }, onBlur: function () { return setOnFocus(false); }, id: sliderId }, otherProps), void 0), _jsxs("div", __assign({ className: "values flex w-full justify-between text-dark-gray text-xs font-bold" }, { children: [_jsx("span", { children: min || '0' }, void 0), _jsx("span", { children: max || '100' }, void 0)] }), void 0)] }), void 0));
};
export default Slider;
export { previewConfig };
//# sourceMappingURL=Slider.js.map