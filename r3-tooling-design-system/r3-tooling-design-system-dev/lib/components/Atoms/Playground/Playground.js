var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Component, Children, isValidElement, cloneElement } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import './Playground.scss';
import { Form, Checkbox, FormGroup, RadioGroup, RadioButton, Dropdown, IconCustom, Option, CodeSnippet, Button, } from '../../../exports';
var Playground = (function (_super) {
    __extends(Playground, _super);
    function Playground() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = __assign(__assign({ UIState: _this.props.config }, _this.props.config.defaultState), { componentProps: __assign({}, _this.props.config.defaultState.componentProps), childrenProps: __assign({}, _this.props.config.defaultState.childrenProps) });
        _this.changeCheckboxHandler = function (key, props, children) {
            var _a;
            _this.setState((_a = {}, _a[key] = !_this.state[key] || false, _a), function () {
                _this.checkboxPropsHandler(key, props, children);
            });
        };
        _this.changeRadioHandler = function (key, value) {
            var _a;
            _this.setState((_a = {}, _a[key] = value, _a), function () {
                _this.radioPropsHandler(key, value);
            });
        };
        _this.changeSelectHandler = function (key, value) {
            var _a;
            _this.setState((_a = {}, _a[key] = value, _a), function () {
                _this.selectPropsHandler(key, value);
            });
        };
        _this.checkboxPropsHandler = function (key, props, isChildren) {
            var tempProps = isChildren
                ? __assign({}, _this.state.childrenProps) : __assign({}, _this.state.componentProps);
            if (_this.state[key]) {
                for (var prop in props) {
                    tempProps[prop] = props[prop];
                }
            }
            else {
                for (var prop in props) {
                    tempProps[prop] = isChildren ? '' : false;
                }
            }
            for (var prop in tempProps) {
                if (key !== prop) {
                    tempProps[prop] = props[prop] ? props[prop] : tempProps[prop];
                }
            }
            isChildren
                ? _this.setState(__assign({ childrenProps: tempProps }, tempProps))
                : _this.setState(__assign({ componentProps: tempProps }, tempProps));
        };
        _this.radioPropsHandler = function (key, value) {
            var tempProps = __assign({}, _this.state.componentProps);
            tempProps[key] = value;
            _this.setState({ componentProps: tempProps });
        };
        _this.selectPropsHandler = function (key, value) {
            var options = _this.state.UIState[key].options;
            var props;
            for (var item in options) {
                if (options[item].name === value) {
                    props = options[item].properties;
                }
            }
            var tempProps = __assign(__assign({}, _this.state.componentProps), props);
            _this.setState({ componentProps: tempProps });
        };
        return _this;
    }
    Playground.prototype.componentDidMount = function () {
        var _this = this;
        var newCompProps = __assign({}, this.state.componentProps);
        Object.keys(this.props.config.defaultState.componentProps).forEach(function (propKey) {
            if (typeof _this.props.config.defaultState.componentProps[propKey] ===
                'function') {
                newCompProps[propKey] = function (event) {
                    return _this.props.config.defaultState.componentProps[propKey].call(_this, event);
                };
            }
        });
        this.setState({ componentProps: newCompProps });
        if (this.props.config.triggerFn) {
            var newState = __assign({}, this.state.UIState);
            newState.triggerFn = function () { return _this.props.config.triggerFn.call(_this); };
            this.setState({ UIState: newState });
        }
    };
    Playground.prototype.render = function () {
        var _this = this;
        var controlsAbove = [];
        var checkboxModifiers = [];
        var radioControls = [];
        var childrenControls = [];
        var _loop_1 = function (key) {
            if (this_1.state.UIState[key].type === 'select') {
                controlsAbove.push({
                    name: key,
                    options: this_1.state.UIState[key].options,
                    value: this_1.state.UIState[key].options[0].name,
                    change: function (selectedValue) { return _this.changeSelectHandler(key, selectedValue); },
                });
            }
            if (this_1.state.UIState[key].type === 'checkbox') {
                this_1.state.UIState[key].options.forEach(function (item) {
                    if (key === 'childrenProps') {
                        childrenControls.push({
                            name: item.name,
                            change: function (event) {
                                return _this.changeCheckboxHandler(item.name, item.properties, true);
                            },
                        });
                    }
                    else {
                        checkboxModifiers.push({
                            name: item.name,
                            change: function (event) {
                                _this.changeCheckboxHandler(item.name, item.properties, false);
                            },
                        });
                    }
                });
            }
            if (this_1.state.UIState[key].type === 'radio') {
                radioControls.push({
                    name: key,
                    values: this_1.state.UIState[key].values,
                    change: function (value) { return _this.changeRadioHandler(key, value); },
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.entries(this.state.UIState); _i < _a.length; _i++) {
            var key = _a[_i][0];
            _loop_1(key);
        }
        var childrenEl = Children.map(this.props.children, function (child) {
            if (isValidElement(child)) {
                if (Object.keys(_this.state.childrenProps).length > 0) {
                    var childElements = child.props.children &&
                        Children.map(child.props.children, function (grandchild) {
                            if (isValidElement(grandchild)) {
                                return cloneElement(grandchild, __assign({}, _this.state.childrenProps));
                            }
                        });
                    return cloneElement(child, __assign({}, _this.state.componentProps), childElements);
                }
                else {
                    return cloneElement(child, __assign({}, _this.state.componentProps));
                }
            }
            return child;
        });
        return (_jsxs("div", __assign({ className: "playground flex flex-col w-full" }, { children: [_jsxs("div", __assign({ className: "flex flex-1 space-around" }, { children: [_jsxs("div", __assign({ className: "flex-1 bg-medium-light-gray-100" }, { children: [controlsAbove.length > 0 && (_jsx("div", __assign({ className: "playground-header flex justify-around items-center border-b-2 border-medium-light-gray-200" }, { children: controlsAbove.map(function (control) {
                                        return (_jsx(Dropdown, __assign({ closeOnSelectOption: true, trigger: _jsxs("span", __assign({ className: "text-dark-gray font-bold text-sm uppercase text-center tracking-widest cursor-pointer" }, { children: [control.name, ": ", _this.state[control.name], ' ', _jsx(IconCustom, { icon: "ChevronDown", className: "h-5 inline" }, void 0)] }), void 0) }, { children: control.options.map(function (option) {
                                                return (_jsx(Option, __assign({ value: option.name, onClick: function () { return control.change(option.name); }, active: _this.state[control.name] === option.name }, { children: option.name }), option.name));
                                            }) }), control.name));
                                    }) }), void 0)), _jsx("div", __assign({ className: "playground-main " + (controlsAbove.length > 0 ? 'with-header' : '') + " flex items-center justify-center p-24  " + (this.state.background === 'dark'
                                        ? this.state.UIState.form
                                            ? 'bg-white'
                                            : 'bg-dark-gray'
                                        : 'bg-medium-light-gray-100') }, { children: this.state.UIState.form ? (_jsxs(Form, __assign({ className: "w-full flex justify-center", dark: this.state.componentProps.dark, onSubmit: function () {
                                            return null;
                                        } }, { children: [' ', childrenEl, ' '] }), void 0)) : (_jsxs("div", __assign({ className: "flex justify-center w-full" }, { children: [this.state.UIState.trigger && (_jsx(Button, __assign({ size: "large", variant: "primary", onClick: this.state.UIState.triggerFn }, { children: this.state.UIState.triggerText }), void 0)), childrenEl] }), void 0)) }), void 0)] }), void 0), checkboxModifiers.length ||
                            radioControls.length ||
                            childrenControls.length ? (_jsxs(Form, __assign({ preview: true, dark: true, className: "overflow-y-auto w-1/4", onSubmit: function () {
                                return null;
                            }, title: this.state.UIState.name }, { children: [checkboxModifiers.length > 0 && (_jsx(FormGroup, __assign({ preview: true, legend: "modifiers" }, { children: checkboxModifiers.map(function (control) {
                                        return (_jsxs(Checkbox, __assign({ dark: true, value: control.name, checked: _this.state[control.name], onChange: control.change }, { children: [control.name, ' '] }), control.name));
                                    }) }), void 0)), childrenControls.length > 0 && (_jsx(FormGroup, __assign({ preview: true, legend: "children props" }, { children: childrenControls.map(function (control) {
                                        return (_jsxs(Checkbox, __assign({ dark: true, value: _this.state[control.name], onChange: control.change }, { children: [control.name, ' '] }), control.name));
                                    }) }), void 0)), radioControls.length > 0 &&
                                    radioControls.map(function (control) {
                                        return (_jsx(RadioGroup, __assign({ preview: true, label: control.name, groupName: control.name, value: _this.state[control.name], onChange: control.change }, { children: control.values.map(function (value) {
                                                return (_jsx(RadioButton, __assign({ dark: true, value: value }, { children: value }), value));
                                            }) }), control.name));
                                    })] }), void 0)) : null] }), void 0), _jsx(CodeSnippet, __assign({ flush: "top" }, { children: childrenEl.map(function (el) {
                        return reactElementToJSXString(el, {
                            displayName: function (el) {
                                if (isValidElement(el)) {
                                    if (typeof el.type !== 'string') {
                                        return el.props.mdxType
                                            ? el.props.mdxType
                                            : el.type['displayName']
                                                ? el.type['displayName']
                                                : el.type.name;
                                    }
                                    return el.type;
                                }
                                else {
                                    return el.toString();
                                }
                            },
                            filterProps: ['originalType', 'mdxType'],
                            showFunctions: true,
                            functionValue: function (funcAsString) {
                                var propKey = Object.keys(el['props']).find(function (key) { return el['props'][key] === funcAsString; });
                                return _this.props.config.defaultState.componentProps[propKey];
                            },
                        }).replace(/\s*\w+={undefined}/g, '');
                    }) }), void 0)] }), void 0));
    };
    return Playground;
}(Component));
export default Playground;
//# sourceMappingURL=Playground.js.map