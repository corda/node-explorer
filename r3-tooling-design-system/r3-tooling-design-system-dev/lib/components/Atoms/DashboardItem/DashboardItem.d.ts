import React from 'react';
import { PictogramList } from '../../Environment/Pictogram/Pictogram';
interface Props extends Partial<PictogramList> {
    alt?: string;
    className?: string;
    image?: string;
    withBackground?: boolean;
    onClick?: (any: any) => any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        withBackground: boolean;
        'Image or icon': string;
        componentProps: {
            icon: string;
            withBackground: boolean;
            onClick: () => void;
        };
    };
    modifiers: {
        type: string;
        options: {
            name: string;
            properties: {
                withBackground: boolean;
            };
        }[];
    };
    'Image or icon': {
        type: string;
        options: ({
            name: string;
            properties: {
                image: boolean;
                icon: string;
            };
        } | {
            name: string;
            properties: {
                image: string;
                icon: boolean;
            };
        })[];
    };
};
declare const DashboardItem: React.FC<Props>;
export default DashboardItem;
export { previewConfig };
