import React from 'react';
interface Props {
    icon: string;
    size: 'small' | 'medium' | 'large';
    variant: 'primary' | 'secondary' | 'tertiary' | 'label' | 'warning' | 'danger' | 'labeldanger' | 'icon';
    className?: string;
    dark?: boolean;
    disabled?: boolean;
    isLink?: boolean;
    rel?: string;
    to?: string;
    target?: string;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        background: string;
        variant: string;
        size: string;
        disabled: boolean;
        isLink: boolean;
        componentProps: {
            size: string;
            variant: string;
            dark: boolean;
            icon: string;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                disabled: boolean;
                isLink?: undefined;
            };
        } | {
            name: string;
            properties: {
                isLink: boolean;
                disabled?: undefined;
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
declare const IconButton: React.FC<Props>;
export default IconButton;
export { previewConfig };
