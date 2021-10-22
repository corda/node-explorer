<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Checkbox>Checkbox</Checkbox>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property      | Type                  | Required? | Notes                                                                                                                                                                                                                                      |
| :------------ | :-------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value         | string                | yes       |                                                                                                                                                                                                                                            |
| onChange      | function (any) => any | yes       |                                                                                                                                                                                                                                            |
| className     | string                | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                                                                                                       |
| checked       | boolean               | no        |                                                                                                                                                                                                                                            |
| dark          | boolean               | no        | When "dark" is set to true, the input fields will take on a light gray background colour. When the component is part of a form that is on a light background, both the form and the component should have the "dark" property set to true. |
| disabled      | boolean               | no        |                                                                                                                                                                                                                                            |
| id            | string                | no        | If an id is provided, it will be used as the element's id. If not, the component will generate an unique id.                                                                                                                               |
| indeterminate | boolean               | no        | Specifies whether the checkbox should be in its indeterminate state.                                                                                                                                                                       |
| invalid       | boolean               | no        | Specifies conditions which would make the checkbox invalid.                                                                                                                                                                                |
| required      | boolean               | no        |                                                                                                                                                                                                                                            |
| Other Props   | any                   | no        | Any other props that a `<input type='checkbox'>` element can take. These will be applied to the `<input>` element within the component.                                                                                                    |

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

Pass in the text that should display to the right of the checkbox as a child to the respective checkbox.

