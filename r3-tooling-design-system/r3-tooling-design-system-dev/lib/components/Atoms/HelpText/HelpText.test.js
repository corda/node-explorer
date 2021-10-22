import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HelpText from './HelpText';
describe('<HelpText /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(HelpText, { helpText: "help-txt" }, void 0)).container;
        expect(container).toBeInTheDocument();
        expect(screen.getByText('help-txt')).toBeInTheDocument();
    });
});
//# sourceMappingURL=HelpText.test.js.map