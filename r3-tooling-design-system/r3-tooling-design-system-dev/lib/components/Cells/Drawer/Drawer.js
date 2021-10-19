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
import { IconCustom, Divider } from '../../../exports';
import { R3DesignSystemStore } from '../../../utils/helpers';
import Backdrop from '../../Atoms/Backdrop/Backdrop';
var previewConfig = {
    name: 'drawer',
    trigger: true,
    triggerText: 'Open drawer',
    triggerFn: function () {
        var newState = __assign({}, this.state);
        var newCompProps = __assign({}, this.state.componentProps);
        newState.open = this.state.open;
        newCompProps.open = !newState.open;
        this.setState({ open: !newState.open, componentProps: newCompProps });
    },
    defaultState: {
        position: 'top',
        open: false,
        componentProps: {
            title: 'Drawer',
            position: 'top',
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
            {
                name: 'horizontalWidth',
                properties: {
                    horizontalWidth: '80%',
                },
            },
        ],
    },
    position: {
        type: 'radio',
        values: ['top', 'right', 'bottom', 'left'],
    },
};
var Drawer = function (_a) {
    var position = _a.position, title = _a.title, _b = _a.className, className = _b === void 0 ? '' : _b, open = _a.open, horizontalWidth = _a.horizontalWidth, closeOnOutsideClick = _a.closeOnOutsideClick, onClose = _a.onClose, children = _a.children, otherProps = __rest(_a, ["position", "title", "className", "open", "horizontalWidth", "closeOnOutsideClick", "onClose", "children"]);
    var componentId = useState(uniqId())[0];
    var _c = useState(50), componentLayerPosition = _c[0], setComponentLayerPosition = _c[1];
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
    return open ? (_jsxs("div", __assign({ className: "drawer", style: { zIndex: componentLayerPosition } }, { children: [_jsx(Backdrop, { show: true, closeOnClick: closeOnOutsideClick, onClick: handleOnClose, parentComponentId: componentId }, void 0), _jsxs("div", __assign({ className: "flex flex-col fixed " + position + "-0 " + (position === 'left' || position === 'right'
                    ? 'top-0 h-full w-4/5 sm:w-1/3 md:w-1/3 lg:w-1/3'
                    : 'right-0 w-full max-h-1/2') + " bg-light-gray z-50 " + className, style: horizontalWidth && (position === 'left' || position === 'right')
                    ? { width: horizontalWidth }
                    : {} }, otherProps, { children: [_jsxs("div", __assign({ className: "flex justify-between px-6 pt-6 pb-4" }, { children: [_jsx("div", __assign({ className: "font-title text-xl text-dark-gray leading-normal" }, { children: title }), void 0), _jsx(IconCustom, { icon: "Close", className: "ml-4 text-blue h-5-1/2 cursor-pointer pt-1", onClick: handleOnClose }, void 0)] }), void 0), _jsx(Divider, {}, void 0), _jsx("div", __assign({ className: "flex flex-col flex-auto relative text-medium-dark-gray text-lg px-6 pb-6 pt-4" }, { children: children }), void 0)] }), void 0)] }), void 0)) : null;
};
export default Drawer;
export { previewConfig };
//# sourceMappingURL=Drawer.js.map