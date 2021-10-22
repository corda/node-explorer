import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notification from './Notification';
describe('<Notification /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Notification, {}, void 0)).container;
        expect(container).toBeInTheDocument();
    });
});
//# sourceMappingURL=Notification.test.js.map