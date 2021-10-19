import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProgressIndicator from './ProgressIndicator';
describe('<ProgressIndicator /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(ProgressIndicator, { progress: 0 }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" and "show" properties to work correctly', function () {
        var container = render(_jsx(ProgressIndicator, { className: "test-class", progress: 0 }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "progress" property to work correctly', function () {
        render(_jsx(ProgressIndicator, { progress: 33 }, void 0));
        var progressElements = screen.getAllByText("33%");
        expect(progressElements).toHaveLength(1);
        var inlineProgressStyledElement = screen.queryByText('33%').nextElementSibling
            .firstElementChild;
        expect(inlineProgressStyledElement.getAttribute('style')).toEqual('border-radius: inherit; width: 33%;');
    });
});
//# sourceMappingURL=ProgressIndicator.test.js.map