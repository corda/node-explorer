import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skeleton from './Skeleton';
describe('<Skeleton /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Skeleton, {}, void 0)).container;
        expect(container).toBeInTheDocument();
    });
});
//# sourceMappingURL=Skeleton.test.js.map