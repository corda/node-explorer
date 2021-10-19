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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CodeSnippet from './CodeSnippet';
Object.assign(navigator, {
    clipboard: {
        writeText: function () { },
    },
});
describe('<CodeSnippet /> component', function () {
    jest.spyOn(navigator.clipboard, 'writeText');
    test('to be in the DOM tree', function () {
        var container = render(_jsx(CodeSnippet, { children: "@import \u201C@carbon/themes/scss/themes\u201D;" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "link" and "withSandbox" properties to work correctly', function () {
        var link = 'http://google.com';
        var container = render(_jsx(CodeSnippet, __assign({ withSandbox: true, link: link }, { children: "@import \u201C@carbon/themes/scss/themes\u201D;" }), void 0)).container;
        var linkElement = container.firstElementChild.firstElementChild.firstElementChild
            .firstElementChild;
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.getAttribute('href')).toEqual(link);
    });
    test('with "link" and without "withSandbox" properties to work correctly', function () {
        render(_jsx(CodeSnippet, __assign({ link: "http://google.com" }, { children: "@import \u201C@carbon/themes/scss/themes\u201D;" }), void 0));
        var linkElement = screen.queryByText('Codesandbox');
        expect(linkElement).toBeNull();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(CodeSnippet, __assign({ className: "test-class", link: "http://google.com" }, { children: "@import \u201C@carbon/themes/scss/themes\u201D;" }), void 0)).container;
        expect(container).toBeInTheDocument();
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with `flush=top` property to work correctly', function () {
        var container = render(_jsx(CodeSnippet, __assign({ flush: "top", link: "http://google.com" }, { children: "@import \u201C@carbon/themes/scss/themes\u201D;" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('rounded-t-none');
    });
    test('with `flush=right` property to work correctly', function () {
        var container = render(_jsx(CodeSnippet, __assign({ flush: "right", link: "http://google.com" }, { children: "@import \u201C@carbon/themes/scss/themes\u201D;" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('rounded-r-none');
    });
    test('with `flush=left` property to work correctly', function () {
        var container = render(_jsx(CodeSnippet, __assign({ flush: "left", link: "http://google.com" }, { children: "@import \u201C@carbon/themes/scss/themes\u201D;" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('rounded-l-none');
    });
    test('with `flush="bottom"` property to work correctly', function () {
        var container = render(_jsx(CodeSnippet, __assign({ flush: "bottom", link: "http://google.com" }, { children: "@import \u201C@carbon/themes/scss/themes\u201D;" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('rounded-b-none');
    });
    test('with "children" property to work correctly', function () {
        var container = render(_jsxs(CodeSnippet, __assign({ link: "http://google.com" }, { children: [_jsx("p", __assign({ className: "test-child" }, { children: "test-child" }), void 0), "@import \u201C@carbon/themes/scss/themes\u201D;", _jsx("p", __assign({ className: "test-child2" }, { children: "test-child2" }), void 0)] }), void 0)).container;
        expect(screen.getByText('test-child')).toBeInTheDocument();
        expect(container.getElementsByClassName('codebox-text')[0].children).toHaveLength(2);
    });
    test('copy to clipboard to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, copyToClipBoardElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = render(_jsx(CodeSnippet, __assign({ withSandbox: true, link: "http://google.com" }, { children: "@import \u201C@carbon/themes/scss/themes\u201D;" }), void 0)).container;
                    copyToClipBoardElement = container.firstElementChild.firstElementChild.querySelector('.codesnippet-copy-icon');
                    act(function () {
                        fireEvent.click(copyToClipBoardElement);
                    });
                    expect(navigator.clipboard.writeText).toHaveBeenCalled();
                    return [4, waitFor(function () {
                            expect(navigator.clipboard.writeText).toHaveBeenCalled();
                        })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=CodeSnippet.test.js.map