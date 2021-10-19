import React from 'react';
import './Divider.scss';
interface Props {
    className?: string;
    dark?: boolean;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        background: string;
        componentProps: {
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
declare const Divider: React.FC<Props>;
export default Divider;
export { previewConfig };
