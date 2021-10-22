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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconCustom, Divider } from '../../../exports';
var previewConfig = {
    name: 'Card',
    defaultState: {
        background: 'light',
        image: false,
        icon: false,
        componentProps: {
            title: 'Lorem Ipsum Dolor Sit Amet',
            dark: false,
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'image',
                properties: {
                    image: 'data:image/png;base64,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',
                    alt: 'example',
                },
            },
            {
                name: 'icon',
                properties: {
                    icon: 'StarOutline',
                },
            },
        ],
    },
    background: {
        type: 'select',
        options: [
            {
                name: 'light',
                properties: {
                    dark: false,
                },
            },
            {
                name: 'dark',
                properties: {
                    dark: true,
                },
            },
        ],
    },
};
var Card = function (_a) {
    var title = _a.title, _b = _a.className, className = _b === void 0 ? '' : _b, alt = _a.alt, dark = _a.dark, icon = _a.icon, image = _a.image, children = _a.children, otherProps = __rest(_a, ["title", "className", "alt", "dark", "icon", "image", "children"]);
    return (_jsxs("div", __assign({ className: "rounded-md shadow-0-3-6-dark-gray-1 " + (dark ? 'bg-light-gray' : 'bg-white') + " " + className }, otherProps, { children: [image && _jsx("img", { src: image, alt: alt, className: "w-full max-h-48 rounded-md" }, void 0), _jsxs("div", __assign({ className: "p-8" }, { children: [icon && _jsx(IconCustom, { icon: icon, className: "text-blue h-12 mb-4" }, void 0), _jsx("div", __assign({ className: "font-title text-xl text-dark-gray tracking-smallest" }, { children: title }), void 0), _jsx(Divider, { className: "my-4" }, void 0), _jsx("div", __assign({ className: "text-medium-dark-gray font-body text-base text-left tracking-normal" }, { children: children }), void 0)] }), void 0)] }), void 0));
};
export default Card;
export { previewConfig };
//# sourceMappingURL=Card.js.map