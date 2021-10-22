<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Loader />
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type   | Required? | Notes                                                                                                                |
| :---------- | :----- | :-------- | :------------------------------------------------------------------------------------------------------------------- |
| size        | string | yes        | One of `small`, `medium` and `large`.                                                                                  |
| text        | string | no        | Text that appears below the loader.                                                                                  |
| loaderSpeed        | number | no        | .`Integer` or `Float` number for `Loader`'s animation speed in seconds. Default is `1.5s`.                                                                                  |
| className        | string | no        | Classnames can be passed to the wrapping `.loader` element of the component. .                                                                                  |
| Other Props | any    | no        | Any other props that a `<div>` element can take. These will be applied to the `<div>` element holding the component. |

<Anchor idToScrollTo="usage"><h3>Usage</h3></Anchor>

Render conditionally in your application where necessary.

