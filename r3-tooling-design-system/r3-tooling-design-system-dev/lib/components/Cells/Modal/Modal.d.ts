import React, { ReactElement } from 'react';
interface Props {
    size: 'large' | 'small';
    title: string | ReactElement;
    className?: string;
    open?: boolean;
    variant?: 'danger' | 'warning' | 'success';
    withBackdrop?: boolean;
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
        size: string;
        open: boolean;
        withBackdrop: boolean;
        closeOnOutsideClick: boolean;
        componentProps: {
            size: string;
            title: string;
            open: boolean;
            onClose: () => void;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                withBackdrop: boolean;
                open?: undefined;
                closeOnOutsideClick?: undefined;
            };
        } | {
            name: string;
            properties: {
                open: boolean;
                withBackdrop?: undefined;
                closeOnOutsideClick?: undefined;
            };
        } | {
            name: string;
            properties: {
                closeOnOutsideClick: boolean;
                withBackdrop?: undefined;
                open?: undefined;
            };
        })[];
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
declare const Modal: React.FC<Props>;
export default Modal;
export { previewConfig };
