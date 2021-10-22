import React from 'react';
interface Props {
    groupName: string;
    label: string;
    value: string;
    className?: string;
    dark?: boolean;
    invalid?: boolean;
    preview?: boolean;
    onChange: (any: any) => any;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    form: boolean;
    defaultState: {
        dark: boolean;
        disabled: boolean;
        invalid: boolean;
        required: boolean;
        checked: boolean;
        componentProps: {
            dark: boolean;
            groupName: string;
            value: string;
            onChange: (event: string) => void;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                invalid: boolean;
                required?: undefined;
                dark?: undefined;
            };
        } | {
            name: string;
            properties: {
                required: boolean;
                invalid?: undefined;
                dark?: undefined;
            };
        } | {
            name: string;
            properties: {
                dark: boolean;
                invalid?: undefined;
                required?: undefined;
            };
        })[];
    };
    childrenProps: {
        type: string;
        options: {
            name: string;
            properties: {
                disabled: boolean;
            };
        }[];
    };
};
declare const RadioGroup: React.FC<Props>;
export default RadioGroup;
export { previewConfig };
