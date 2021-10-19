import React, { ReactElement } from 'react';
import './TopNavBar.scss';
declare const previewConfig: {
    name: string;
    defaultState: {
        background: string;
        centerPos: string;
        componentProps: {
            title: string;
        };
    };
    centerPos: {
        type: string;
        values: string[];
    };
};
interface Props {
    className?: string;
    logo?: ReactElement;
    title?: string | ReactElement;
    center?: ReactElement;
    centerPos?: 'start' | 'center' | 'end';
    id?: string;
    [x: string]: any;
}
declare const TopNavBar: React.FC<Props>;
export default TopNavBar;
export { previewConfig };
