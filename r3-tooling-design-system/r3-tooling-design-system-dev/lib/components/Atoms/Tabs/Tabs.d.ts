import React from 'react';
interface Props {
    variant?: 'dark' | 'light';
    className?: string;
    inHeader?: boolean;
    selected?: number;
    onChange?: (any: any) => void;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        variant: string;
        selected: number;
        componentProps: {
            variant: string;
            selected: number;
            onChange: (value: any) => void;
        };
    };
    variant: {
        type: string;
        values: string[];
    };
    selected: {
        type: string;
        values: number[];
    };
};
declare const Tabs: React.FC<Props>;
export default Tabs;
export { previewConfig };
