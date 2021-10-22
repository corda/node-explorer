import React from 'react';
interface Props {
    className?: string;
    copyright: string;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        componentProps: {};
    };
};
declare const BottomBar: React.FC<Props>;
export default BottomBar;
export { previewConfig };
