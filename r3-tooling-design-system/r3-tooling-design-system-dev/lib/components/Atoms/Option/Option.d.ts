import React from 'react';
interface Props {
    value: string;
    active?: boolean;
    className?: string;
    disabled?: boolean;
    dropdown?: boolean;
    icon?: string;
    checkbox?: boolean;
    checked?: boolean;
    onChange?: (any: any) => any;
    onClick?: (any: any) => any;
    [x: string]: any;
}
declare const Option: React.FC<Props>;
export default Option;
