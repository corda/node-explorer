import React from 'react';
import './Button.scss';
interface Props {
    size: 'small' | 'large';
    variant: 'primary' | 'secondary' | 'tertiary' | 'label' | 'danger' | 'warning' | 'labeldanger';
    className?: string;
    dark?: boolean;
    disabled?: boolean;
    iconLeft?: string;
    iconRight?: string;
    isLink?: boolean;
    rel?: string;
    noPaddingFocus?: boolean;
    target?: string;
    to?: string;
    isLoading?: boolean;
    loadingIcon?: string;
    loadingAnimationClass?: string;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        background: string;
        withIcon: string;
        variant: string;
        size: string;
        disabled: boolean;
        isLink: boolean;
        noPaddingFocus: boolean;
        isLoading: boolean;
        componentProps: {
            size: string;
            variant: string;
            dark: boolean;
            noPaddingFocus: boolean;
            isLoading: boolean;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                disabled: boolean;
                isLoading?: undefined;
                isLink?: undefined;
                noPaddingFocus?: undefined;
            };
        } | {
            name: string;
            properties: {
                isLoading: boolean;
                disabled?: undefined;
                isLink?: undefined;
                noPaddingFocus?: undefined;
            };
        } | {
            name: string;
            properties: {
                isLink: boolean;
                disabled?: undefined;
                isLoading?: undefined;
                noPaddingFocus?: undefined;
            };
        } | {
            name: string;
            properties: {
                noPaddingFocus: boolean;
                disabled?: undefined;
                isLoading?: undefined;
                isLink?: undefined;
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
    withIcon: {
        type: string;
        options: {
            name: string;
            properties: {
                iconLeft: string;
                iconRight: string;
            };
        }[];
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
declare const Button: React.FC<Props>;
export default Button;
export { previewConfig };
