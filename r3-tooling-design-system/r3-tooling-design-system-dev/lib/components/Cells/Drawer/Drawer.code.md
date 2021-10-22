<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Drawer>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib euismod tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
    </Drawer>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property            | Type                   | Required? | Options                             | Notes                                                                                                                                                                                                    |
| :------------------ | :--------------------- | :-------- | :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className           | string                 | no        |                                     | Classnames can be passed to the outermost wrapping `<div>` element of the component, excluding the element wrapping the drawer component and the backdrop.                                               |
| closeOnOutsideClick | boolean                | no        |                                     | option to close the `Drawer` on outside click                                                                                                                                                            |
| horizontalWidth     | string                 | no        |                                     | option to add custom `width` to `Drawer` with position `left` or `right`                                                                                                                                 |
| open                | boolean                | no        |                                     |                                                                                                                                                                                                          |
| position            | string                 | yes       | 'top', 'right', 'bottom', or 'left' |                                                                                                                                                                                                          |
| title               | string or ReactElement | yes       |                                     |                                                                                                                                                                                                          |
| onClose             | function, () => void   | yes       |                                     |                                                                                                                                                                                                          |
| Other Props         | any                    | no        |                                     | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component, excluding the element wrapping the drawer component and the backdrop. |

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

Pass in the contents of the drawer as children to the `<Drawer>` component.

