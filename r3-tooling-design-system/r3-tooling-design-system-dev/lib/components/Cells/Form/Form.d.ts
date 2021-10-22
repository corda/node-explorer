import React from 'react';
interface Props {
    className?: string;
    dark?: boolean;
    title?: string;
    preview?: boolean;
    onSubmit: (any: any) => any;
    [x: string]: any;
}
declare const Form: React.FC<Props>;
export default Form;
