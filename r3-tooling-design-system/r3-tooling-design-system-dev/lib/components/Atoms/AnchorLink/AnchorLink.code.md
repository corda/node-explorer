<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <AnchorLink>AnchorLink</AnchorLink>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type    | Required? | Notes                                                                                                                                                                                                                                                                                      |
| :---------- | :------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| to          | string  | yes       | Pass in the id of the element you want to scroll to (for example, `to="element"`).                                                                                                                                                                                                         |
| className   | string  | no        | Classnames can be passed to the outermost wrapping `<a>` element of the component.                                                                                                                                                                                                         |
| offsetEl    | Element | no        | If you need a certain element to be accounted for (for example, a sticky navigation bar), pass in a reference to it as the `offsetEl` property. Alternatively, use the `offset` property if you want to provide a set height.                                                              |
| offset      | number  | no        | If you need a certain element to be accounted for (for example, a sticky navigation bar), pass in its height in pixels as the `offset` property. Alternatively, use the `offsetEl` property if you want to provide an element. If both properties are provided, `offset` takes precedence. |
| Other Props | any     | no        | Any other props that an `<a>` element can take. These will be applied to the `<a>` component that holds the anchor link.                                                                                                                                                                   |
