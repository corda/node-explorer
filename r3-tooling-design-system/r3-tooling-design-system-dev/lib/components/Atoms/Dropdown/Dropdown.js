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
import { Children, isValidElement, cloneElement, useState, useEffect, useRef, } from 'react';
import './Dropdown.scss';
var previewConfig = {
    name: 'Dropdown',
    defaultState: {
        closeOnSelectOption: false,
        icon: false,
        componentProps: {
            closeOnSelectOption: false,
        },
    },
    modifiers: {
        type: 'checkbox',
        options: [
            {
                name: 'closeOnSelectOption',
                properties: {
                    closeOnSelectOption: true,
                },
            },
        ],
    },
    childrenProps: {
        type: 'checkbox',
        options: [
            {
                name: 'icon',
                properties: {
                    icon: 'StarOutline',
                },
            },
            {
                name: 'active',
                properties: {
                    active: true,
                },
            },
        ],
    },
};
var Dropdown = function (_a) {
    var trigger = _a.trigger, _b = _a.className, className = _b === void 0 ? '' : _b, checkbox = _a.checkbox, positionX = _a.positionX, positionY = _a.positionY, closeOnSelectOption = _a.closeOnSelectOption, children = _a.children, onSelect = _a.onSelect, block = _a.block, otherProps = __rest(_a, ["trigger", "className", "checkbox", "positionX", "positionY", "closeOnSelectOption", "children", "onSelect", "block"]);
    var _c = useState(false), dropdownOpen = _c[0], setDropdownOpen = _c[1];
    var dropdownRef = useRef(null);
    var positions = {
        top: 'bottom-full',
        right: 'right-0',
        bottom: 'top-full',
        left: 'left-0',
    };
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    var toggleDropdown = function (event) {
        event.preventDefault();
        !event.target['getAttribute']('data-dropdown') && setDropdownOpen(!dropdownOpen);
    };
    var triggerWithProps = Children.map(trigger, function (child, index) {
        if (isValidElement(child)) {
            if (checkbox) {
                return cloneElement(child, __assign(__assign({}, child.props), { focused: checkbox && dropdownOpen ? true : undefined }));
            }
            else {
                return cloneElement(child, __assign(__assign({}, child.props), { focused: checkbox && dropdownOpen ? true : undefined, className: child.props.className + " " + (dropdownOpen && !checkbox ? 'active' : '') }));
            }
        }
    });
    var childrenWithProps = Children.map(children, function (child, index) {
        if (isValidElement(child)) {
            return cloneElement(child, __assign(__assign({}, child.props), { onSelect: onSelect, dropdown: true, checkbox: checkbox }));
        }
    });
    return (_jsxs("div", __assign({ className: "dropdown relative " + className, ref: dropdownRef, onClick: function (event) {
            closeOnSelectOption && toggleDropdown(event);
        } }, otherProps, { children: [_jsx("div", __assign({ onClick: function (event) {
                    !closeOnSelectOption && toggleDropdown(event);
                }, className: "cursor-pointer" }, { children: triggerWithProps }), void 0), _jsx("div", __assign({ className: (positionX ? positions[positionX] : '') + " " + (positionY ? positions[positionY] : '') + " dropdown-options " + (block ? 'w-full' : 'w-48') + " max-h-48 absolute overflow-y-auto bg-light-gray shadow-0-3-6-dark-gray-1 z-10 " + (checkbox ? 'right-0 mt-2' : '') + " " + (dropdownOpen ? 'block' : 'hidden') }, { children: childrenWithProps }), void 0)] }), void 0));
};
export default Dropdown;
export { previewConfig };
//# sourceMappingURL=Dropdown.js.map