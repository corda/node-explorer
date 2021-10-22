import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Breadcrumbs from './Breadcrumbs';
describe('<Breadcrumbs /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Breadcrumbs, { children: "test" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "children" to work correctly', function () {
        var container = render(_jsxs(Breadcrumbs, { children: [_jsx("p", { children: "child-1" }, void 0), _jsx("p", { children: "child-2" }, void 0), _jsx("p", { children: "child-3" }, void 0), _jsx("p", { children: "child-4" }, void 0)] }, void 0)).container;
        expect(container.firstElementChild.children).toHaveLength(4);
    });
});
//# sourceMappingURL=Breadcrumbs.test.js.map