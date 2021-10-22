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
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
import cardImage from './../../../assets/img/img--card--example.png';
describe('<Card /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Card, __assign({ title: "card-title" }, { children: "text" }), void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Card, { title: "card-title", className: "test-class" }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('test-class');
    });
    test('with "title" property to work correctly', function () {
        render(_jsx(Card, { title: "card-title" }, void 0));
        var titleElement = screen.getByText('card-title');
        expect(titleElement).toBeInTheDocument();
    });
    test('with "image" and without "alt" property to work correctly', function () {
        var container = render(_jsx(Card, { image: cardImage, title: "card-title" }, void 0)).container;
        var imageElement = container.firstElementChild.firstElementChild;
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.getAttribute('alt')).toBeNull();
    });
    test('without "image" and with "alt" property to work correctly', function () {
        var container = render(_jsx(Card, { alt: "image-alt", title: "card-title" }, void 0)).container;
        var imageElementSibling = container.firstElementChild.firstElementChild;
        expect(imageElementSibling).not.toHaveAttribute('alt');
    });
    test('with "image" and with "alt" property to work correctly', function () {
        var altText = "img-alt-txt";
        var container = render(_jsx(Card, { image: cardImage, alt: altText, title: "card-title" }, void 0)).container;
        var imageElement = container.firstElementChild.firstElementChild;
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.getAttribute('alt')).toEqual(altText);
    });
    test('with "icon" property to work correctly', function () {
        var container = render(_jsx(Card, { icon: "StarOutline", title: "card-title" }, void 0)).container;
        var iconElement = container.querySelector('.icon-container');
        expect(iconElement).toBeInTheDocument();
    });
    test('with "alt" property to work correctly', function () {
        var altText = "img-alt-txt";
        var container = render(_jsx(Card, { image: cardImage, alt: altText, title: "card-title" }, void 0)).container;
        var imageElement = container.firstElementChild.firstElementChild;
        expect(imageElement.getAttribute('alt')).toEqual(altText);
    });
    test('with "dark" property to work correctly', function () {
        var container = render(_jsx(Card, { title: "card-title", dark: true }, void 0)).container;
        expect(container.firstElementChild).toHaveClass('bg-light-gray');
    });
});
//# sourceMappingURL=Card.test.js.map