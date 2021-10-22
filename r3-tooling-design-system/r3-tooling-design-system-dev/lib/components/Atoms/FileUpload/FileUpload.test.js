var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx } from "react/jsx-runtime";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FileUpload from './FileUpload';
import { useState } from 'react';
describe('<FileUpload /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(FileUpload, { label: "file input", filename: '', onChange: function () { }, onDelete: function () { } }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "label" property and empty "filename" property to work correctly', function () {
        var labelText = 'file-label';
        render(_jsx(FileUpload, { label: labelText, filename: "", onChange: function () { }, onDelete: function () { } }, void 0));
        var labelElement = screen.getByText(labelText);
        expect(labelElement).toBeInTheDocument();
    });
    test('with empty "label" property and "filename" property to work correctly', function () {
        render(_jsx(FileUpload, { label: "", filename: "file-name", onChange: function () { }, onDelete: function () { } }, void 0));
        var labelElement = screen.getByText('file-name');
        expect(labelElement).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(FileUpload, { label: "", filename: "file-name", className: "test-class", onChange: function () { }, onDelete: function () { } }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "dark" property to work correctly', function () {
        render(_jsx(FileUpload, { label: "", filename: "file-name", dark: true, onChange: function () { }, onDelete: function () { } }, void 0));
        var darkedElement = screen.getByText('file-name');
        expect(darkedElement).toHaveClass('bg-light-gray');
    });
    test('without "dark" property to work correctly', function () {
        render(_jsx(FileUpload, { label: "", filename: "file-name", onChange: function () { }, onDelete: function () { } }, void 0));
        var darkedElement = screen.getByText('file-name');
        expect(darkedElement).toHaveClass('bg-white');
    });
    test('with "disabled" property to work correctly', function () {
        render(_jsx(FileUpload, { label: "", filename: "file-name", disabled: true, onChange: function () { }, onDelete: function () { } }, void 0));
        var inputElement = document.querySelector('input[type=file]');
        expect(inputElement).toBeDisabled();
    });
    test('with "disabled" property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fileInputElement, errorMessageElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    render(_jsx(FileUpload, { label: "label-text", filename: "filename-text", invalid: true, errorMessage: "error-text", onChange: function () { }, onDelete: function () { } }, void 0));
                    fileInputElement = document.querySelector('input[type=file]');
                    return [4, fireEvent.focus(fileInputElement)];
                case 1:
                    _a.sent();
                    return [4, fireEvent.blur(fileInputElement)];
                case 2:
                    _a.sent();
                    errorMessageElement = screen.getByText('error-text');
                    expect(errorMessageElement).toBeInTheDocument();
                    return [2];
            }
        });
    }); });
    test('with "helpText" property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var helpText, helpMessageElement;
        return __generator(this, function (_a) {
            helpText = 'help-text';
            render(_jsx(FileUpload, { label: "label-text", filename: "filename-text", helpText: helpText, onChange: function () { }, onDelete: function () { } }, void 0));
            helpMessageElement = screen.getByText(helpText);
            expect(helpMessageElement).toBeInTheDocument();
            return [2];
        });
    }); });
    test('with "id" property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, fileInputElement;
        return __generator(this, function (_a) {
            id = 'abc123';
            render(_jsx(FileUpload, { label: "label-text", filename: "filename-text", id: id, onChange: function () { }, onDelete: function () { } }, void 0));
            fileInputElement = document.querySelector('input[type=file]');
            expect(fileInputElement.getAttribute('id')).toEqual(id);
            return [2];
        });
    }); });
    test('with "fileProgress" property between 1-99 to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fileProgressNumber, container, progressElement;
        return __generator(this, function (_a) {
            fileProgressNumber = 34;
            container = render(_jsx(FileUpload, { label: "label-text", filename: "filename-text", fileProgress: fileProgressNumber, onChange: function () { }, onDelete: function () { } }, void 0)).container;
            expect(container.firstElementChild).toHaveClass('fileupload-inprogress');
            progressElement = screen.getByText(fileProgressNumber + "%");
            expect(progressElement).toBeInTheDocument();
            return [2];
        });
    }); });
    test('with "fileProgress" property bigger than 99  to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fileProgressNumber, container, progressElement;
        return __generator(this, function (_a) {
            fileProgressNumber = 120;
            container = render(_jsx(FileUpload, { label: "label-text", filename: "filename-text", fileProgress: fileProgressNumber, onChange: function () { }, onDelete: function () { } }, void 0)).container;
            expect(container.firstElementChild).toHaveClass('border-solid border-medium-light-gray');
            progressElement = container.querySelector('.input-icon');
            expect(progressElement).toBeInTheDocument();
            expect(screen.queryByText(fileProgressNumber + "%")).toBeNull();
            return [2];
        });
    }); });
    test('that is "invalid", "modified", "required" and not "disabled" to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, fileInputElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = render(_jsx(FileUpload, { label: "label-text", filename: "filename-text", invalid: true, onChange: function () { }, onDelete: function () { } }, void 0)).container;
                    fileInputElement = document.querySelector('input[type=file]');
                    return [4, fireEvent.focus(fileInputElement)];
                case 1:
                    _a.sent();
                    return [4, fireEvent.blur(fileInputElement)];
                case 2:
                    _a.sent();
                    expect(container.firstElementChild).toHaveClass('border-red');
                    return [2];
            }
        });
    }); });
    test('that is "required" and "modified" without "filename" to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, fileInputElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = render(_jsx(FileUpload, { label: "label-text", required: true, filename: "", onChange: function () { }, onDelete: function () { } }, void 0)).container;
                    fileInputElement = document.querySelector('input[type=file]');
                    return [4, fireEvent.focus(fileInputElement)];
                case 1:
                    _a.sent();
                    return [4, fireEvent.blur(fileInputElement)];
                case 2:
                    _a.sent();
                    expect(container.firstElementChild).toHaveClass('border-red');
                    return [2];
            }
        });
    }); });
    test('that is "required" and "modified" with "filename" property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fileInputElement, darkedElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    render(_jsx(FileUpload, { label: "label-text", required: true, filename: "file-name", invalid: true, onChange: function () { }, onDelete: function () { } }, void 0));
                    fileInputElement = document.querySelector('input[type=file]');
                    return [4, fireEvent.focus(fileInputElement)];
                case 1:
                    _a.sent();
                    return [4, fireEvent.blur(fileInputElement)];
                case 2:
                    _a.sent();
                    darkedElement = screen.getByText('file-name');
                    expect(darkedElement).toHaveClass('text-red');
                    return [2];
            }
        });
    }); });
    test('onDelete" method property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, fileNameElement, fileDeleteElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState('file-name'), fileName = _a[0], setFileName = _a[1];
                        return (_jsx(FileUpload, { label: "", required: true, filename: fileName, fileProgress: 100, onChange: function () { }, onDelete: function () { return setFileName(''); } }, void 0));
                    };
                    container = render(_jsx(ParentContainer, {}, void 0)).container;
                    fileNameElement = screen.getByText('file-name');
                    expect(fileNameElement).toBeInTheDocument();
                    fileDeleteElement = container.querySelector('.input-icon');
                    return [4, fireEvent.click(fileDeleteElement)];
                case 1:
                    _a.sent();
                    expect(screen.queryByText('file-name')).toBeNull();
                    expect(screen.queryByText('file-name')).not.toBeInTheDocument();
                    return [2];
            }
        });
    }); });
    test('"onChange" method property to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, fileNameElement, fileInputElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState('file-name'), fileName = _a[0], setFileName = _a[1];
                        return (_jsx(FileUpload, { label: "", required: true, filename: fileName, fileProgress: 100, onChange: function () { return setFileName('new-file-name'); }, onDelete: function () { } }, void 0));
                    };
                    render(_jsx(ParentContainer, {}, void 0));
                    fileNameElement = screen.getByText('file-name');
                    expect(fileNameElement).toBeInTheDocument();
                    fileInputElement = document.querySelector('input[type=file]');
                    return [4, fireEvent.change(fileInputElement, { target: { value: '' } })];
                case 1:
                    _a.sent();
                    expect(screen.queryByText('file-name')).toBeNull();
                    expect(screen.queryByText('new-file-name')).toBeInTheDocument();
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=FileUpload.test.js.map