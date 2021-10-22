import React from 'react';
interface Props {
    className?: string;
    idToScrollTo: string;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        componentProps: {
            idToScrollTo: string;
        };
    };
};
declare const Anchor: React.FC<Props>;
export default Anchor;
export { previewConfig };
