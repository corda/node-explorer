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
import { Pictogram } from '../../../exports';
var previewConfig = {
    name: 'dashboard item',
    defaultState: {
        withBackground: false,
        'Image or icon': 'icon',
        componentProps: {
            icon: 'AstronautFishing',
            withBackground: false,
            onClick: function () { },
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'withBackground',
                properties: {
                    withBackground: true,
                },
            },
        ],
    },
    'Image or icon': {
        type: 'select',
        options: [
            {
                name: 'icon',
                properties: {
                    image: false,
                    icon: 'AstronautFishing',
                },
            },
            {
                name: 'image',
                properties: {
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 359.2 273.7'%3E%3Cpath d='M359.2 158.7c0 12.6-10.3 22.9-22.9 22.9s-22.9-10.3-22.9-22.9c0-12.6 10.3-22.9 22.9-22.9 12.6 0 22.9 10.2 22.9 22.9' fill='%23ef382e'/%3E%3Cpath d='M222.9 91L254 45.8V0h-99l-31.5 45.8h74.7l-38.4 55.9 22.9 39.7c6.8-3.9 14.7-6.2 23.2-6.2 25.6 0 46.4 20.7 46.4 46.4S231.5 228 205.9 228s-46.4-20.8-46.4-46.4h-45.8c0 50.9 41.3 92.2 92.1 92.2 50.9 0 92.2-41.3 92.2-92.2 0-45.1-32.4-82.6-75.1-90.6M92 0C75.2 0 59.5 4.5 45.9 12.4V0H0v181.6h45.9V92c0-25.5 20.6-46.1 46.1-46.1l15.4-.1L138.9 0H92z'/%3E%3C/svg%3E",
                    icon: false,
                },
            },
        ],
    },
};
var DashboardItem = function (_a) {
    var alt = _a.alt, icon = _a.icon, image = _a.image, _b = _a.className, className = _b === void 0 ? '' : _b, withBackground = _a.withBackground, children = _a.children, onClick = _a.onClick;
    return (_jsxs("div", __assign({ className: className + " w-full items-center h-full flex flex-col justify-center p-6 " + (onClick ? 'cursor-pointer' : '') + " " + (withBackground ? 'bg-light-gray rounded-md' : ''), onClick: onClick }, { children: [image ? (_jsx("img", { src: image, alt: alt || '', height: "72px", width: "72px", className: "self-center pb-4" }, void 0)) : (_jsx(Pictogram, { icon: icon, className: "pb-4" }, void 0)), _jsx("span", __assign({ className: "text-xs text-dark-gray-300 uppercase tracking-large text-center font-bold" }, { children: children }), void 0)] }), void 0));
};
export default DashboardItem;
export { previewConfig };
//# sourceMappingURL=DashboardItem.js.map