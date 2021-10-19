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
import { useState, isValidElement, Children, useRef, useEffect, } from 'react';
import { v4 as uniqId } from 'uuid';
import './SideBar.scss';
import { IconCustom, SideBarItem } from '../../../exports';
var previewConfig = {
    name: 'Sidebar',
    defaultState: {
        open: false,
        toggable: false,
        multipleActiveItems: false,
        componentProps: {
            open: false,
            toggable: false,
            onToggle: function () {
                var newComponentProps = __assign({}, this.state.componentProps);
                newComponentProps.open = !newComponentProps.open;
                this.setState({
                    componentProps: newComponentProps,
                    open: newComponentProps.open,
                });
            },
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'toggable',
                properties: {
                    toggable: true,
                    open: false,
                },
            },
            {
                name: 'open',
                properties: {
                    open: true,
                    toggable: true,
                },
            },
            {
                name: 'multipleActiveItems',
                properties: {
                    multipleActiveItems: true,
                },
            },
        ],
    },
};
var SideBar = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, id = _a.id, _c = _a.open, open = _c === void 0 ? false : _c, _d = _a.multipleActiveItems, multipleActiveItems = _d === void 0 ? false : _d, _e = _a.toggable, toggable = _e === void 0 ? false : _e, children = _a.children, _f = _a.onToggle, onToggle = _f === void 0 ? function () { } : _f, otherProps = __rest(_a, ["className", "id", "open", "multipleActiveItems", "toggable", "children", "onToggle"]);
    var asideRef = useRef(null);
    var _g = useState(open), isOpened = _g[0], setIsOpened = _g[1];
    var sideBarId = useState(id ? id : uniqId())[0];
    var level = -1;
    var toggleMenu = function (shouldOpen) {
        if (toggable) {
            open = shouldOpen;
            setIsOpened(open);
            onToggle(open);
        }
    };
    useEffect(function () {
        if (open !== isOpened && toggable) {
            setIsOpened(open);
        }
    }, [open]);
    var traverseChildren = function (childrenRoot, level) {
        var shouldOpenMenu = !open && childrenRoot.props.title.type !== 'a';
        level++;
        return (_jsx(SideBarItem, __assign({}, childrenRoot.props, (shouldOpenMenu
            ? {
                onClick: function (e) {
                    var _a;
                    if ((_a = childrenRoot.props) === null || _a === void 0 ? void 0 : _a.children) {
                        toggleMenu(true);
                    }
                },
            }
            : {}), { level: level, multipleActiveItems: multipleActiveItems }, { children: childrenRoot.props &&
                childrenRoot.props.children &&
                Children.map(childrenRoot.props.children, function (child, i) {
                    if (isValidElement(child)) {
                        return traverseChildren(child, level);
                    }
                }) }), void 0));
    };
    return (_jsx("aside", __assign({ ref: asideRef, id: sideBarId, className: "sidebar bg-dark-gray " + (isOpened ? 'open' : '') + " " + (toggable ? 'sidebar-toggable' : 'relative') + " " + className }, otherProps, { children: _jsxs("div", __assign({ className: "sidebar-container py-3 relative px-6 z-0" }, { children: [toggable && (_jsx(IconCustom, { icon: isOpened ? 'MenuOpen' : 'Menu', className: "sidebar-icon-toggle h-5 text-white cursor-pointer mx-auto w-8 my-3 inline-block", onClick: function () { return toggleMenu(!isOpened); } }, void 0)), Children.map(children, function (child, i) {
                    if (isValidElement(child)) {
                        return traverseChildren(child, level);
                    }
                })] }), void 0) }), void 0));
};
export default SideBar;
export { previewConfig };
//# sourceMappingURL=SideBar.js.map