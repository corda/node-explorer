import React from 'react';
interface Props {
    pages: number;
    currentPage: number;
    className?: string;
    withInput?: boolean;
    toPage: (any: any) => any;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        pages: number;
        currentPage: number;
        withInput: boolean;
        componentProps: {
            pages: number;
            currentPage: number;
            withInput: boolean;
            toPage: (event: any) => void;
        };
    };
    modifiers: {
        type: string;
        options: {
            name: string;
            properties: {
                withInput: boolean;
            };
        }[];
    };
    pages: {
        type: string;
        values: number[];
    };
};
declare const Pagination: React.FC<Props>;
export default Pagination;
export { previewConfig };
