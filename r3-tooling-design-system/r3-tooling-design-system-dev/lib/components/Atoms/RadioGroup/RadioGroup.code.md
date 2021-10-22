<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <RadioGroup>
        <RadioButton value="lorem" key="lorem">
            Lorem ipsum
        </RadioButton>
        <RadioButton value="dolor" key="dolor">
            Dolor sit amet
        </RadioButton>
    </RadioGroup>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type                  | Required? | Notes                                                                                                                                                                                                                                      |
| :---------- | :-------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| groupName   | string                | yes       | Specifies the 'name' property of the radio buttons within the group.                                                                                                                                                                       |
| label       | string                | yes       | Specifies a title for the radio group.                                                                                                                                                                                                     |
| value       | string                | yes       | Specifies the value of the selected radio button (either by default or as the result of the calling of the onChange function).                                                                                                             |
| onChange    | function (any) => any | yes       | Specifies a function that handles the behaviour of the radio group.                                                                                                                                                                        |
| className   | string                | no        | Classnames can be passed to the outermost wrapping `<fieldset>` element of the component.                                                                                                                                                  |
| dark        | boolean               | no        | When "dark" is set to true, the input fields will take on a light gray background colour. When the component is part of a form that is on a light background, both the form and the component should have the "dark" property set to true. |
| invalid     | boolean               | no        | If it's true, all the radio buttons in the radio group will be styled as invalid (with a red border).                                                                                                                                      |
| Other Props | any                   | no        | Any other props that a `<fieldset>` element can take. These will be applied to the outermost wrapping `<fieldset>` element of the component.                                                                                               |


<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

The children of the `<RadioGroup>` component are `<RadioButton>` components. Pass in the text that should display to the right of each radio button as a child to the respective `<RadioButton>` component.
Please note that `<RadioButton>` components should always be wrapped in a `<RadioGroup>` component.
Each `<RadioButton>` component can have the following properties:

| Property    | Type    | Required? | Notes                                                                                                                                |
| :---------- | :------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| value       | string  | yes       |                                                                                                                                      |
| className   | string  | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                 |
| disabled    | boolean | no        |                                                                                                                                      |
| id          | string  | no        | If an id is provided, it will be used as the element's id. If not, the component will generate an unique id.                         |
| Other Props | any     | no        | Any other props that a `<input type='radio'>` element can take. These will be applied to the `<input>` element within the component. |
