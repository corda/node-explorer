import React from 'react';
import './Table.scss';
interface Props {
    columns: object[];
    data: object[];
    className?: string;
    rowsPerPage?: number;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        pagination: boolean;
        componentProps: {
            rowsPerPage: boolean;
            columns: ({
                Header: string;
                accessor: string;
                className: string;
            } | {
                Header: string;
                accessor: string;
                className?: undefined;
            })[];
            data: {
                item: {
                    name: string;
                    address: string;
                    phoneNumber: string;
                };
            }[];
        };
    };
    modifiers: {
        type: string;
        options: {
            name: string;
            properties: {
                rowsPerPage: number;
            };
        }[];
    };
};
declare const Table: React.FC<Props>;
export default Table;
export { previewConfig };
