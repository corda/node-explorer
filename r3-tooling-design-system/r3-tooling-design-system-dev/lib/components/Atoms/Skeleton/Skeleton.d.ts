import React from 'react';
interface Props {
    className?: string;
    height?: number;
    width?: number;
    lines?: number;
    circle?: boolean;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        block: boolean;
        circle: boolean;
        componentProps: {
            lines: number;
            width: number;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                height: number;
                circle?: undefined;
                width?: undefined;
            };
        } | {
            name: string;
            properties: {
                circle: boolean;
                height: number;
                width: number;
            };
        })[];
    };
};
declare const Skeleton: React.FC<Props>;
export default Skeleton;
export { previewConfig };
