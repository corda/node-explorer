import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconCustom from './IconCustom';
describe('<IconCustom /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(IconCustom, { icon: "StarOutline" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(IconCustom, { icon: "StarOutline", className: "test-class" }, void 0)).container;
        expect(container.firstElementChild.firstElementChild).toHaveClass('test-class');
    });
});
//# sourceMappingURL=IconCustom.test.js.map