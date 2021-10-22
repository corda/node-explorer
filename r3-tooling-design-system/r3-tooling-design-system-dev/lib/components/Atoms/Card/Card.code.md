<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Card>
        Card
    </Card>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type    | Required? | Notes                                                                                                                                                                                                                                                                          |
| :---------- | :------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title       | string  | yes       | The title of the card that will appear in its header, above its main content.                                                                                                                                                                                                  |
| className   | string  | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                                                                                                                                           |
| alt         | string  | no        | If an image is provided, a descriptive alt text should also be provided via this property.                                                                                                                                                                                     |
| dark        | boolean | no        | If the card is used on a white background, the dark property can be set to true. If true, the card will have a light gray background colour; otherwise, its background will be white.                                                                                          |
| icon        | string  | no        | Specifies an MDI icon to be displayed above the card's title. Example: `icon='Star'` will show the mdiStar icon above the card's title. Needs to be spelled exactly as the icon's name in the Material Design Icons library, with the exception of the 'mdi' at the beginning. |
| image       | string  | no        | In case an image is needed above the title, this property provides the path to it.                                                                                                                                                                                             |
| Other Props | any     | no        | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component.                                                                                                                                             |

