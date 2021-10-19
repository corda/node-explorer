import React from 'react';
interface Props {
    id: string;
    defaultValue?: string;
    inputRef?: React.Ref<any>;
    dark?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    required?: boolean;
    type: string;
    modified?: boolean;
    [x: string]: any;
}
declare const CustomInput: React.FC<Props>;
export default CustomInput;
