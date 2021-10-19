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
import { v4 as uniqId } from 'uuid';
import './FileUpload.scss';
import HelpText from '../HelpText/HelpText';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { IconCustom } from '../../../exports';
var previewConfig = {
    name: 'File Upload',
    form: true,
    defaultState: {
        background: 'light',
        disabled: false,
        invalid: false,
        required: false,
        helpText: false,
        errorMessage: false,
        fileProgress: false,
        componentProps: {
            label: 'lorem ipsum',
            filename: '',
            onChange: function (event) {
                var newComponentProps = __assign({}, this.state.componentProps);
                newComponentProps.filename = event.target.value;
                newComponentProps.fileProgress = 100;
                this.setState({ componentProps: newComponentProps });
            },
            onDelete: function () {
                var newComponentProps = __assign({}, this.state.componentProps);
                newComponentProps.filename = '';
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
                name: 'fileProgress',
                properties: {
                    fileProgress: 50,
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
var FileUpload = function (_a) {
    var label = _a.label, filename = _a.filename, _b = _a.className, className = _b === void 0 ? '' : _b, dark = _a.dark, disabled = _a.disabled, errorMessage = _a.errorMessage, fileProgress = _a.fileProgress, helpText = _a.helpText, id = _a.id, invalid = _a.invalid, required = _a.required, onChange = _a.onChange, onDelete = _a.onDelete, otherProps = __rest(_a, ["label", "filename", "className", "dark", "disabled", "errorMessage", "fileProgress", "helpText", "id", "invalid", "required", "onChange", "onDelete"]);
    var fileId = useState(id ? id : uniqId())[0];
    var _c = useState(false), modified = _c[0], setModified = _c[1];
    useEffect(function () {
        invalid && filename === '' ? setModified(true) : setModified(false);
    }, [invalid]);
    var onDeleteHandler = function (event) {
        event.preventDefault();
        onDelete('');
    };
    var onClick = function (event) {
        event.target.value = null;
    };
    var fileName = filename.replace(/C:\\fakepath\\/i, '');
    var invalidFileInput = !disabled && ((modified && invalid) || (modified && required && !fileName));
    return (_jsxs("div", __assign({ className: "input relative h-12 w-full rounded-full py-3 px-6 outline-none border-2 text-base\n    " + (fileProgress && fileProgress < 100
            ? 'fileupload-inprogress'
            : fileProgress > 99 && filename
                ? 'border-solid border-medium-light-gray'
                : invalidFileInput
                    ? 'border-red'
                    : 'border-dashed border-medium-light-gray-300') + "\n    " + (invalidFileInput ? 'border-red' : '') + " " + className }, { children: [_jsx("svg", __assign({ className: "fileupload-progress" }, { children: _jsx("rect", { strokeDashoffset: 1000 - (fileProgress || 0) * 7, rx: "7%" }, void 0) }), void 0), _jsxs("label", __assign({ htmlFor: fileId }, { children: [fileProgress && fileProgress < 100 ? (_jsxs("span", __assign({ className: "input-icon absolute top-2 right-4 text-blue z-10" }, { children: [fileProgress, "%"] }), void 0)) : fileProgress > 99 && filename ? (_jsx(IconCustom, { icon: "CloseCircleOutline", className: "input-icon absolute top-2 right-4 h-6 text-red z-10", onClick: onDeleteHandler }, void 0)) : (''), _jsx("input", __assign({ disabled: disabled, id: fileId, onBlur: function () { return !modified && setModified(true); }, onChange: onChange, onClick: onClick, className: "overflow-hidden absolute opacity-0", type: "file", required: required }, otherProps), void 0), _jsxs("span", __assign({ className: "input-label file-input-label absolute top-3 left-5 w-4/5 overflow-hidden whitespace-no-wrap text-sm uppercase tracking-small font-bold " + (disabled
                            ? 'text-medium-light-gray-300 cursor-not-allowed'
                            : invalidFileInput
                                ? 'text-red'
                                : 'text-dark-gray-300') + " " + (dark ? 'bg-light-gray' : 'bg-white') }, { children: [_jsx(IconCustom, { icon: filename ? 'FileOutline' : 'Upload', className: "h-5 inline-block mr-1" }, void 0), fileName || label] }), void 0)] }), void 0), invalid && modified && errorMessage ? (_jsx("div", __assign({ className: "fileupload-help" }, { children: _jsx(ErrorMessage, { errorMessage: errorMessage }, void 0) }), void 0)) : (helpText && (_jsx("div", __assign({ className: "fileupload-help" }, { children: _jsx(HelpText, { helpText: helpText }, void 0) }), void 0)))] }), void 0));
};
export default FileUpload;
export { previewConfig };
//# sourceMappingURL=FileUpload.js.map