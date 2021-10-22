import React, { Component, ReactNode } from 'react';
import { ContextProps } from '../Notification';
import './Toast.scss';
interface Props {
    context?: ContextProps;
    title?: string;
    className?: string;
    variant?: 'warning' | 'danger' | 'success' | 'info';
    withIcon?: boolean;
    onClose?: () => void;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        variant: string;
        kind: string;
        withIcon: boolean;
        componentProps: {
            title: string;
            variant: boolean;
            withIcon: boolean;
            onClose: () => void;
        };
    };
    modifiers: {
        type: string;
        options: {
            name: string;
            properties: {
                withIcon: boolean;
            };
        }[];
    };
    variant: {
        type: string;
        values: string[];
    };
};
export declare const toastIdContext: React.Context<string>;
declare class Toast extends Component<Props> {
    icon: string;
    iconColour: string;
    id: string;
    close: (id: any) => void;
    render(): ReactNode;
}
export default Toast;
export { previewConfig };
