import React from 'react';
interface Props {
    value: Array<string>;
    label: string;
    className?: string;
    id?: string;
    dark?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    helpText?: string;
    invalid?: boolean;
    required?: boolean;
    dropdownBlock?: boolean;
    onChange: (any: any) => any;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    form: boolean;
    defaultState: {
        background: string;
        disabled: boolean;
        invalid: boolean;
        required: boolean;
        helpText: boolean;
        errorMessage: boolean;
        componentProps: {
            label: string;
            value: any[];
            onChange: (event: any) => void;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                disabled: boolean;
                invalid?: undefined;
                required?: undefined;
                helpText?: undefined;
                errorMessage?: undefined;
            };
        } | {
            name: string;
            properties: {
                invalid: boolean;
                disabled?: undefined;
                required?: undefined;
                helpText?: undefined;
                errorMessage?: undefined;
            };
        } | {
            name: string;
            properties: {
                required: boolean;
                disabled?: undefined;
                invalid?: undefined;
                helpText?: undefined;
                errorMessage?: undefined;
            };
        } | {
            name: string;
            properties: {
                helpText: string;
                disabled?: undefined;
                invalid?: undefined;
                required?: undefined;
                errorMessage?: undefined;
            };
        } | {
            name: string;
            properties: {
                invalid: boolean;
                errorMessage: string;
                disabled?: undefined;
                required?: undefined;
                helpText?: undefined;
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
declare const MultiSelect: React.FC<Props>;
export default MultiSelect;
export { previewConfig };
