import React from 'react';
import './Popconfirm.scss';
interface Props {
    className?: string;
    position?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
    show?: boolean;
    acceptText?: string;
    refuseText?: string;
    onAccept?: () => void;
    onClose?: () => void;
    onRefuse?: () => void;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        show: boolean;
        componentProps: {
            show: boolean;
            onClose: () => void;
            className: string;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                acceptText: string;
                refuseText?: undefined;
            };
        } | {
            name: string;
            properties: {
                refuseText: string;
                acceptText?: undefined;
            };
        })[];
    };
    position: {
        type: string;
        values: string[];
    };
};
declare const Popconfirm: React.FC<Props>;
export default Popconfirm;
export { previewConfig };
