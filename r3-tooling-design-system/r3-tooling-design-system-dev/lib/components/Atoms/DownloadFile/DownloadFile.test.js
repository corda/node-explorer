import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DownloadFile from './DownloadFile';
describe('<DownloadFile /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(DownloadFile, { displayName: "displayname-text", filePath: "/somefile.png" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" properties to work correctly', function () {
        var container = render(_jsx(DownloadFile, { displayName: "displayname-text", filePath: "/somefile.png", className: "test-class" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "fileSize" property to work correctly', function () {
        var fileSizeText = '43 mb';
        render(_jsx(DownloadFile, { displayName: "displayname-text", filePath: "/somefile.png", className: "test-class", fileSize: fileSizeText }, void 0));
        var fileSizeElement = screen.getByText(fileSizeText);
        expect(fileSizeElement).toHaveClass('download-file-size');
        expect(fileSizeElement).toBeInTheDocument();
    });
    test('with "fileName" property to work correctly', function () {
        render(_jsx(DownloadFile, { displayName: "displayname-text", filePath: "/somefile.png", className: "test-class", fileSize: "43 mb", fileName: "file-name" }, void 0));
        var fileNameElement = screen.getByText('displayname-text').parentElement;
        expect(fileNameElement).toHaveClass('leading-loose');
        expect(fileNameElement.getAttribute('download')).toEqual('file-name');
    });
});
//# sourceMappingURL=DownloadFile.test.js.map