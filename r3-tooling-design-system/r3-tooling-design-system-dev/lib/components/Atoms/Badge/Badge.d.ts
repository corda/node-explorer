import React from 'react';
interface Props {
    className?: string;
    customColour?: string;
    variant?: 'red' | 'yellow' | 'green' | 'blue' | 'gray';
    whiteText?: boolean;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    form: boolean;
    defaultState: {
        variant: string;
        whiteText: boolean;
        customColour: boolean;
        componentProps: {
            variant: string;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                whiteText: boolean;
                customColour?: undefined;
            };
        } | {
            name: string;
            properties: {
                customColour: string;
                whiteText?: undefined;
            };
        })[];
    };
    variant: {
        type: string;
        values: string[];
    };
};
declare const Badge: React.FC<Props>;
export default Badge;
export { previewConfig };
