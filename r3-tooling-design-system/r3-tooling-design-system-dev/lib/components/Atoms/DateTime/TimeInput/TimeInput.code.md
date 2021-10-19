<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

<Playground>
    <TimeInput />
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property     | Type                  | Required? | Notes                                                                                                                                                                                                                                      |
| :----------- | :-------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label        | string                | yes       |                                                                                                                                                                                                                                            |
| value        | Date/null             | yes       | The value is parsed as a timeString for the needs of the input field. When the user selects a new time, the onChange event is an array with a single Date object, which is the selected time.                                              |
| onChange     | function (any) => any | yes       |                                                                                                                                                                                                                                            |
| className    | string                | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                                                                                                       |
| time24h      | boolean               | no        | Determines the input format: 24h or 12h. Default: false (12h).                                                                                                                                                                             |
| dark         | boolean               | no        | When "dark" is set to true, the input fields will take on a light gray background colour. When the component is part of a form that is on a light background, both the form and the component should have the "dark" property set to true. |
| disabled     | boolean               | no        |                                                                                                                                                                                                                                            |
| errorMessage | string                | no        | Specifies the text that will appear if the user enters invalid content.                                                                                                                                                                    |
| helpText     | string                | no        | Specifies the text that is visible underneath the field that helps the user understand what they need to enter.                                                                                                                            |
| id           | string                | no        | If an id is provided, it will be used as the element's id. If not, the component will generate an unique id.                                                                                                                               |
| invalid      | boolean               | no        | Used to specify conditions which would make the field invalid.                                                                                                                                                                             |
| required     | boolean               | no        |                                                                                                                                                                                                                                            |
| Other Props  | any                   | no        | Any other props that a `<input>` element can take. These will be applied to the `<input>` element within the component.                                                                                                                    |

