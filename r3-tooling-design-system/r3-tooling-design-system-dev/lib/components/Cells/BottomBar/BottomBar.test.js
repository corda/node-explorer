var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BottomBar from './BottomBar';
describe('<BottomBar /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(BottomBar, { copyright: "copyr-text" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with children to display correctly', function () {
        render(_jsxs(BottomBar, __assign({ copyright: "copyr-text" }, { children: [_jsx("p", { children: "paragraph1" }, void 0), _jsxs("p", { children: ["paragraph2", _jsx("span", { children: "span1" }, void 0)] }, void 0), "text"] }), void 0));
        var copyrightTextElement = screen.getByText('copyr-text');
        expect(copyrightTextElement).toBeInTheDocument();
        var childrenElementsContainer = copyrightTextElement.nextElementSibling;
        expect(childrenElementsContainer.children).toHaveLength(2);
        expect(screen.queryByText('span1')).toBeInTheDocument();
    });
});
//# sourceMappingURL=BottomBar.test.js.map