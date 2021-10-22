import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import Table from '../components/Atoms/Table/Table';
import NumberInput from '../components/Atoms/NumberInput/NumberInput';
var TableExample = function () {
    var _a = useState('0'), rows = _a[0], setRows = _a[1];
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
    return (_jsxs("div", { children: [_jsx(Table, { columns: columns, data: data, rowsPerPage: parseInt(rows) }, void 0), _jsx(NumberInput, { value: rows, onChange: function (event) { return setRows(event.target.value); } }, void 0)] }, void 0));
};
export default TableExample;
//# sourceMappingURL=TableExample.js.map