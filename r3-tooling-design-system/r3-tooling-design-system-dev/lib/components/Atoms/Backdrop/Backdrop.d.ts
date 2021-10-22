import React from 'react';
interface Props {
    show?: boolean;
    isTransparent?: boolean;
    closeOnClick?: boolean;
    parentComponentId: string;
    onClick?: () => void;
    [x: string]: any;
}
declare const Backdrop: React.FC<Props>;
export default Backdrop;
