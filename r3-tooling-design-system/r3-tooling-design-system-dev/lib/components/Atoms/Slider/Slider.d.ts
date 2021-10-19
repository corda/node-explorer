import React from 'react';
import './Slider.css';
interface Props {
    value: string;
    className?: string;
    dark?: boolean;
    disabled?: boolean;
    id?: string;
    max?: string;
    min?: string;
    onChange: (any: any) => any;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    form: boolean;
    defaultState: {
        background: string;
        disabled: boolean;
        required: boolean;
        max: boolean;
        min: boolean;
        componentProps: {
            label: string;
            value: string;
            onChange: (event: any) => void;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                disabled: boolean;
                required?: undefined;
                min?: undefined;
                max?: undefined;
            };
        } | {
            name: string;
            properties: {
                required: boolean;
                disabled?: undefined;
                min?: undefined;
                max?: undefined;
            };
        } | {
            name: string;
            properties: {
                min: number;
                disabled?: undefined;
                required?: undefined;
                max?: undefined;
            };
        } | {
            name: string;
            properties: {
                max: number;
                disabled?: undefined;
                required?: undefined;
                min?: undefined;
            };
        })[];
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
declare const Slider: React.FC<Props>;
export default Slider;
export { previewConfig };
