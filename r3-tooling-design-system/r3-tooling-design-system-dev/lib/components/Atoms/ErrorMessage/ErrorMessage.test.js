import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorMessage from './ErrorMessage';
describe('<ErrorMessage /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(ErrorMessage, { errorMessage: "err-txt" }, void 0)).container;
        expect(container).toBeInTheDocument();
        expect(screen.getByText('err-txt')).toBeInTheDocument();
    });
});
//# sourceMappingURL=ErrorMessage.test.js.map