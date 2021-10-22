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
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pagination from './Pagination';
import { useState } from 'react';
describe('<Pagination /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Pagination, { pages: 81, currentPage: 1, toPage: function () { } }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with `pages={0}` property to work correctly ', function () {
        var container = render(_jsx(Pagination, { pages: 0, currentPage: 0, toPage: function () { } }, void 0)).container;
        expect(container).toBeEmptyDOMElement();
    });
    test('with `pages={5}` and `currentPage={1}` to work correctly ', function () {
        var container = render(_jsx(Pagination, { pages: 5, currentPage: 1, toPage: function () { } }, void 0)).container;
        var firstPagePaginationLinkElement = screen.getByText('1', {
            exact: true,
        });
        expect(firstPagePaginationLinkElement).toBeInTheDocument();
        var fifthPagePaginationLinkElement = screen.getByText('5', {
            exact: true,
        });
        expect(fifthPagePaginationLinkElement).toBeInTheDocument();
        var paginationItems = container.firstElementChild.firstElementChild.querySelectorAll('div');
        expect(paginationItems).toHaveLength(5);
    });
    test('with more than 5 "pages" and `currentPage={7}` to work correctly ', function () {
        render(_jsx(Pagination, { pages: 81, currentPage: 7, toPage: function () { } }, void 0));
        var firstPagePaginationLinkElement = screen.getByText('1', {
            exact: true,
        });
        expect(firstPagePaginationLinkElement).toBeInTheDocument();
        var sixthPagePaginationLinkElement = screen.getByText('6', {
            exact: true,
        });
        expect(sixthPagePaginationLinkElement).toBeInTheDocument();
        var eightPagePaginationLinkElement = screen.getByText('8', {
            exact: true,
        });
        expect(eightPagePaginationLinkElement).toBeInTheDocument();
        var prevToLastPagePaginationLinkElement = screen.queryByText('80');
        expect(prevToLastPagePaginationLinkElement).toBeNull();
        var lastPagePaginationLinkElement = screen.getByText('81', {
            exact: true,
        });
        expect(lastPagePaginationLinkElement).toBeInTheDocument();
    });
    test('with "withInput" property to work correctly ', function () {
        render(_jsx(Pagination, { withInput: true, pages: 5, currentPage: 2, toPage: function () { } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement).toBeInTheDocument();
        expect(numberInputElement.getAttribute('value')).toEqual('2');
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Pagination, { className: "test-class", pages: 5, currentPage: 2, toPage: function () { } }, void 0)).container;
        expect(container.firstChild).toHaveClass('test-class');
    });
    test('with empty "className" property to work correctly ', function () {
        var container = render(_jsx(Pagination, { className: "", pages: 5, currentPage: 2, toPage: function () { } }, void 0)).container;
        expect(container.firstChild).not.toHaveClass('test-class');
    });
    test('changing current page with another from the numbered items', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, selectedPaginationItem, prevToSelectedPaginationItem;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState(2), currentPage = _a[0], setCurrentPage = _a[1];
                        return (_jsx(Pagination, { withInput: true, pages: 5, currentPage: currentPage, toPage: function (event) {
                                setCurrentPage(event);
                            } }, void 0));
                    };
                    render(_jsx(ParentContainer, {}, void 0));
                    selectedPaginationItem = screen.getByText('2');
                    expect(selectedPaginationItem).toHaveClass('bg-blue text-white');
                    prevToSelectedPaginationItem = screen.getByText('1');
                    expect(prevToSelectedPaginationItem).not.toHaveClass('bg-blue text-white');
                    return [4, fireEvent.click(prevToSelectedPaginationItem)];
                case 1:
                    _a.sent();
                    return [4, waitFor(function () {
                            var newSelectedPaginationItem = screen.getByText('1');
                            var oldSelectedPaginationItem = screen.getByText('2');
                            expect(newSelectedPaginationItem).toHaveClass('bg-blue text-white');
                            expect(oldSelectedPaginationItem).not.toHaveClass('bg-blue text-white');
                        })];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    test('changing current page with "previous" button', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, selectedPaginationItem, prevToSelectedPaginationItem, prevPageButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState(2), currentPage = _a[0], setCurrentPage = _a[1];
                        return (_jsx(Pagination, { pages: 5, currentPage: currentPage, toPage: function (event) {
                                setCurrentPage(event);
                            } }, void 0));
                    };
                    container = render(_jsx(ParentContainer, {}, void 0)).container;
                    selectedPaginationItem = screen.getByText('2');
                    expect(selectedPaginationItem).toHaveClass('bg-blue text-white');
                    prevToSelectedPaginationItem = screen.getByText('1');
                    expect(prevToSelectedPaginationItem).not.toHaveClass('bg-blue text-white');
                    prevPageButton = container.firstElementChild.firstElementChild.firstElementChild;
                    return [4, fireEvent.click(prevPageButton)];
                case 1:
                    _a.sent();
                    return [4, waitFor(function () {
                            var newSelectedPaginationItem = screen.getByText('1');
                            var oldSelectedPaginationItem = screen.getByText('2');
                            expect(newSelectedPaginationItem).toHaveClass('bg-blue text-white');
                            expect(oldSelectedPaginationItem).not.toHaveClass('bg-blue text-white');
                        })];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    test('at 1 page and previous button should be disabled', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, prevPageButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState(1), currentPage = _a[0], setCurrentPage = _a[1];
                        return (_jsx(Pagination, { pages: 5, currentPage: currentPage, toPage: function (event) {
                                setCurrentPage(event);
                            } }, void 0));
                    };
                    container = render(_jsx(ParentContainer, {}, void 0)).container;
                    prevPageButton = container.firstElementChild.firstElementChild.firstElementChild;
                    return [4, fireEvent.click(prevPageButton)];
                case 1:
                    _a.sent();
                    return [4, waitFor(function () {
                            var selectedPaginationItem = screen.getByText('1');
                            expect(selectedPaginationItem).toHaveClass('bg-blue text-white');
                        })];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    test('changing current page with "next" button', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, selectedPaginationItem, nextToSelectedPaginationItem, nextPageButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState(2), currentPage = _a[0], setCurrentPage = _a[1];
                        return (_jsx(Pagination, { pages: 5, currentPage: currentPage, toPage: function (event) {
                                setCurrentPage(event);
                            } }, void 0));
                    };
                    container = render(_jsx(ParentContainer, {}, void 0)).container;
                    selectedPaginationItem = screen.getByText('2');
                    expect(selectedPaginationItem).toHaveClass('bg-blue text-white');
                    nextToSelectedPaginationItem = screen.getByText('3');
                    expect(nextToSelectedPaginationItem).not.toHaveClass('bg-blue text-white');
                    nextPageButton = container.firstElementChild.firstElementChild.lastElementChild;
                    return [4, fireEvent.click(nextPageButton)];
                case 1:
                    _a.sent();
                    return [4, waitFor(function () {
                            var newSelectedPaginationItem = screen.getByText('3');
                            var oldSelectedPaginationItem = screen.getByText('2');
                            expect(newSelectedPaginationItem).toHaveClass('bg-blue text-white');
                            expect(oldSelectedPaginationItem).not.toHaveClass('bg-blue text-white');
                        })];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    test('changing current page with input', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, selectedPaginationItem, nextToSelectedPaginationItem, numberInputElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ParentContainer = function () {
                        var _a = useState(2), currentPage = _a[0], setCurrentPage = _a[1];
                        return (_jsx(Pagination, { withInput: true, pages: 5, currentPage: currentPage, toPage: function (event) {
                                setCurrentPage(event);
                            } }, void 0));
                    };
                    render(_jsx(ParentContainer, {}, void 0));
                    selectedPaginationItem = screen.getByText('2');
                    expect(selectedPaginationItem).toHaveClass('bg-blue text-white');
                    nextToSelectedPaginationItem = screen.getByText('3');
                    expect(nextToSelectedPaginationItem).not.toHaveClass('bg-blue text-white');
                    numberInputElement = screen.getByRole('spinbutton');
                    return [4, fireEvent.change(numberInputElement, { target: { value: '3' } })];
                case 1:
                    _a.sent();
                    return [4, waitFor(function () {
                            var newSelectedPaginationItem = screen.getByText('3');
                            var oldSelectedPaginationItem = screen.getByText('2');
                            expect(newSelectedPaginationItem).toHaveClass('bg-blue text-white');
                            expect(oldSelectedPaginationItem).not.toHaveClass('bg-blue text-white');
                        })];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    test('with negative number for current page', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, selectedPaginationItem;
        return __generator(this, function (_a) {
            ParentContainer = function () {
                var _a = useState(-2), currentPage = _a[0], setCurrentPage = _a[1];
                return (_jsx(Pagination, { withInput: true, pages: 5, currentPage: currentPage, toPage: function (event) {
                        setCurrentPage(event);
                    } }, void 0));
            };
            container = render(_jsx(ParentContainer, {}, void 0)).container;
            selectedPaginationItem = container.querySelector('.bg-blue text-white');
            expect(selectedPaginationItem).toBeNull();
            return [2];
        });
    }); });
    test('with larger number for current page than existing', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ParentContainer, container, selectedPaginationItem;
        return __generator(this, function (_a) {
            ParentContainer = function () {
                var _a = useState(11), currentPage = _a[0], setCurrentPage = _a[1];
                return (_jsx(Pagination, { withInput: true, pages: 5, currentPage: currentPage, toPage: function (event) {
                        setCurrentPage(event);
                    } }, void 0));
            };
            container = render(_jsx(ParentContainer, {}, void 0)).container;
            selectedPaginationItem = container.querySelector('.bg-blue text-white');
            expect(selectedPaginationItem).toBeNull();
            return [2];
        });
    }); });
});
//# sourceMappingURL=Pagination.test.js.map