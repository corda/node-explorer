<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>
<Playground>
    <DashboardItem>DashboardItem</DashboardItem>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property       | Type    | Required? | Notes                                                                                                                                                                            |
| :------------- | :------ | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alt            | string  | no        | If an external image is provided, an `alt` attribute may also be provided.                                                                                                       |
| icon           | string  | no        | Pass in the icon name that should appear above the text. Refer to <Link to="/atoms/Pictogram">the documentation for the `<Pictogram>` component</Link> for a list of icons. |
| image          | string  | no        | This takes precedence over the `icon` property, if both are provided. One of the two (either `icon` or `image`) MUST be provided.                                                |
| className      | string  | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                                             |
| withBackground | boolean | no        | If true, the DashboardItem will have a light gray background. If not, it will assume the background of its parent component.                                                     |
| onClick | function (any) => any | no        | Click handler.   

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

Pass in any text that should appear below the pictogram or image as children.
