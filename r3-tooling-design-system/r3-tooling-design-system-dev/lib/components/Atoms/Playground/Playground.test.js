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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Playground from './Playground';
import Alert from './../Alert/Alert';
import Card from './../Card/Card';
import Tabs from './../Tabs/Tabs';
import Tab from '../Tabs/Tab/Tab';
import { alertConfig, cardConfig, radioGroupConfig, } from './../../../previewExports';
import RadioGroup from './../RadioGroup/RadioGroup';
import RadioButton from './../RadioButton/RadioButton';
describe('<Playground /> component', function () {
    test("should output function'sbody  passed by a component's property as a `string`", function () {
        var testFunction = function (event) {
            return 'Empty';
        };
        var tabsConfig = {
            name: 'Tabs',
            defaultState: {
                variant: 'light',
                selected: 0,
                componentProps: {
                    variant: 'light',
                    selected: 0,
                    onChange: testFunction,
                },
            },
            variant: {
                type: 'radio',
                values: ['dark', 'light'],
            },
            selected: {
                type: 'radio',
                values: [0, 1, 2, 3],
            },
        };
        var container = render(_jsx(Playground, __assign({ config: tabsConfig }, { children: _jsxs(Tabs, { children: [_jsx(Tab, __assign({ name: "design" }, { children: "content for design" }), void 0), _jsx(Tab, __assign({ name: "code" }, { children: "content for code" }), void 0)] }, void 0) }), void 0)).container;
        var codeSnippetElement = container.querySelector('.codesnippet');
        expect(codeSnippetElement).toHaveTextContent("<Tabs onChange={event => { return 'Empty'; }} selected={0} variant=\"light\" > <Tab name=\"design\"> content for design </Tab> <Tab name=\"code\"> content for code </Tab> </Tabs>");
    });
    test('with <Alert /> component to be in the DOM tree', function () {
        var container = render(_jsx(Playground, __assign({ config: alertConfig }, { children: _jsx(Alert, { children: "Lorem ipsum dolor sit amet" }, void 0) }), void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with <Alert /> component if "codesnippet" displays correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, codeSnippetElement;
        return __generator(this, function (_a) {
            container = render(_jsx(Playground, __assign({ config: alertConfig }, { children: _jsx(Alert, { children: "Alert text" }, void 0) }), void 0)).container;
            codeSnippetElement = container.querySelector('.codesnippet');
            expect(codeSnippetElement).toBeInTheDocument();
            expect(codeSnippetElement).toHaveTextContent('<Alert variant="danger"> Alert text </Alert>');
            return [2];
        });
    }); });
    test('with <Alert /> component - "checkboxModifiers"', function () { return __awaiter(void 0, void 0, void 0, function () {
        var alertComponentText, checkBoxModifiers, withTitleModifier, withIconModifier, alertComponent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    alertComponentText = 'Alert text';
                    render(_jsx(Playground, __assign({ config: alertConfig }, { children: _jsx(Alert, { children: alertComponentText }, void 0) }), void 0));
                    checkBoxModifiers = screen.queryAllByRole('checkbox');
                    expect(checkBoxModifiers).toHaveLength(2);
                    withTitleModifier = checkBoxModifiers[0];
                    withIconModifier = checkBoxModifiers[1];
                    alertComponent = screen.getByText(alertComponentText).parentElement;
                    expect(alertComponent).toBeInTheDocument();
                    expect(alertComponent.children).toHaveLength(1);
                    expect(alertComponent.children[0].children).toHaveLength(0);
                    return [4, fireEvent.click(withTitleModifier)];
                case 1:
                    _a.sent();
                    expect(alertComponent.children).toHaveLength(2);
                    expect(screen.getByText('lorem ipsum')).toBeInTheDocument();
                    return [4, fireEvent.click(withIconModifier)];
                case 2:
                    _a.sent();
                    expect(alertComponent.children[1].children).toHaveLength(1);
                    return [4, fireEvent.click(withIconModifier)];
                case 3:
                    _a.sent();
                    expect(alertComponent.children[1].children).toHaveLength(0);
                    return [2];
            }
        });
    }); });
    test('with <Alert /> component - "radioButtonsModifiers"', function () { return __awaiter(void 0, void 0, void 0, function () {
        var alertComponentText, variantRadioModifiers, dangerRadioModifier, warningRadioModifier, successRadioModifier, alertComponent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    alertComponentText = 'Alert text';
                    render(_jsx(Playground, __assign({ config: alertConfig }, { children: _jsx(Alert, { children: alertComponentText }, void 0) }), void 0));
                    variantRadioModifiers = screen.queryAllByRole('radio');
                    expect(variantRadioModifiers).toHaveLength(3);
                    dangerRadioModifier = variantRadioModifiers[0];
                    warningRadioModifier = variantRadioModifiers[1];
                    successRadioModifier = variantRadioModifiers[2];
                    alertComponent = screen.getByText(alertComponentText).parentElement;
                    expect(alertComponent).toHaveClass('alert-danger');
                    return [4, fireEvent.click(warningRadioModifier)];
                case 1:
                    _a.sent();
                    expect(alertComponent).toHaveClass('alert-warning');
                    return [4, fireEvent.click(successRadioModifier)];
                case 2:
                    _a.sent();
                    expect(alertComponent).toHaveClass('alert-success');
                    return [4, fireEvent.click(dangerRadioModifier)];
                case 3:
                    _a.sent();
                    expect(alertComponent).toHaveClass('alert-danger');
                    return [2];
            }
        });
    }); });
    test('with <Card /> component - "dropdownModifiers"', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, playgroundComponentField, dropdownPickers, backgroundDropdownPicker, backgroundDropdownPickerOptions, darkBackgroundOption;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = render(_jsx(Playground, __assign({ config: cardConfig }, { children: _jsx(Card, { children: "Alert text" }, void 0) }), void 0)).container;
                    playgroundComponentField = container.querySelector('.playground-main');
                    expect(playgroundComponentField).toHaveClass('with-header');
                    expect(playgroundComponentField).toHaveClass('bg-medium-light-gray-100');
                    dropdownPickers = container.querySelectorAll('.dropdown');
                    backgroundDropdownPicker = dropdownPickers[0];
                    return [4, fireEvent.click(backgroundDropdownPicker)];
                case 1:
                    _a.sent();
                    backgroundDropdownPickerOptions = backgroundDropdownPicker.querySelectorAll('.dropdown-item');
                    expect(backgroundDropdownPickerOptions).toHaveLength(2);
                    darkBackgroundOption = backgroundDropdownPickerOptions[1];
                    return [4, fireEvent.click(darkBackgroundOption)];
                case 2:
                    _a.sent();
                    expect(playgroundComponentField).toHaveClass('bg-dark-gray');
                    return [2];
            }
        });
    }); });
    test('with <RadioGroup /> component - "childrenControls"', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, checkBoxModifiers, childrenControlsCheckboxModifier, radioGroupElement, radioButtonOptionElements, formElements, radioGroupForm;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = render(_jsx(Playground, __assign({ config: radioGroupConfig }, { children: _jsxs(RadioGroup, { children: [_jsx(RadioButton, __assign({ value: "lorem" }, { children: "Lorem ipsum" }), "lorem"), _jsx(RadioButton, __assign({ value: "dolor" }, { children: "Dolor sit amet" }), "dolor")] }, void 0) }), void 0)).container;
                    checkBoxModifiers = screen.queryAllByRole('checkbox');
                    expect(checkBoxModifiers).toHaveLength(4);
                    childrenControlsCheckboxModifier = checkBoxModifiers[3];
                    radioGroupElement = container.querySelector('.radio-group');
                    expect(radioGroupElement).toBeInTheDocument();
                    return [4, fireEvent.click(childrenControlsCheckboxModifier)];
                case 1:
                    _a.sent();
                    radioButtonOptionElements = radioGroupElement.querySelectorAll('input[type=radio]');
                    expect(radioButtonOptionElements).toHaveLength(2);
                    expect(radioButtonOptionElements[0]).toBeDisabled();
                    formElements = container.querySelectorAll('form');
                    expect(formElements).toHaveLength(2);
                    radioGroupForm = formElements[0];
                    return [4, fireEvent.submit(radioGroupForm)];
                case 2:
                    _a.sent();
                    expect(radioGroupForm.getAttribute('onSubmit')).toBeNull();
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=Playground.test.js.map