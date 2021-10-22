import React from 'react';
import './CodeSnippet.scss';
interface Props {
    className?: string;
    flush?: 'top' | 'right' | 'bottom' | 'left';
    link?: string;
    withSandbox?: boolean;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        flush: boolean;
        withSandbox: boolean;
        componentProps: {};
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                withSandbox: boolean;
                link: string;
                flush?: undefined;
            };
        } | {
            name: string;
            properties: {
                flush: string;
                withSandbox?: undefined;
                link?: undefined;
            };
        })[];
    };
};
declare const CodeSnippet: React.FC<Props>;
export default CodeSnippet;
export { previewConfig };
