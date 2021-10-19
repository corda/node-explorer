<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Tooltip>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum itaque repudiandae optio maxime. Explicabo autem iste, impedit iure porro magna architecto molestiae, deleniti ab at omnis consequuntur ducimus obcaecati voluptatem?
    </Tooltip>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type    | Required? | Options                                            | Notes                                                                                                                              |
| :---------- | :------ | :-------- | :------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| className   | string  | no        |                                                    | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                               |
| position    | string  | no        | 'topLeft', 'topRight', 'bottomLeft', 'bottomRight' | Default = 'topRight'.                                                                                                              |
| variant    | string  | no        | 'dark', 'light' | Default = 'light'.                                                                                                              |
| size    | string  | no        | 'small', 'medium', 'large' | Default = 'large'.                                                                                                              |
| show        | boolean | no        |                                                    |                                                                                                                                    |
| Other Props | any     | no        |                                                    | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component. |

<Anchor idToScrollTo="usage"><h3>Usage</h3></Anchor>

Wrap the Tooltip and the element that serves as its trigger in a `<TooltipWrapper>` component. Please refer to <Link to="/atoms/TooltipWrapper">the documentation for the `<TooltipWrapper>` component.</Link>

