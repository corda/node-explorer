<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Toggle />
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type               | Required? | Options            | Notes                                                                                                                                   |
| :---------- | :----------------- | :-------- | :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| variant     | string             | yes       | 'gray', 'redgreen' | Specifies the colour scheme of the toggle.                                                                                              |
| onChange    | function () => any | yes       |                    |                                                                                                                                         |
| className   | string             | no        |                    | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                    |
| checked     | boolean            | no        |                    |                                                                                                                                         |
| disabled    | boolean            | no        |                    |                                                                                                                                         |
| id          | string             | no        |                    | If an id is provided, it will be used as the element's id. If not, the component will generate an unique id.                            |
| labelOff    | string             | no        |                    | Specifies the label that appears on the toggle when it's in its unchecked state, if such a label is necessary.                          |
| labelOn     | string             | no        |                    | Specifies the label that appears on the toggle when it's in its checked state, if such a label is necessary.                            |
| textContent | string             | no        |                    | If provided, text will be displayed to the right of the toggle switch.                                                                  |
| Other Props | any                | no        |                    | Any other props that a `<input type='checkbox'>` element can take. These will be applied to the `<input>` element within the component. |

