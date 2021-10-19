import React from 'react';
interface Props {
    className?: string;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        componentProps: {};
    };
};
declare const Breadcrumbs: React.FC<Props>;
export default Breadcrumbs;
export { previewConfig };
