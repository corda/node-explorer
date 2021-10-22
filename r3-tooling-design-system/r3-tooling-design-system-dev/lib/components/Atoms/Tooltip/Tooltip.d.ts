import React from 'react';
import './Tooltip.scss';
interface Props {
    className?: string;
    position?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
    variant?: 'dark' | 'light';
    size?: 'small' | 'medium' | 'large';
    show?: boolean;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        show: boolean;
        componentProps: {
            show: boolean;
            position: string;
            className: string;
            variant: string;
            size: string;
        };
    };
    position: {
        type: string;
        values: string[];
    };
    variant: {
        type: string;
        values: string[];
    };
    size: {
        type: string;
        values: string[];
    };
};
declare const Tooltip: React.FC<Props>;
export default Tooltip;
export { previewConfig };
