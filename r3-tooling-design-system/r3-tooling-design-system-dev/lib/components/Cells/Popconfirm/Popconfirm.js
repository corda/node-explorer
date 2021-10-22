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
import { useRef, useEffect } from 'react';
import { Button } from '../../../exports';
import './Popconfirm.scss';
var previewConfig = {
    name: 'Popconfirm',
    defaultState: {
        show: true,
        componentProps: {
            show: true,
            onClose: function () {
                return null;
            },
            className: 'relative',
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'Custom accept text',
                properties: {
                    acceptText: 'I accept',
                },
            },
            {
                name: 'Custom refuse text',
                properties: {
                    refuseText: 'I refuse',
                },
            },
        ],
    },
    position: {
        type: 'radio',
        values: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'],
    },
};
var Popconfirm = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.position, position = _c === void 0 ? 'topRight' : _c, show = _a.show, _d = _a.acceptText, acceptText = _d === void 0 ? 'Yes' : _d, _e = _a.refuseText, refuseText = _e === void 0 ? 'No' : _e, onAccept = _a.onAccept, onClose = _a.onClose, onRefuse = _a.onRefuse, children = _a.children, otherProps = __rest(_a, ["className", "position", "show", "acceptText", "refuseText", "onAccept", "onClose", "onRefuse", "children"]);
    var parentClass, childClass;
    switch (position) {
        case 'topLeft':
            parentClass = '-top-4';
            childClass = 'topLeft bottom-full left-0';
            break;
        case 'bottomRight':
            parentClass = '-bottom-4';
            childClass = 'bottomRight top-full right-0';
            break;
        case 'bottomLeft':
            parentClass = '-bottom-4';
            childClass = 'bottomLeft top-full left-0';
            break;
        case 'topRight':
        default:
            parentClass = '-top-4';
            childClass = 'topRight bottom-full right-0';
            break;
    }
    var popconfirmRef = useRef(null);
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (popconfirmRef.current && !popconfirmRef.current.contains(event.target)) {
                onClose();
            }
        };
        var closeOnEscPress = function (event) {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        show && document.addEventListener('keydown', closeOnEscPress);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', closeOnEscPress);
        };
    }, [onClose, show]);
    return show ? (_jsx("div", __assign({ ref: popconfirmRef, className: "popconfirm block absolute w-full " + parentClass + " " + className }, otherProps, { children: _jsxs("div", __assign({ className: "popconfirm-text z-10 absolute bg-light-gray text-sm text-dark-gray text-left p-4 rounded-md shadow-0-3-6-dark-gray-1 " + childClass }, { children: [children, _jsxs("div", __assign({ className: "flex justify-end pt-4" }, { children: [_jsx(Button, __assign({ size: "small", variant: "label", noPaddingFocus: true, className: "mr-4", onClick: onRefuse }, { children: refuseText }), void 0), _jsx(Button, __assign({ size: "small", variant: "tertiary", noPaddingFocus: true, onClick: onAccept }, { children: acceptText }), void 0)] }), void 0)] }), void 0) }), void 0)) : null;
};
export default Popconfirm;
export { previewConfig };
//# sourceMappingURL=Popconfirm.js.map