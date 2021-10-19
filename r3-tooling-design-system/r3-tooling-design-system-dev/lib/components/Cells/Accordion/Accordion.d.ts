import React from 'react';
import './Accordion.scss';
interface Props {
    title: string;
    className?: string;
    dark?: boolean;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        background: string;
        componentProps: {
            title: string;
            dark: boolean;
        };
    };
    background: {
        type: string;
        options: {
            name: string;
            properties: {
                dark: boolean;
            };
        }[];
    };
};
declare const Accordion: React.FC<Props>;
export default Accordion;
export { previewConfig };
