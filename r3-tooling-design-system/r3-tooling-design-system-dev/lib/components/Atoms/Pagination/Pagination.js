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
import IconCustom from '../IconCustom/IconCustom';
import NumberInput from '../NumberInput/NumberInput';
var previewConfig = {
    name: 'pagination',
    defaultState: {
        pages: 3,
        currentPage: 1,
        withInput: false,
        componentProps: {
            pages: 3,
            currentPage: 1,
            withInput: false,
            toPage: function (event) {
                var newComponentProps = __assign({}, this.state.componentProps);
                newComponentProps.currentPage = event;
                this.setState({ componentProps: newComponentProps });
            },
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'withInput',
                properties: {
                    withInput: true,
                },
            },
        ],
    },
    pages: {
        type: 'radio',
        values: [3, 5, 8],
    },
};
var Pagination = function (_a) {
    var pages = _a.pages, currentPage = _a.currentPage, _b = _a.className, className = _b === void 0 ? '' : _b, withInput = _a.withInput, toPage = _a.toPage, otherProps = __rest(_a, ["pages", "currentPage", "className", "withInput", "toPage"]);
    var _c = useState([]), pageEls = _c[0], setPageEls = _c[1];
    useEffect(function () {
        var copyPageEls = [];
        var pushPageEl = function (i, show) {
            copyPageEls.push(show
                ? {
                    page: i,
                    currentClass: i === currentPage && 'bg-blue text-white',
                }
                : {
                    page: i,
                    hidden: true,
                });
        };
        for (var i = 1; i <= pages; i++) {
            if (pages <= 5) {
                pushPageEl(i, true);
            }
            else if (currentPage <= 3) {
                if (i < 5 || i === pages) {
                    pushPageEl(i, true);
                }
                else {
                    pushPageEl(i, false);
                }
            }
            else if (currentPage > pages - 3) {
                if (i === 1 || i > pages - 4) {
                    pushPageEl(i, true);
                }
                else {
                    pushPageEl(i, false);
                }
            }
            else {
                if (i === 1 ||
                    i === currentPage - 1 ||
                    i === currentPage ||
                    i === currentPage + 1 ||
                    i === pages) {
                    pushPageEl(i, true);
                }
                else {
                    pushPageEl(i, false);
                }
            }
        }
        setPageEls(copyPageEls);
    }, [pages, currentPage]);
    return pages > 0 ? (_jsxs("div", __assign({ className: "flex " + className }, otherProps, { children: [_jsxs("div", __assign({ className: "flex" }, { children: [_jsx(IconCustom, { icon: "ChevronLeft", className: "inline h-8 text-blue mt-2 cursor-pointer", onClick: function () { return (currentPage > 1 ? toPage(currentPage - 1) : null); } }, void 0), pageEls.map(function (pageEl, i) {
                        return pageEl.hidden ? (!pageEls[i - 1].hidden ? (_jsx("span", __assign({ className: "mt-3 text-medium-light-gray" }, { children: "..." }), pageEl.page)) : null) : (_jsx("div", __assign({ tabIndex: 0, className: (pageEl.currentClass || 'text-medium-light-gray hover:text-blue') + " inline font-bold px-4 py-2 leading-normal rounded-full text-xl cursor-pointer focus:shadow-0-0-12-blue focus:outline-none", onClick: function () { return toPage(pageEl.page); } }, { children: pageEl.page }), pageEl.page));
                    }), _jsx(IconCustom, { icon: "ChevronRight", className: "inline h-8 text-blue mt-2 cursor-pointer", onClick: function () {
                            return currentPage < pages ? toPage(currentPage + 1) : null;
                        } }, void 0)] }), void 0), withInput && (_jsx(NumberInput, { className: "mt-2 ml-6", value: currentPage.toString(), onChange: function (event) {
                    return toPage(parseInt(event.target.value) || currentPage);
                }, min: "1", max: pages.toString() }, void 0))] }), void 0)) : null;
};
export default Pagination;
export { previewConfig };
//# sourceMappingURL=Pagination.js.map