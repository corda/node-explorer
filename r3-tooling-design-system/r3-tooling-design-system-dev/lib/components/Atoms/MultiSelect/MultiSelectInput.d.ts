import React, { ReactNode } from 'react';
interface Props {
    value: Array<string>;
    label: string;
    id?: string;
    focused?: boolean;
    dark?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    options?: ReactNode[];
    modified?: boolean;
    required?: boolean;
    onBlur: (any: any) => void;
    onRemove: (string: any) => void;
    [x: string]: any;
}
declare const MultiSelect: React.FC<Props>;
export default MultiSelect;
