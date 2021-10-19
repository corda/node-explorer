import React from 'react';
interface Props {
    label: string;
    value: string;
    className?: string;
    dark?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    helpText?: string;
    id?: string;
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
        disabled: boolean;
        invalid: boolean;
        required: boolean;
        helpText: boolean;
        errorMessage: boolean;
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
declare const PasswordInput: React.FC<Props>;
export default PasswordInput;
export { previewConfig };
