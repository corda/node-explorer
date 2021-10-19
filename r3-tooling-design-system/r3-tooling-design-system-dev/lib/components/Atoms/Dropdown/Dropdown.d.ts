import React, { ReactElement } from 'react';
import './Dropdown.scss';
interface Props {
    trigger: string | ReactElement;
    className?: string;
    checkbox?: boolean;
    positionX?: 'left' | 'right';
    positionY?: 'top' | 'bottom';
    block?: boolean;
    closeOnSelectOption?: boolean;
    onSelect?: (any: any) => any;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        closeOnSelectOption: boolean;
        icon: boolean;
        componentProps: {
            closeOnSelectOption: boolean;
        };
    };
    modifiers: {
        type: string;
        options: {
            name: string;
            properties: {
                closeOnSelectOption: boolean;
            };
        }[];
    };
    childrenProps: {
        type: string;
        options: ({
            name: string;
            properties: {
                icon: string;
                active?: undefined;
            };
        } | {
            name: string;
            properties: {
                active: boolean;
                icon?: undefined;
            };
        })[];
    };
};
declare const Dropdown: React.FC<Props>;
export default Dropdown;
export { previewConfig };
