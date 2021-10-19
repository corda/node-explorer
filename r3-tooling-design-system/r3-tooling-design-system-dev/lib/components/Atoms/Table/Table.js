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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import './Table.scss';
import Pagination from '../Pagination/Pagination';
var previewConfig = {
    name: 'Table',
    defaultState: {
        pagination: false,
        componentProps: {
            rowsPerPage: false,
            columns: [
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
            ],
            data: [
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
            ],
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'pagination',
                properties: {
                    rowsPerPage: 3,
                },
            },
        ],
    },
};
var Table = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, columns = _a.columns, data = _a.data, rowsPerPage = _a.rowsPerPage;
    var allRows = data.length;
    var numOfPages = rowsPerPage ? Math.ceil(allRows / rowsPerPage) : 1;
    var _c = useTable({
        columns: columns,
        data: data,
        initialState: {
            pageIndex: 0,
            pageSize: rowsPerPage || allRows,
        },
    }, useSortBy, usePagination), getTableProps = _c.getTableProps, getTableBodyProps = _c.getTableBodyProps, headerGroups = _c.headerGroups, prepareRow = _c.prepareRow, rows = _c.rows, page = _c.page, gotoPage = _c.gotoPage, setPageSize = _c.setPageSize, pageIndex = _c.state.pageIndex;
    useEffect(function () { return setPageSize(rowsPerPage || allRows); }, [rowsPerPage, allRows, setPageSize]);
    return (_jsxs("div", __assign({ className: "flex flex-col" }, { children: [_jsx("div", __assign({ className: "overflow-x-auto" }, { children: _jsxs("table", __assign({}, getTableProps(), { className: className }, { children: [_jsx("thead", { children: headerGroups.map(function (headerGroup) { return (_jsx("tr", __assign({}, headerGroup.getHeaderGroupProps(), { children: headerGroup.headers.map(function (column) { return (_jsx("th", __assign({ className: column.isSorted
                                        ? column.isSortedDesc
                                            ? 'sort-desc'
                                            : 'sort-asc'
                                        : '' }, column.getHeaderProps([
                                    {
                                        className: column.className || '',
                                        style: column.style,
                                    },
                                    column.getSortByToggleProps(),
                                ]), { children: column.render('Header') }), void 0)); }) }), void 0)); }) }, void 0), _jsx("tbody", __assign({}, getTableBodyProps(), { children: rowsPerPage
                                ? page.map(function (row, i) {
                                    prepareRow(row);
                                    return (_jsx("tr", __assign({}, row.getRowProps(), { children: row.cells.map(function (cell) {
                                            return (_jsx("td", __assign({}, cell.getCellProps([
                                                {
                                                    className: cell.column.className || '',
                                                    style: cell.column.style,
                                                },
                                            ]), { children: cell.render('Cell') }), void 0));
                                        }) }), void 0));
                                })
                                : rows.map(function (row, i) {
                                    prepareRow(row);
                                    return (_jsx("tr", __assign({}, row.getRowProps(), { children: row.cells.map(function (cell) {
                                            return (_jsx("td", __assign({}, cell.getCellProps([
                                                {
                                                    className: cell.column.className || '',
                                                    style: cell.column.style,
                                                },
                                            ]), { children: cell.render('Cell') }), void 0));
                                        }) }), void 0));
                                }) }), void 0)] }), void 0) }), void 0), rowsPerPage && rowsPerPage < allRows ? (_jsx(Pagination, { pages: numOfPages, currentPage: pageIndex + 1, toPage: function (event) { return gotoPage(event - 1); }, className: "self-center my-4" }, void 0)) : null] }), void 0));
};
export default Table;
export { previewConfig };
//# sourceMappingURL=Table.js.map