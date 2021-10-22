import React from 'react';
interface Props {
    title: string;
    className?: string;
    alt?: string;
    dark?: boolean;
    icon?: string;
    image?: string;
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        background: string;
        image: boolean;
        icon: boolean;
        componentProps: {
            title: string;
            dark: boolean;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                image: string;
                alt: string;
                icon?: undefined;
            };
        } | {
            name: string;
            properties: {
                icon: string;
                image?: undefined;
                alt?: undefined;
            };
        })[];
    };
    background: {
        type: string;
        options: {
            name: string;
            properties: {
                dark: boolean;
            };
        }[];
    };
};
declare const Card: React.FC<Props>;
export default Card;
export { previewConfig };
