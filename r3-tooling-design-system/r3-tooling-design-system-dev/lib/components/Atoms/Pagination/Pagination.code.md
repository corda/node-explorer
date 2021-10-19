<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Pagination />
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type                  | Required? | Notes                                                                                                                                                                 |
| :---------- | :-------------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pages       | number                | yes       |                                                                                                                                                                       |
| currentPage | number                | yes       |                                                                                                                                                                       |
| toPage      | function (any) => any | yes       |                                                                                                                                                                       |
| className   | string                | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                                  |
| withInput   | boolean               | no        | When this property is present, the pagination controls will be accompanied by a number input field, letting the end user directly choose the page they want to go to. |
| Other Props | any                   | no        | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component.                                    |

