<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <MultiSelect>
        <Option key="lorem" value="lorem">
            Lorem
        </Option>
        <Option key="ipsum" value="ipsum">
            Ipsum
        </Option>
        <Option key="dolor" value="dolor">
            Dolor
        </Option>
    </MultiSelect>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property     | Type                  | Required? | Notes                                                                                                                                                                                                                                      |
| :----------- | :-------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label        | string                | yes       |                                                                                                                                                                                                                                            |
| value        | Array of strings        | yes       | Every value in the array should be unique                                                                                                                                                                                                                                          |
| onChange     | function (any) => any | yes       |                                                                                                                                                                                                                                            |
| className    | string                | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                                                                                                       |
| dark         | boolean               | no        | When "dark" is set to true, the input fields will take on a light gray background colour. When the component is part of a form that is on a light background, both the form and the component should have the "dark" property set to true. |
| disabled     | boolean               | no        |                                                                                                                                                                                                                                            |
| errorMessage | string                | no        | Specifies the text that will appear if the user enters invalid content.                                                                                                                                                                    |
| helpText     | string                | no        | Specifies the text that is visible underneath the field that helps the user understand what they need to enter.                                                                                                                            |
| id           | string                | no        | If an id is provided, it will be used as the element's id. If not, the component will generate an unique id.                                                                                                                               |
| invalid      | boolean               | no        | Used to specify conditions which would make the field invalid.                                                                                                                                                                             |
| required     | boolean               | no        |                                                                                                                                                                                                                                            | dropdownBlock | boolean | no | If set to `true` force the dropdown to take full available width |
|              |
| Other Props  | any                   | no        | Any other props that a `<input>` element can take. These will be applied to the `<input>` element within the component.                                                                                                                    |

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

The children of the `<MultiSelect>` component should be `<Option>` components. Each `<Option>` component within a `<MultiSelect>` component can have the following properties:

| Property    | Type                  | Required? | Notes                                                                                                                              |
| :---------- | :-------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| value       | string                | yes       |                                                                                                                                    |
| onChange    | function (any) => any | yes       |                                                                                                                                    |
| checked     | boolean               | no        |                                                                                                                                    |
| className   | string                | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                               |
| Other Props | any                   | no        | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component. |
