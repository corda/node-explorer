<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Select>
        <Option value="lorem" key="lorem">
            Lorem
        </Option>
        <Option value="ipsum" key="ipsum">
            Ipsum
        </Option>
        <Option value="dolor" key="dolor">
            Dolor
        </Option>
    </Select>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property     | Type                  | Required? | Notes                                                                                                                                                                                                                                       |
| :----------- | :-------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| label        | string                | yes       |                                                                                                                                                                                                                                             |
| value        | string                | yes       |                                                                                                                                                                                                                                             |
| onChange     | function (any) => any | yes       |                                                                                                                                                                                                                                             |
| className    | string                | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                                                                                                        |
| dark         | boolean               | no        | When "dark" is set to true, the select fields will take on a light gray background colour. When the component is part of a form that is on a light background, both the form and the component should have the "dark" property set to true. |
| disabled     | boolean               | no        |                                                                                                                                                                                                                                             |
| errorMessage | string                | no        | Specifies the text that will appear if the user enters invalid content.                                                                                                                                                                     |
| helpText     | string                | no        | Specifies the text that is visible underneath the field that helps the user understand what they need to enter.                                                                                                                             |
| id           | string                | no        | If an id is provided, it will be used as the element's id. If not, the component will generate an unique id.                                                                                                                                |
| invalid      | boolean               | no        | Used to specify conditions which would make the field invalid.                                                                                                                                                                              |
| required     | boolean               | no        |                                                                                                                                                                                                                                             |
| Other Props  | any                   | no        | Any other props that a `<select>` element can take. These will be applied to the `<select>` element within the component.                                                                                                                   |

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

The children of the `<Select>` component are `<Option>` components. Each `<Option>` component within a `<Select>` component can have the following properties:

| Property    | Type    | Required? | Notes                                                                                                                             |
| :---------- | :------ | :-------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| value       | string  | yes       |                                                                                                                                   |
| className   | string  | no        | Classnames can be passed to the outermost wrapping `<option>` element of the component.                                           |
| disabled    | boolean | no        | If provided, it will hide the option.                                                                                             |
| Other Props | any     | no        | Any other props that an `<option>` can take. These will be applied to the outermost wrapping `<option>` element of the component. |
