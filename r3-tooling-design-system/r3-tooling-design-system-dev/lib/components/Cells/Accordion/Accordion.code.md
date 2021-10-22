<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Accordion>Lorem ipsum dolor sit amet</Accordion>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type    | Required? | Notes                                                                                                                              |
| :---------- | :------ | :-------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| title       | string  | yes       | The text that will appear on the accordion opener.                                                                                 |
| className   | string  | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                               |
| dark        | boolean | no        | When present, the accordion will take on a light gray background colour.                                                           |
| Other Props | any     | no        | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component. |

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

Pass in the content of the open accordion as children.