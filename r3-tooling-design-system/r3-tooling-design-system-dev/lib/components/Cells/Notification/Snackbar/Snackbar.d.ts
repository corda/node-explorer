import React, { Component, ReactElement, ReactNode } from 'react';
import { ContextProps } from '../Notification';
import './Snackbar.scss';
interface Props {
    context?: ContextProps;
    className?: string;
    variant?: 'info' | 'success' | 'warning' | 'danger';
    withIcon?: boolean;
    button?: ReactElement;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        variant: string;
        kind: string;
        withIcon: boolean;
        button: boolean;
        componentProps: {
            variant: boolean;
            withIcon: boolean;
            button: any;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                withIcon: boolean;
                button?: undefined;
            };
        } | {
            name: string;
            properties: {
                button: string;
                withIcon?: undefined;
            };
        })[];
    };
    variant: {
        type: string;
        values: string[];
    };
};
export declare const snackbarIdContext: React.Context<string>;
declare class Snackbar extends Component<Props> {
    button: JSX.Element;
    icon: string;
    iconColour: string;
    id: string;
    close: () => void;
    render(): ReactNode;
}
export default Snackbar;
export { previewConfig };
