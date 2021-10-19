import React, { ReactNode } from 'react';
import './PageHeader.scss';
interface Props {
    size: 'large' | 'small';
    className?: string;
    dark?: boolean;
    offset?: number;
    sticky?: boolean;
    tabs?: ReactNode[];
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        size: string;
        dark: boolean;
        sticky: boolean;
        tabs: boolean;
        componentProps: {
            size: string;
            dark: boolean;
            sticky: boolean;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                dark: boolean;
                tabs?: undefined;
                sticky?: undefined;
                offset?: undefined;
            };
        } | {
            name: string;
            properties: {
                tabs: string[];
                dark?: undefined;
                sticky?: undefined;
                offset?: undefined;
            };
        } | {
            name: string;
            properties: {
                sticky: boolean;
                offset: number;
                dark?: undefined;
                tabs?: undefined;
            };
        })[];
    };
    size: {
        type: string;
        values: string[];
    };
};
declare const PageHeader: React.FC<Props>;
export default PageHeader;
export { previewConfig };
