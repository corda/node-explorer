import React from 'react';
interface Props {
    value: string;
    className?: string;
    checked?: boolean;
    dark?: boolean;
    disabled?: boolean;
    dropdown?: boolean;
    id?: string;
    indeterminate?: boolean;
    invalid?: boolean;
    required?: boolean;
    onChange: (any: any) => any;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    form: boolean;
    defaultState: {
        background: string;
        checked: boolean;
        disabled: boolean;
        indeterminate: boolean;
        invalid: boolean;
        required: boolean;
        componentProps: {
            value: string;
            checked: boolean;
            onChange: () => void;
            dark: boolean;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                checked: boolean;
                disabled?: undefined;
                indeterminate?: undefined;
                invalid?: undefined;
                required?: undefined;
            };
        } | {
            name: string;
            properties: {
                disabled: boolean;
                checked?: undefined;
                indeterminate?: undefined;
                invalid?: undefined;
                required?: undefined;
            };
        } | {
            name: string;
            properties: {
                indeterminate: boolean;
                checked?: undefined;
                disabled?: undefined;
                invalid?: undefined;
                required?: undefined;
            };
        } | {
            name: string;
            properties: {
                invalid: boolean;
                checked?: undefined;
                disabled?: undefined;
                indeterminate?: undefined;
                required?: undefined;
            };
        } | {
            name: string;
            properties: {
                required: boolean;
                checked?: undefined;
                disabled?: undefined;
                indeterminate?: undefined;
                invalid?: undefined;
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
declare const Checkbox: React.FC<Props>;
export default Checkbox;
export { previewConfig };
