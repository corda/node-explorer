import React from 'react';
interface Props {
    value: string;
    className?: string;
    checked?: boolean;
    dark?: boolean;
    disabled?: boolean;
    groupName?: string;
    id?: string;
    onChange?: (any: any) => any;
    [x: string]: any;
}
declare const RadioButton: React.FC<Props>;
export default RadioButton;
