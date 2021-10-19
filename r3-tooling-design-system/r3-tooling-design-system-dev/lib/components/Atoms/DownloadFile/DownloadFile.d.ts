import React from 'react';
interface Props {
    displayName: string;
    filePath: string;
    className?: string;
    icon?: string;
    fileName?: string;
    fileSize?: string;
    fileType?: 'certificate' | 'code' | 'excel' | 'image' | 'pdf' | 'presentation' | 'spreadsheet' | 'text' | 'video' | 'word';
    [x: string]: any;
}
declare const previewConfig: {
    name: string;
    defaultState: {
        fileName: boolean;
        fileSize: boolean;
        icon: boolean;
        fileType: boolean;
        componentProps: {
            displayName: string;
            filePath: string;
            fileType: boolean;
        };
    };
    modifiers: {
        type: string;
        options: ({
            name: string;
            properties: {
                fileName: string;
                fileSize?: undefined;
                icon?: undefined;
            };
        } | {
            name: string;
            properties: {
                fileSize: string;
                fileName?: undefined;
                icon?: undefined;
            };
        } | {
            name: string;
            properties: {
                icon: string;
                fileName?: undefined;
                fileSize?: undefined;
            };
        })[];
    };
    fileType: {
        type: string;
        values: string[];
    };
};
declare const DownloadFile: React.FC<Props>;
export default DownloadFile;
export { previewConfig };
