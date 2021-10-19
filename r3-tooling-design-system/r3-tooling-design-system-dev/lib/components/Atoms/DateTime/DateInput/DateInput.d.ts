import React from 'react';
import 'flatpickr/dist/themes/light.css';
import '../DateTime.scss';
interface Props {
    label: string;
    value: Date | null;
    className?: string;
    closeOnSelect?: boolean;
    dark?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    helpText?: string;
    id?: string;
    invalid?: boolean;
    minDate?: Date;
    maxDate?: Date;
    required?: boolean;
    onChange: (event: Date[]) => void;
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
        minDate: boolean;
        maxDate: boolean;
        componentProps: {
            label: string;
            value: any;
            onChange: (event: Date[]) => void;
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
                minDate?: undefined;
                maxDate?: undefined;
            };
        } | {
            name: string;
            properties: {
                invalid: boolean;
                disabled?: undefined;
                required?: undefined;
                helpText?: undefined;
                errorMessage?: undefined;
                minDate?: undefined;
                maxDate?: undefined;
            };
        } | {
            name: string;
            properties: {
                required: boolean;
                disabled?: undefined;
                invalid?: undefined;
                helpText?: undefined;
                errorMessage?: undefined;
                minDate?: undefined;
                maxDate?: undefined;
            };
        } | {
            name: string;
            properties: {
                helpText: string;
                disabled?: undefined;
                invalid?: undefined;
                required?: undefined;
                errorMessage?: undefined;
                minDate?: undefined;
                maxDate?: undefined;
            };
        } | {
            name: string;
            properties: {
                invalid: boolean;
                errorMessage: string;
                disabled?: undefined;
                required?: undefined;
                helpText?: undefined;
                minDate?: undefined;
                maxDate?: undefined;
            };
        } | {
            name: string;
            properties: {
                minDate: Date;
                disabled?: undefined;
                invalid?: undefined;
                required?: undefined;
                helpText?: undefined;
                errorMessage?: undefined;
                maxDate?: undefined;
            };
        } | {
            name: string;
            properties: {
                maxDate: Date;
                disabled?: undefined;
                invalid?: undefined;
                required?: undefined;
                helpText?: undefined;
                errorMessage?: undefined;
                minDate?: undefined;
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
declare const DateInput: React.FC<Props>;
export default DateInput;
export { previewConfig };
