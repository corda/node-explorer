<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Badge>Badge</Badge>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property     | Type    | Required? | Options                                  | Notes                                                                                                                                                                                                  |
| :----------- | :------ | :-------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className    | string  | no        |                                          | Classnames can be passed to the wrapping `<div>` element of the component.                                                                                                                             |
| customColour | string  | no        |                                          | Lets you choose a custom colour for the badge. Specify the colour in the same way you would use it in a CSS file, for example as an hexidecimal value, as an RGB value, or any supported value in CSS. |
| variant      | string  | no        | 'red', 'green', 'yellow', 'blue', 'gray' | Defines the colour of the badge. Please note that if both 'variant' and 'customColour' properties are present, the 'customColour' property takes precedence.                                           |
| whiteText    | boolean | no        |                                          | If you choose a dark custom colour, set the whiteText property to make the text of the badge white. If the property is not set, the text will be dark gray.                                            |
| Other Props  | any     | no        |                                          | Any other props that a `<div>` element can take. These will be applied to the badge `<div>`.                                                                                                           |

