import React from 'react';
import './Alert.scss';
interface Props {
    variant: 'danger' | 'warning' | 'success';
    className?: string;
    title?: string;
    withIcon?: boolean;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        variant: string;
        withTitle: boolean;
        withIcon: boolean;
        componentProps: {
            variant: string;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                title: string;
                withIcon?: undefined;
            };
        } | {
            name: string;
            properties: {
                withIcon: boolean;
                title?: undefined;
            };
        })[];
    };
    variant: {
        type: string;
        values: string[];
    };
};
declare const Alert: React.FC<Props>;
export default Alert;
export { previewConfig };
