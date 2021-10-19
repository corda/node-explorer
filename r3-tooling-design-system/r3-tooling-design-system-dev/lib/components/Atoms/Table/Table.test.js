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
import Table from './Table';
import React from 'react';
var ParentContainer = function (_a) {
    var rowsPerPage = _a.rowsPerPage;
    var data = React.useMemo(function () { return [
        {
            item: {
                name: 'John Doe',
                address: '1 Example Street',
                phoneNumber: '111-111-111',
            },
        },
        {
            item: {
                name: 'Jane Doe',
                address: '2 Example Street',
                phoneNumber: '222-222-222',
            },
        },
        {
            item: {
                name: 'James Smith',
                address: '3 Example Street',
                phoneNumber: '333-333-333',
            },
        },
        {
            item: {
                name: 'Jill Smith',
                address: '3 Example Street',
                phoneNumber: '333-333-333',
            },
        },
        {
            item: {
                name: 'George Jones',
                address: '4 Example Street',
                phoneNumber: '444-444-444',
            },
        },
    ]; }, []);
    var columns = React.useMemo(function () { return [
        {
            Header: 'Name',
            accessor: 'item.name',
            className: 'text-right whitespace-no-wrap',
        },
        {
            Header: 'Address',
            accessor: 'item.address',
        },
        {
            Header: 'Phone number',
            accessor: 'item.phoneNumber',
            className: 'text-center',
        },
    ]; }, []);
    return (_jsx(Table, { columns: columns, data: data, rowsPerPage: rowsPerPage, className: "test-class" }, void 0));
};
describe('<Table /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(ParentContainer, { rowsPerPage: 2 }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with 5 total items and 2 per page to work correctly', function () {
        var container = render(_jsx(ParentContainer, { rowsPerPage: 2 }, void 0)).container;
        expect(container.firstElementChild.children).toHaveLength(2);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.queryByText('Jill Smith')).toBeNull();
    });
    test('changing page with 5 total items and 2 per page to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var pageTwoButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    render(_jsx(ParentContainer, { rowsPerPage: 2 }, void 0));
                    pageTwoButton = screen.getByText('2', {
                        exact: true,
                    });
                    return [4, fireEvent.click(pageTwoButton)];
                case 1:
                    _a.sent();
                    expect(screen.getByText('Jill Smith')).toBeInTheDocument();
                    expect(screen.queryByText('John Doe')).toBeNull();
                    return [2];
            }
        });
    }); });
    test('changing page with 5 total items without "rowsPerPage" to work correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container;
        return __generator(this, function (_a) {
            container = render(_jsx(ParentContainer, {}, void 0)).container;
            expect(container.children).toHaveLength(1);
            expect(screen.getByText('Jill Smith')).toBeInTheDocument();
            expect(screen.getByText('George Jones')).toBeInTheDocument();
            return [2];
        });
    }); });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(ParentContainer, { rowsPerPage: 2 }, void 0)).container;
        expect(container).toBeInTheDocument();
        var tableElement = screen.queryByRole('table');
        expect(tableElement).toHaveClass('test-class');
    });
});
//# sourceMappingURL=Table.test.js.map