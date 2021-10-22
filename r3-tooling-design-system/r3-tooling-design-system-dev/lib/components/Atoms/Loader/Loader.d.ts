import React from 'react';
import './Loader.scss';
interface Props {
    size: 'small' | 'medium' | 'large';
    text?: string;
    loaderSpeed?: number;
    id?: string;
    className?: string;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        text: boolean;
        size: string;
        loaderSpeed: string;
        componentProps: {
            size: string;
            text: boolean;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                text: string;
                loaderSpeed?: undefined;
            };
        } | {
            name: string;
            properties: {
                loaderSpeed: number;
                text?: undefined;
            };
        })[];
    };
    size: {
        type: string;
        values: string[];
    };
};
declare const Loader: React.FC<Props>;
export default Loader;
export { previewConfig };
