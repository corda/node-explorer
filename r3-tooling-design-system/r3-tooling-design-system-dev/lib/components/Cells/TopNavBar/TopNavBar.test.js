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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopNavBar from './TopNavBar';
import logoSrc from '../../../assets/img/logo--r3.svg';
var logo = (_jsx("a", __assign({ href: "#" }, { children: _jsx("img", { src: logoSrc, width: "33px", height: "34px", alt: "logo-alt-txt" }, void 0) }), void 0));
describe('<TopNavBar /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(TopNavBar, { children: "topnavbar" }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(TopNavBar, { className: "test-class" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
        var imageElement = document.querySelector('img');
        expect(imageElement).toBeNull();
    });
    test('with "logo" properties to work correctly', function () {
        render(_jsx(TopNavBar, { logo: logo, className: "test-class" }, void 0));
        var imageElement = screen.getByRole('img');
        expect(imageElement.getAttribute('width')).toEqual('33px');
        expect(imageElement.getAttribute('height')).toEqual('34px');
        expect(imageElement.getAttribute('alt')).toEqual('logo-alt-txt');
    });
    test('with "title" property to work correctly', function () {
        var titleText = 'title-txt';
        render(_jsx(TopNavBar, { title: titleText, className: "test-class" }, void 0));
        var titleElement = screen.getByText(titleText);
        expect(titleElement).toBeInTheDocument();
    });
    test('with "center" and "centerPos" properties to work correctly', function () {
        var container = render(_jsx(TopNavBar, { center: _jsxs(_Fragment, { children: [_jsx("a", __assign({ rel: "noopener noreferrer", href: "/#" }, { children: "home" }), void 0), _jsx("a", __assign({ rel: "noopener noreferrer", href: "/#" }, { children: "services" }), void 0), _jsx("a", __assign({ rel: "noopener noreferrer", href: "/#" }, { children: "services2" }), void 0)] }, void 0) }, void 0)).container;
        var centerItemsElements = container.firstElementChild.children[1].children;
        expect(centerItemsElements).toHaveLength(3);
        expect(container.firstElementChild.children[1]).toHaveClass('justify-end');
    });
    test('with "children" property to work correctly', function () {
        var container = render(_jsxs(TopNavBar, __assign({ centerPos: "start" }, { children: [_jsx("a", __assign({ rel: "noopener noreferrer", href: "/#" }, { children: "home" }), void 0), _jsx("a", __assign({ rel: "noopener noreferrer", href: "/#" }, { children: "services" }), void 0), _jsx("a", __assign({ rel: "noopener noreferrer", href: "/#" }, { children: "services2" }), void 0), "text"] }), void 0)).container;
        var centerItemsElements = container.firstElementChild.children[1].children;
        expect(centerItemsElements).toHaveLength(4);
    });
    test('with "children" and "center" properties to work correctly', function () {
        var container = render(_jsxs(TopNavBar, __assign({ center: _jsxs(_Fragment, { children: [_jsx("a", __assign({ rel: "noopener noreferrer", href: "/#" }, { children: "home" }), void 0), _jsx("a", __assign({ rel: "noopener noreferrer", href: "/#" }, { children: "services" }), void 0), _jsx("a", __assign({ rel: "noopener noreferrer", href: "/#" }, { children: "services2" }), void 0), "text"] }, void 0), centerPos: "start" }, { children: [_jsx("a", __assign({ rel: "noopener noreferrer", href: "/#" }, { children: "home" }), void 0), _jsx("a", __assign({ rel: "noopener noreferrer", href: "/#" }, { children: "services" }), void 0), _jsx("a", __assign({ rel: "noopener noreferrer", href: "/#" }, { children: "services2" }), void 0)] }), void 0)).container;
        var centerItemsElementsContainer = container.firstElementChild.children[1];
        expect(centerItemsElementsContainer).toHaveClass('pr-8');
        expect(centerItemsElementsContainer).toHaveClass('justify-start');
        var rightItemsElementsContainer = container.firstElementChild.children[2];
        expect(rightItemsElementsContainer).toHaveClass('flex-0');
    });
    test('with "id" property to work correctly', function () {
        var id = 'abc123';
        var container = render(_jsx(TopNavBar, { id: id }, void 0)).container;
        var navElement = container.firstElementChild;
        expect(navElement.getAttribute('id')).toEqual(id);
    });
});
//# sourceMappingURL=TopNavBar.test.js.map