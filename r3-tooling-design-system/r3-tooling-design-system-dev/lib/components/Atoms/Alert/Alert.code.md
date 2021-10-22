<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Alert>Alert</Alert>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type    | Required? | Options                        | Notes                                                                                                                              |
| :---------- | :------ | :-------- | :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| variant     | string  | yes       | 'danger', 'warning', 'success' | This determines the colour of the alert and the icon, if applicable.                                                               |
| className   | string  | no        |                                | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                               |
| title       | string  | no        |                                |                                                                                                                                    |
| withIcon    | boolean | no        |                                | If true, an appropriate icon will appear in the alert box.                                                                         |
| Other Props | any     | no        |                                | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component. |

