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
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Snackbar, { snackbarIdContext } from './Snackbar';
import { NotificationService } from '../../../../exports';
import Button from '../../../Atoms/Button/Button';
describe('<Snackbar /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Snackbar, { children: "Success Snackbar" }, void 0)).container;
        expect(container).toBeInTheDocument();
        expect(container.firstElementChild).not.toHaveClass('snackbar-warning');
        expect(container.firstElementChild).toHaveClass('snackbar-info');
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Snackbar, __assign({ variant: "success", className: "test-class" }, { children: "Success Snackbar" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with `variant="warning"` property to work correctly', function () {
        var container = render(_jsx(Snackbar, __assign({ variant: "warning", withIcon: true }, { children: "Warning Snackbar" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('snackbar-warning');
        var warningIconElement = container.firstElementChild.firstElementChild.firstElementChild
            .firstElementChild;
        expect(warningIconElement).toBeInTheDocument();
    });
    test('with `variant="danger"` property to work correctly', function () {
        var container = render(_jsx(Snackbar, __assign({ variant: "danger", withIcon: true, context: NotificationService, button: _jsx(snackbarIdContext.Consumer, { children: function (value) { return (_jsxs(Button, __assign({ size: "small", variant: "tertiary", noPaddingFocus: true, onClick: function () { return NotificationService.dismiss(value); } }, { children: ["Undo", ' '] }), void 0)); } }, void 0) }, { children: "Danger Snackbar" }), void 0)).container;
        expect(container.firstElementChild).toHaveClass('snackbar-danger');
        var warningIconElement = container.firstElementChild.firstElementChild.firstElementChild
            .firstElementChild;
        expect(warningIconElement).toBeInTheDocument();
    });
});
//# sourceMappingURL=Snackbar.test.js.map