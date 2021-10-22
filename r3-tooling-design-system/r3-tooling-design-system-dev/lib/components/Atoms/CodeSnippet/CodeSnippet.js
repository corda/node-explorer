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
import { useRef, useState, useEffect } from 'react';
import { IconCustom, Tooltip, Divider } from '../../../exports';
import './CodeSnippet.scss';
var previewConfig = {
    name: 'Code Snippet',
    defaultState: {
        flush: false,
        withSandbox: false,
        componentProps: {},
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'withSandbox',
                properties: {
                    withSandbox: true,
                    link: '/CodeSnippet',
                },
            },
            {
                name: 'flush',
                properties: {
                    flush: 'top',
                },
            },
        ],
    },
};
var CodeSnippet = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, flush = _a.flush, link = _a.link, withSandbox = _a.withSandbox, children = _a.children, otherProps = __rest(_a, ["className", "flush", "link", "withSandbox", "children"]);
    var codeRef = useRef(null);
    var _c = useState(''), codeToCopy = _c[0], setCodeToCopy = _c[1];
    var _d = useState(false), codeIsLong = _d[0], setCodeIsLong = _d[1];
    var _e = useState(false), showMore = _e[0], setShowMore = _e[1];
    var _f = useState(false), copied = _f[0], setCopied = _f[1];
    useEffect(function () {
        updateCode();
    });
    var updateCode = function () {
        setCodeToCopy(codeRef.current && codeRef.current.innerText ? codeRef.current.innerText : '');
        setCodeIsLong(codeRef.current ? codeRef.current.offsetHeight > 128 : false);
    };
    var copyToClipboard = function () {
        navigator.clipboard.writeText(codeToCopy.toString());
        showCopySuccess();
    };
    var showCopySuccess = function () {
        setCopied(true);
        setTimeout(function () { return setCopied(false); }, 3000);
    };
    return (_jsxs("div", __assign({ className: "codesnippet w-full bg-dark-gray text-white px-8 rounded-md \n    " + (flush === 'top'
            ? 'rounded-t-none'
            : flush === 'right'
                ? 'rounded-r-none'
                : flush === 'bottom'
                    ? 'rounded-b-none'
                    : flush === 'left'
                        ? 'rounded-l-none'
                        : '') + " " + className }, otherProps, { children: [_jsxs("div", __assign({ className: "relative w-full py-6 flex justify-between" }, { children: [_jsx("span", __assign({ className: "codesnippet-sandbox" }, { children: withSandbox && (_jsxs("a", __assign({ className: "text-xs text-white font-title font-bold uppercase", href: link, target: "_blank", rel: "noopener noreferrer" }, { children: ["Codesandbox", ' ', _jsx(IconCustom, { icon: "ArrowTopRight", className: "inline h-4 ml-2" }, void 0)] }), void 0)) }), void 0), _jsx("span", __assign({ className: "relative" }, { children: _jsx(IconCustom, { icon: "ContentCopy", className: "h-5 cursor-pointer text-right codesnippet-copy-icon", onClick: copyToClipboard }, void 0) }), void 0), _jsx(Tooltip, __assign({ show: copied, className: "codesnippet-tooltip" }, { children: _jsx("span", __assign({ className: "text-green" }, { children: "Copied to clipboard!" }), void 0) }), void 0)] }), void 0), _jsx(Divider, { dark: true }, void 0), _jsxs("div", __assign({ className: "py-6" }, { children: [_jsx("div", __assign({ className: "overflow-hidden " + (showMore ? '' : 'max-h-32') }, { children: _jsx("code", __assign({ className: "codebox-text h-screen min-h-screen font-mono whitespace-pre-wrap", ref: codeRef }, { children: children }), void 0) }), void 0), codeIsLong && (_jsxs("span", __assign({ className: "pt-6 block text-right text-sm uppercase cursor-pointer justify-center", onClick: function () { return setShowMore(!showMore); } }, { children: ["Show ", showMore ? 'less' : 'more', _jsx(IconCustom, { icon: showMore ? 'ChevronUp' : 'ChevronDown', className: "inline h-6" }, void 0)] }), void 0))] }), void 0)] }), void 0));
};
export default CodeSnippet;
export { previewConfig };
//# sourceMappingURL=CodeSnippet.js.map