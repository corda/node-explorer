import React from 'react';
import './FileUpload.scss';
interface Props {
    label: string;
    filename: string;
    className?: string;
    dark?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    fileProgress?: number;
    helpText?: string;
    id?: string;
    invalid?: boolean;
    required?: boolean;
    onChange: (any: any) => any;
    onDelete: (any: any) => any;
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
        fileProgress: boolean;
        componentProps: {
            label: string;
            filename: string;
            onChange: (event: any) => void;
            onDelete: () => void;
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
                fileProgress?: undefined;
            };
        } | {
            name: string;
            properties: {
                invalid: boolean;
                disabled?: undefined;
                required?: undefined;
                helpText?: undefined;
                errorMessage?: undefined;
                fileProgress?: undefined;
            };
        } | {
            name: string;
            properties: {
                required: boolean;
                disabled?: undefined;
                invalid?: undefined;
                helpText?: undefined;
                errorMessage?: undefined;
                fileProgress?: undefined;
            };
        } | {
            name: string;
            properties: {
                helpText: string;
                disabled?: undefined;
                invalid?: undefined;
                required?: undefined;
                errorMessage?: undefined;
                fileProgress?: undefined;
            };
        } | {
            name: string;
            properties: {
                invalid: boolean;
                errorMessage: string;
                disabled?: undefined;
                required?: undefined;
                helpText?: undefined;
                fileProgress?: undefined;
            };
        } | {
            name: string;
            properties: {
                fileProgress: number;
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
declare const FileUpload: React.FC<Props>;
export default FileUpload;
export { previewConfig };
