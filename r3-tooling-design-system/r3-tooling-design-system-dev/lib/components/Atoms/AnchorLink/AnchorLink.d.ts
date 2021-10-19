import React from 'react';
import './AnchorLink.scss';
interface Props {
    to: string;
    className?: string;
    offsetEl?: Element;
    offset?: number;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        componentProps: {
            to: string;
        };
    };
};
declare const AnchorLink: React.FC<Props>;
export default AnchorLink;
export { previewConfig };
