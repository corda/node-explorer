import React from 'react';
import 'flatpickr/dist/themes/light.css';
import '../DateTime.scss';
interface Props {
    label: string;
    value: Date | null;
    className?: string;
    dark?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    helpText?: string;
    id?: string;
    invalid?: boolean;
    required?: boolean;
    time24hr?: boolean;
    onChange: (e: Date[]) => void;
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
        time24hr: boolean;
        componentProps: {
            label: string;
            value: Date;
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
                time24hr?: undefined;
            };
        } | {
            name: string;
            properties: {
                invalid: boolean;
                disabled?: undefined;
                required?: undefined;
                helpText?: undefined;
                errorMessage?: undefined;
                time24hr?: undefined;
            };
        } | {
            name: string;
            properties: {
                required: boolean;
                disabled?: undefined;
                invalid?: undefined;
                helpText?: undefined;
                errorMessage?: undefined;
                time24hr?: undefined;
            };
        } | {
            name: string;
            properties: {
                helpText: string;
                disabled?: undefined;
                invalid?: undefined;
                required?: undefined;
                errorMessage?: undefined;
                time24hr?: undefined;
            };
        } | {
            name: string;
            properties: {
                invalid: boolean;
                errorMessage: string;
                disabled?: undefined;
                required?: undefined;
                helpText?: undefined;
                time24hr?: undefined;
            };
        } | {
            name: string;
            properties: {
                time24hr: boolean;
                disabled?: undefined;
                invalid?: undefined;
                required?: undefined;
                helpText?: undefined;
                errorMessage?: undefined;
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
declare const TimeInput: React.FC<Props>;
export default TimeInput;
export { previewConfig };
