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
import { useEffect, useState } from 'react';
import Flatpickr from 'react-flatpickr';
import { v4 as uniqId } from 'uuid';
import 'flatpickr/dist/themes/light.css';
import DateTimeInputEl from '../DateTimeInputEl/DateTimeInputEl';
import HelpText from '../../HelpText/HelpText';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import { IconCustom } from '../../../../exports';
import '../DateTime.scss';
var previewConfig = {
    name: 'Date/Time Input',
    form: true,
    defaultState: {
        background: 'light',
        disabled: false,
        invalid: false,
        required: false,
        helpText: false,
        errorMessage: false,
        minDate: false,
        maxDate: false,
        time24hr: true,
        componentProps: {
            label: 'lorem ipsum',
            value: null,
            onChange: function (event) {
                var newComponentProps = __assign({}, this.state.componentProps);
                newComponentProps.value = event;
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
                name: 'invalid',
                properties: {
                    invalid: true,
                },
            },
            {
                name: 'required',
                properties: {
                    required: true,
                },
            },
            {
                name: 'helpText',
                properties: {
                    helpText: 'lorem ipsum dolor sit amet',
                },
            },
            {
                name: 'errorMessage',
                properties: {
                    invalid: true,
                    errorMessage: 'lorem ipsum dolor sit amet - error',
                },
            },
            {
                name: 'minDate',
                properties: {
                    minDate: new Date(),
                },
            },
            {
                name: 'maxDate',
                properties: {
                    maxDate: new Date(2020, 11, 31),
                },
            },
            {
                name: 'time24hr',
                properties: {
                    time24hr: true,
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
var DateTimeInput = function (_a) {
    var label = _a.label, value = _a.value, _b = _a.className, className = _b === void 0 ? '' : _b, dark = _a.dark, disabled = _a.disabled, errorMessage = _a.errorMessage, helpText = _a.helpText, id = _a.id, invalid = _a.invalid, maxDate = _a.maxDate, minDate = _a.minDate, required = _a.required, time24hr = _a.time24hr, onChange = _a.onChange, onOpen = _a.onOpen, onClose = _a.onClose, otherProps = __rest(_a, ["label", "value", "className", "dark", "disabled", "errorMessage", "helpText", "id", "invalid", "maxDate", "minDate", "required", "time24hr", "onChange", "onOpen", "onClose"]);
    var dateTimeId = useState(id ? id : uniqId())[0];
    var _c = useState(false), modified = _c[0], setModified = _c[1];
    var isInvalid = !disabled && modified && (invalid || (required && !value));
    useEffect(function () {
        invalid && value === null ? setModified(true) : setModified(false);
    }, [invalid]);
    var disabledTimeInput = function (value, config) {
        if (value.length > 0) {
            config.calendarContainer.classList.remove('timeInputDisabled');
        }
        else {
            config.calendarContainer.classList.add('timeInputDisabled');
        }
    };
    var onReady = function (value, textValue, config) {
        if (config.altInput) {
            config.altInput.setAttribute('value', '');
        }
    };
    var handleOpen = function (value, textValue, config) {
        if (onOpen) {
            onOpen();
        }
        config.calendarContainer.classList.add('showTimeInput');
        disabledTimeInput(value, config);
    };
    var changeHandler = function (value, textValue, config) {
        disabledTimeInput(value, config);
        onChange(value);
    };
    var handleClose = function (value, textValue, config) {
        if (onClose) {
            onClose();
        }
        setModified(true);
    };
    return (_jsxs("div", __assign({ className: "input relative " + className }, { children: [_jsxs("label", __assign({ htmlFor: dateTimeId }, { children: [_jsx(IconCustom, { icon: "CalendarClock", className: "input-icon absolute top-3 right-4 h-5-1/2 pointer-events-none " + (disabled ? 'text-medium-light-gray-300' : 'text-blue') }, void 0), _jsx(Flatpickr, { value: value ? value.toString() : '', options: {
                            altFormat: 'd-m-y h:i',
                            altInput: true,
                            closeOnSelect: false,
                            dateFormat: 'D M d Y H:i',
                            defaultDate: value,
                            enableTime: true,
                            nextArrow: '<span></span>',
                            maxDate: maxDate && maxDate.toString(),
                            minDate: minDate && minDate.toString(),
                            time_24hr: time24hr === false ? false : true,
                            monthSelectorType: 'static',
                            prevArrow: '<span></span>',
                            onChange: changeHandler,
                            onClose: handleClose,
                            onReady: onReady,
                            onOpen: handleOpen,
                        }, render: function (_a, ref) {
                            var defaultValue = _a.defaultValue, props = __rest(_a, ["defaultValue"]);
                            props.value = value ? value.toString() : '';
                            return (_jsx(DateTimeInputEl, __assign({ defaultValue: props.value, inputRef: ref, dark: dark, disabled: disabled, required: required, id: dateTimeId, type: "datetime", invalid: isInvalid, modified: modified }, otherProps), void 0));
                        } }, void 0), _jsx("span", __assign({ className: "input-label absolute text-left top-sm left-6 bg-transparent text-sm uppercase tracking-small font-bold w-2/3 overflow-hidden whitespace-no-wrap pointer-events-none " + (disabled
                            ? 'text-medium-light-gray-300 cursor-not-allowed'
                            : value === null
                                ? 'text-dark-gray-300'
                                : 'text-medium-light-gray') }, { children: _jsx("span", __assign({ className: "px-1 " + (dark ? 'bg-light-gray' : 'bg-white') }, { children: label }), void 0) }), void 0)] }), void 0), isInvalid && errorMessage ? (_jsx(ErrorMessage, { errorMessage: errorMessage }, void 0)) : (helpText && _jsx(HelpText, { helpText: helpText }, void 0))] }), void 0));
};
export default DateTimeInput;
export { previewConfig };
//# sourceMappingURL=DateTimeInput.js.map