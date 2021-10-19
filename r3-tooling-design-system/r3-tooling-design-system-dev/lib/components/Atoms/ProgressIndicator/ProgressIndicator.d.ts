import React from 'react';
interface Props {
    progress: number;
    className?: string;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        progress: number;
        componentProps: {
            progress: number;
        };
    };
    progress: {
        type: string;
        values: number[];
    };
};
declare const ProgressIndicator: React.FC<Props>;
export default ProgressIndicator;
export { previewConfig };
