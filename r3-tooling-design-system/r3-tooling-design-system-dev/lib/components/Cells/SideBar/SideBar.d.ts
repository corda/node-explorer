import React, { ReactElement, ReactNode } from 'react';
import './SideBar.scss';
declare const previewConfig: {
    name: string;
    defaultState: {
        open: boolean;
        toggable: boolean;
        multipleActiveItems: boolean;
        componentProps: {
            open: boolean;
            toggable: boolean;
            onToggle: () => void;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                toggable: boolean;
                open: boolean;
                multipleActiveItems?: undefined;
            };
        } | {
            name: string;
            properties: {
                multipleActiveItems: boolean;
                toggable?: undefined;
                open?: undefined;
            };
        })[];
    };
};
interface Props {
    className?: string;
    children?: ReactNode | ReactElement;
    id?: string;
    multipleActiveItems?: boolean;
    open?: boolean;
    toggable?: boolean;
    onToggle?: (isOpen: boolean) => void;
    [x: string]: any;
}
declare const SideBar: React.FC<Props>;
export default SideBar;
export { previewConfig };
