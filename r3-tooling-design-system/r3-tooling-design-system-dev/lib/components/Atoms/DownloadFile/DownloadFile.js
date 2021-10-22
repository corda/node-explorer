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
import { IconCustom } from '../../../exports';
var previewConfig = {
    name: 'Download File',
    defaultState: {
        fileName: false,
        fileSize: false,
        icon: false,
        fileType: false,
        componentProps: {
            displayName: 'lorem ipsum',
            filePath: '/',
            fileType: false,
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'fileName',
                properties: {
                    fileName: 'dolor sit amet',
                },
            },
            {
                name: 'fileSize',
                properties: {
                    fileSize: '50MB',
                },
            },
            {
                name: 'icon',
                properties: {
                    icon: 'StarOutline',
                },
            },
        ],
    },
    fileType: {
        type: 'radio',
        values: [
            'certificate',
            'code',
            'excel',
            'image',
            'pdf',
            'presentation',
            'spreadsheet',
            'text',
            'video',
            'word',
        ],
    },
};
var DownloadFile = function (_a) {
    var displayName = _a.displayName, filePath = _a.filePath, _b = _a.className, className = _b === void 0 ? '' : _b, fileName = _a.fileName, fileType = _a.fileType, fileSize = _a.fileSize, icon = _a.icon, otherProps = __rest(_a, ["displayName", "filePath", "className", "fileName", "fileType", "fileSize", "icon"]);
    var fileTypeIcon = {
        certificate: 'FileCertificateOutline',
        code: 'FileCodeOutline',
        excel: 'FileExcelOutline',
        image: 'FileImageOutline',
        pdf: 'FilePdfOutline',
        presentation: 'FilePowerpointOutline',
        spreadsheet: 'FileTableOutline',
        text: 'FileDocumentOutline',
        video: 'FileVideoOutline',
        word: 'FileWordOutline',
    };
    var iconDisplay = icon || fileTypeIcon[fileType] || 'Download';
    return (_jsxs("div", __assign({ className: "download-file relative w-full flex items-center justify-start h-16 bg-light-gray shadow-0-3-6-bluegray rounded-md border-box " + className }, otherProps, { children: [_jsx("span", __assign({ className: "download-file-size absolute top-6 right-6 text-sm uppercase text-medium-dark-gray leading-none" }, { children: fileSize || '' }), void 0), _jsx("p", __assign({ className: "download-file-name pl-6 w-11/12 uppercase text-blue tracking-large overflow-hidden whitespace-no-wrap" }, { children: _jsxs("a", __assign({ href: filePath, download: fileName || '', className: "leading-loose font-title text-xs" }, { children: [_jsx(IconCustom, { icon: iconDisplay, className: "h-6 inline" }, void 0), _jsx("span", __assign({ className: "pl-2" }, { children: displayName }), void 0)] }), void 0) }), void 0)] }), void 0));
};
export default DownloadFile;
export { previewConfig };
//# sourceMappingURL=DownloadFile.js.map