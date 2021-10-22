import React from 'react';
import { PictogramList } from '../../Environment/Pictogram/Pictogram';
interface Props extends PictogramList {
    title: string;
    className?: string;
    show?: boolean;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        componentProps: {
            show: boolean;
            icon: string;
            title: string;
        };
    };
};
declare const EmptyState: React.FC<Props>;
export default EmptyState;
export { previewConfig };
