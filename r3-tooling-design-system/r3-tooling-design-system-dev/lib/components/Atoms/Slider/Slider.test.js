import { jsx as _jsx } from "react/jsx-runtime";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Slider from './Slider';
import { useState } from 'react';
describe('<Slider /> component', function () {
    test('to be in the DOM tree', function () {
        var container = render(_jsx(Slider, { value: "50", onChange: function () {
                return;
            } }, void 0)).container;
        expect(container).toBeInTheDocument();
    });
    test('with `value="50.6"` property to work correctly', function () {
        var floatValue = '50.6';
        render(_jsx(Slider, { value: floatValue, onChange: function () {
                return;
            } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement.getAttribute('value')).toEqual(floatValue);
        var rangeInputElement = screen.getByRole('slider');
        expect(rangeInputElement.getAttribute('value')).toEqual(floatValue);
    });
    test('with `value="NaN"` property to work', function () {
        render(_jsx(Slider, { value: "NaN", onChange: function () {
                return;
            } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement.getAttribute('value')).toEqual('0');
        var rangeInputElement = screen.getByRole('slider');
        expect(rangeInputElement.getAttribute('value')).toEqual('0');
    });
    test('with "className" property to work correctly', function () {
        var container = render(_jsx(Slider, { className: "test-class", value: "50", onChange: function () {
                return;
            } }, void 0)).container;
        expect(container.firstChild).toHaveClass('test-class');
    });
    test('with empty "className" property to work correctly', function () {
        var container = render(_jsx(Slider, { className: "", value: "50", onChange: function () {
                return;
            } }, void 0)).container;
        expect(container.firstChild).not.toHaveClass('test-class');
        expect(container).toBeInTheDocument();
    });
    test('with "dark" property to display correctly', function () {
        render(_jsx(Slider, { dark: true, value: "50", onChange: function () {
                return;
            } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement).toHaveClass('bg-light-gray');
        expect(numberInputElement).not.toHaveClass('bg-white');
    });
    test('without "dark" property to display correctly', function () {
        render(_jsx(Slider, { value: "50", onChange: function () {
                return;
            } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement).toHaveClass('bg-white');
        expect(numberInputElement).not.toHaveClass('bg-light-gray');
    });
    test('with "disabled" property to display correctly', function () {
        render(_jsx(Slider, { disabled: true, value: "50", onChange: function () {
                return;
            } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement).toHaveClass('text-dark-gray-200 cursor-not-allowed');
        expect(numberInputElement).not.toHaveClass('text-blue');
        var rangeInputElement = screen.getByRole('slider');
        expect(rangeInputElement).toHaveClass('cursor-not-allowed');
    });
    test('without "disabled" property to display correctly', function () {
        render(_jsx(Slider, { value: "50", onChange: function () {
                return;
            } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement).not.toHaveClass('text-dark-gray-200 cursor-not-allowed');
        expect(numberInputElement).toHaveClass('text-blue');
        var rangeInputElement = screen.getByRole('slider');
        expect(rangeInputElement).not.toHaveClass('cursor-not-allowed');
    });
    test('with "id" property to work correctly', function () {
        var id = 'abc123';
        render(_jsx(Slider, { id: id, value: "1", onChange: function () {
                return;
            } }, void 0));
        var rangeInputElement = screen.getByRole('slider');
        expect(rangeInputElement).toHaveProperty('id', id);
    });
    test('without "id" property to work correctly', function () {
        render(_jsx(Slider, { value: "1", onChange: function () {
                return;
            } }, void 0));
        var rangeInputElement = screen.getByRole('slider');
        expect(rangeInputElement).not.toHaveProperty('id', 'test-id');
    });
    test('with "min" property to work correctly', function () {
        var miValue = '5';
        var value = '6';
        render(_jsx(Slider, { min: miValue, value: value, onChange: function () {
                return;
            } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement.getAttribute('value')).toEqual(value);
        expect(numberInputElement.getAttribute('min')).toEqual(miValue);
        expect(numberInputElement.getAttribute('max')).toEqual('100');
        var rangeInputElement = screen.getByRole('slider');
        expect(rangeInputElement.getAttribute('value')).toEqual(value);
        expect(rangeInputElement.getAttribute('min')).toEqual(miValue);
        expect(rangeInputElement.getAttribute('max')).toEqual('100');
    });
    test('with "min" property and lesser "value" property to work correctly', function () {
        var minValue = '5';
        var value = '3';
        render(_jsx(Slider, { min: minValue, value: value, onChange: function () {
                return;
            } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement.getAttribute('value')).toEqual(minValue);
        expect(numberInputElement.getAttribute('min')).toEqual(minValue);
        expect(numberInputElement.getAttribute('max')).toEqual('100');
        var rangeInputElement = screen.getByRole('slider');
        expect(rangeInputElement.getAttribute('value')).toEqual(minValue);
        expect(rangeInputElement.getAttribute('min')).toEqual(minValue);
        expect(rangeInputElement.getAttribute('max')).toEqual('100');
    });
    test('with "max" property to work correctly', function () {
        var maxValue = '99';
        var value = '3';
        render(_jsx(Slider, { max: maxValue, value: value, onChange: function () {
                return;
            } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement.getAttribute('value')).toEqual(value);
        expect(numberInputElement.getAttribute('min')).toEqual('0');
        expect(numberInputElement.getAttribute('max')).toEqual(maxValue);
        var rangeInputElement = screen.getByRole('slider');
        expect(rangeInputElement.getAttribute('value')).toEqual(value);
        expect(rangeInputElement.getAttribute('min')).toEqual('0');
        expect(rangeInputElement.getAttribute('max')).toEqual(maxValue);
    });
    test('with "max" property and bigger "value" property to work correctly', function () {
        var maxValue = '99';
        var value = '100';
        render(_jsx(Slider, { max: maxValue, value: value, onChange: function () {
                return;
            } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement.getAttribute('value')).toEqual(maxValue);
        expect(numberInputElement.getAttribute('min')).toEqual('0');
        expect(numberInputElement.getAttribute('max')).toEqual(maxValue);
        var rangeInputElement = screen.getByRole('slider');
        expect(rangeInputElement.getAttribute('value')).toEqual(maxValue);
        expect(rangeInputElement.getAttribute('min')).toEqual('0');
        expect(rangeInputElement.getAttribute('max')).toEqual(maxValue);
    });
    test('with "min" and "max" property to work correctly', function () {
        render(_jsx(Slider, { min: "1", max: "99", value: "6", onChange: function () {
                return;
            } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        expect(numberInputElement.getAttribute('value')).toEqual('6');
        expect(numberInputElement.getAttribute('min')).toEqual('1');
        expect(numberInputElement.getAttribute('max')).toEqual('99');
        var rangeInputElement = screen.getByRole('slider');
        expect(rangeInputElement.getAttribute('value')).toEqual('6');
        expect(rangeInputElement.getAttribute('min')).toEqual('1');
        expect(rangeInputElement.getAttribute('max')).toEqual('99');
    });
    test('"focus" on "number" input to work correctly', function () {
        render(_jsx(Slider, { value: "6", onChange: function () {
                return;
            } }, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        fireEvent.focus(numberInputElement);
        expect(numberInputElement).toHaveClass('focused');
        fireEvent.blur(numberInputElement);
        expect(numberInputElement).not.toHaveClass('focused');
    });
    test('"focus" on "range" input to work correctly', function () {
        render(_jsx(Slider, { value: "6", onChange: function () {
                return;
            } }, void 0));
        var rangeInputElement = screen.getByRole('slider');
        fireEvent.focus(rangeInputElement);
        expect(rangeInputElement).toHaveClass('focused');
        fireEvent.blur(rangeInputElement);
        expect(rangeInputElement).not.toHaveClass('focused');
    });
    test('"focus" on "range" input to work correctly', function () {
        var ParentContainer = function () {
            var _a = useState('2'), sliderValue = _a[0], setSliderValue = _a[1];
            return (_jsx(Slider, { value: sliderValue, onChange: function (event) { return setSliderValue(event.target.value); } }, void 0));
        };
        render(_jsx(ParentContainer, {}, void 0));
        var numberInputElement = screen.getByRole('spinbutton');
        fireEvent.focus(numberInputElement);
        fireEvent.change(numberInputElement, { target: { value: '3' } });
        expect(numberInputElement.getAttribute('value')).toEqual('3');
    });
});
//# sourceMappingURL=Slider.test.js.map