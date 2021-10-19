import React from 'react';
interface Props {
    className?: string;
    cols?: number;
    start?: number;
    sm?: number;
    smStart?: number;
    md?: number;
    mdStart?: number;
    lg?: number;
    lgStart?: number;
    [x: string]: any;
}
declare const Column: React.FC<Props>;
export default Column;
