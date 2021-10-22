import React from 'react';
import './Toggle.scss';
interface Props {
    variant: 'gray' | 'redgreen';
    className?: string;
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    labelOff?: string;
    labelOn?: string;
    textContent?: string;
    onChange: () => any;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    form: boolean;
    defaultState: {
        variant: string;
        checked: boolean;
        disabled: boolean;
        labels: boolean;
        textContent: boolean;
        componentProps: {
            variant: string;
            checked: boolean;
            disabled: boolean;
            textContent: boolean;
            onChange: () => void;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                checked: boolean;
                disabled?: undefined;
                labelOn?: undefined;
                labelOff?: undefined;
                textContent?: undefined;
            };
        } | {
            name: string;
            properties: {
                disabled: boolean;
                checked?: undefined;
                labelOn?: undefined;
                labelOff?: undefined;
                textContent?: undefined;
            };
        } | {
            name: string;
            properties: {
                labelOn: string;
                labelOff: string;
                checked?: undefined;
                disabled?: undefined;
                textContent?: undefined;
            };
        } | {
            name: string;
            properties: {
                textContent: string;
                checked?: undefined;
                disabled?: undefined;
                labelOn?: undefined;
                labelOff?: undefined;
            };
        })[];
    };
    variant: {
        type: string;
        values: string[];
    };
};
declare const ToggleSwitch: React.FC<Props>;
export default ToggleSwitch;
export { previewConfig };
