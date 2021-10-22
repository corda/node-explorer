<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Modal>Lorem ipsum dolor sit amet</Modal>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property            | Type                | Required? | Options                        | Notes                                                                                                                                                                                                                                |
| :------------------ | :------------------ | :-------- | :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className           | string              | no        |                                | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                                                                                                 |
| closeOnOutsideClick | boolean             | no        |                                | option to close the `Modal` on outside click                                                                                                                                                                                         |
| open                | boolean             | no        |                                |                                                                                                                                                                                                                                      |
| size                | string              | yes       | 'large', 'small'               | Large modals can accomodate buttons.                                                                                                                                                                                                 |
| title               | string              | yes       |                                |                                                                                                                                                                                                                                      |
| variant             | string              | no        | 'danger', 'warning', 'success' | It can also be a plain modal, when the 'variant' property is not set. Plain modals have a dark gray title with no icon. Danger modals, warning modals, and success modals have appropriately coloured titles accompanied with icons. |
| withBackdrop        | boolean             | no        |                                | If true, a dark backdrop will appear beneath the modal.                                                                                                                                                                              |
| onClose             | function () => void | yes       |                                | Provides functionality for closing the modal.                                                                                                                                                                                        |
| Other Props         | any                 | no        |                                | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component, excluding the element wrapping the modal component and the backdrop.                              |

