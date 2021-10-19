<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Popconfirm>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, qui quasi. In, quidem? Qui quis officia cumque vitae suscipit nisi aliquid sunt quisquam laboriosam reprehenderit praesentium velit, maiores quae sapiente!
    </Popconfirm>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type                | Required? | Options                                            | Notes                                                                                                                              |
| :---------- | :------------------ | :-------- | :------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| className   | string              | no        |                                                    | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                               |
| position    | string              | no        | 'topLeft', 'topRight', 'bottomLeft', 'bottomRight' | Default = 'topRight'.                                                                                                              |
| show        | boolean             | no        |                                                    |                                                                                                                                    |
| acceptText  | string              | no        |                                                    | The text that should be inside the "accept" button. Default = "Yes".                                                               |
| refuseText  | string              | no        |                                                    | The text that should be inside the "refuse" button. Default = "No".                                                                |
| onAccept    | function () => void | no        |                                                    |                                                                                                                                    |
| onClose     | function () => void | no        |                                                    |                                                                                                                                    |
| onRefuse    | function () => void | no        |                                                    |                                                                                                                                    |
| Other Props | any                 | no        |                                                    | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component. |

<Anchor idToScrollTo="usage"><h3>Usage</h3></Anchor>

Wrap the Popconfirm and the element that serves as its trigger in a `<TooltipWrapper>` component. Please refer to <Link to="/atoms/TooltipWrapper">the documentation for the `<TooltipWrapper>` component.</Link>

