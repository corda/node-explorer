import React from 'react';
interface Props {
    className?: string;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    [x: string]: any;
}
declare const TooltipWrapper: React.FC<Props>;
export default TooltipWrapper;
