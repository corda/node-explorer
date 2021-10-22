<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Anchor>Anchor</Anchor>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property     | Type   | Required? | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :----------- | :----- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idToScrollTo | string | yes       | This should be the id for the section. The string you specify in this property will be used as an id for the Anchor component, as well as in the building of the link that will be copied to the user's clipboard. For example, in the webpage `www.example.com/example-subpage`, an anchor with `idToScrollTo="example-section"` will have an id of 'example-section', and a click on it will copy to the user's clipboard the following: `www.example.com/example-subpage/#example-section`. |
| className    | string | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                                                                                                                                                                                                                                                                                                                                                           |
| Other Props  | any    | no        | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component.                                                                                                                                                                                                                                                                                                                                                             |


<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

Pass in the element you want to render as a title of your section as a child. Use the appropriate HTML element (`h2`, `h3`, etc.). 