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
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { R3DesignSystemStore } from '../../../utils/helpers';
var Backdrop = function (_a) {
    var show = _a.show, onClick = _a.onClick, _b = _a.isTransparent, isTransparent = _b === void 0 ? false : _b, closeOnClick = _a.closeOnClick, parentComponentId = _a.parentComponentId, otherProps = __rest(_a, ["show", "onClick", "isTransparent", "closeOnClick", "parentComponentId"]);
    var backDropRef = useRef(null);
    useEffect(function () {
        var backDropRefElement = backDropRef.current;
        var handleBackdropClick = function (event) {
            if (event.target === event.currentTarget) {
                onClick();
            }
        };
        var closeOnEscPress = function (event) {
            if (event.keyCode === 27) {
                if (parentComponentId === R3DesignSystemStore.getLastOpenedComponent()) {
                    onClick();
                }
            }
        };
        closeOnClick &&
            backDropRefElement.addEventListener('click', handleBackdropClick);
        document.addEventListener('keydown', closeOnEscPress);
        return function () {
            backDropRefElement.removeEventListener('click', handleBackdropClick);
            document.removeEventListener('keydown', closeOnEscPress);
        };
    }, [closeOnClick, onClick, show]);
    return show ? (_jsx("div", __assign({ ref: backDropRef, className: "backdrop w-full h-full fixed left-0 top-0 opacity-50 z-40 " + (isTransparent ? '' : 'bg-dark-gray-400') }, otherProps), void 0)) : null;
};
export default Backdrop;
//# sourceMappingURL=Backdrop.js.map