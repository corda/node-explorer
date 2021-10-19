import React, { ReactElement } from 'react';
interface Props {
    position: 'top' | 'right' | 'bottom' | 'left';
    title: string | ReactElement;
    className?: string;
    horizontalWidth?: string;
    open?: boolean;
    closeOnOutsideClick?: boolean;
    onClose: () => void;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    trigger: boolean;
    triggerText: string;
    triggerFn: () => void;
    defaultState: {
        position: string;
        open: boolean;
        componentProps: {
            title: string;
            position: string;
            open: boolean;
            onClose: () => void;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                open: boolean;
                closeOnOutsideClick?: undefined;
                horizontalWidth?: undefined;
            };
        } | {
            name: string;
            properties: {
                closeOnOutsideClick: boolean;
                open?: undefined;
                horizontalWidth?: undefined;
            };
        } | {
            name: string;
            properties: {
                horizontalWidth: string;
                open?: undefined;
                closeOnOutsideClick?: undefined;
            };
        })[];
    };
    position: {
        type: string;
        values: string[];
    };
};
declare const Drawer: React.FC<Props>;
export default Drawer;
export { previewConfig };
