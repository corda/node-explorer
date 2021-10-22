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
import { useEffect, useState } from 'react';
import { v4 as uniqId } from 'uuid';
import { IconCustom } from '../../../exports';
import { R3DesignSystemStore } from '../../../utils/helpers';
import Backdrop from '../../Atoms/Backdrop/Backdrop';
var previewConfig = {
    name: 'Modal',
    trigger: true,
    triggerText: 'Toggle modal',
    triggerFn: function () {
        var newState = __assign({}, this.state);
        var newCompProps = __assign({}, this.state.componentProps);
        newState.open = this.state.open;
        newCompProps.open = !newState.open;
        this.setState({ open: !newState.open, componentProps: newCompProps });
    },
    defaultState: {
        size: 'large',
        open: false,
        withBackdrop: false,
        closeOnOutsideClick: false,
        componentProps: {
            size: 'large',
            title: 'Lorem Ipsum',
            open: false,
            onClose: function () {
                var newComponentProps = __assign({}, this.state.componentProps);
                newComponentProps.open = false;
                this.setState({ componentProps: newComponentProps, open: false });
            },
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'withBackdrop',
                properties: {
                    withBackdrop: true,
                },
            },
            {
                name: 'open',
                properties: {
                    open: true,
                },
            },
            {
                name: 'closeOnOutsideClick',
                properties: {
                    closeOnOutsideClick: true,
                },
            },
        ],
    },
    variant: {
        type: 'radio',
        values: ['danger', 'warning', 'success'],
    },
    size: {
        type: 'radio',
        values: ['large', 'small'],
    },
};
var Modal = function (_a) {
    var size = _a.size, title = _a.title, _b = _a.className, className = _b === void 0 ? '' : _b, open = _a.open, variant = _a.variant, withBackdrop = _a.withBackdrop, closeOnOutsideClick = _a.closeOnOutsideClick, onClose = _a.onClose, children = _a.children, otherProps = __rest(_a, ["size", "title", "className", "open", "variant", "withBackdrop", "closeOnOutsideClick", "onClose", "children"]);
    var componentId = useState(uniqId())[0];
    var _c = useState(50), componentLayerPosition = _c[0], setComponentLayerPosition = _c[1];
    var icon = variant === 'danger'
        ? 'CloseCircleOutline'
        : variant === 'warning'
            ? 'AlertOutline'
            : 'success'
                ? 'CheckAll'
                : '';
    var iconColour = variant === 'danger'
        ? 'text-red'
        : variant === 'warning'
            ? 'text-yellow'
            : variant === 'success'
                ? 'text-green'
                : '';
    useEffect(function () {
        open && R3DesignSystemStore.addOpenedComponent(componentId);
        open && document.body.classList.add('overflow-hidden');
        setComponentLayerPosition(R3DesignSystemStore.getOpenedComponentIndex(componentId, 50));
        return function () {
            document.body.classList.remove('overflow-hidden');
        };
    }, [open]);
    var handleOnClose = function () {
        R3DesignSystemStore.popOpenedComponent();
        onClose();
    };
    return open ? (_jsxs("div", __assign({ className: "modal fixed z-50 h-full w-full top-0 left-0 flex items-center flex-col py-10 " + (withBackdrop ? 'overflow-auto' : '') + " " + className, style: { zIndex: componentLayerPosition } }, { children: [_jsx(Backdrop, { parentComponentId: componentId, show: open, isTransparent: !withBackdrop, closeOnClick: closeOnOutsideClick, onClick: handleOnClose }, void 0), _jsxs("div", __assign({ className: "z-50 bg-light-gray rounded-md shadow-0-3-6-dark-gray-1 p-8 m-auto flex flex-col " + (withBackdrop ? 'relative' : 'max-h-full overflow-y-auto') + " " + (size === 'large' ? 'w-1/2' : 'w-1/3') }, otherProps, { children: [_jsx("div", __assign({ className: "flex justify-end w-full" }, { children: _jsx(IconCustom, { icon: "Close", className: "h-5-1/2 text-blue cursor-pointer", onClick: handleOnClose }, void 0) }), void 0), _jsxs("div", __assign({ className: "font-title text-2xl pb-4 " + (variant === 'danger'
                            ? 'text-red'
                            : variant === 'warning'
                                ? 'text-yellow'
                                : variant === 'success'
                                    ? 'text-green'
                                    : 'text-dark-gray') + " " + (size === 'small' ? 'text-left' : 'text-center') }, { children: [variant && (_jsx(IconCustom, { icon: icon, className: "inline h-7 mr-2 " + iconColour }, void 0)), title] }), void 0), _jsx("div", __assign({ className: size === 'large' ? 'text-center' : 'text-left' }, { children: children }), void 0)] }), void 0)] }), void 0)) : null;
};
export default Modal;
export { previewConfig };
//# sourceMappingURL=Modal.js.map