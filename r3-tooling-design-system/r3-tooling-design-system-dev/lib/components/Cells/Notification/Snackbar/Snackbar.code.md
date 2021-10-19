<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
   <Snackbar>Lorem ipsum dolor sit amet</Snackbar>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type                            | Required? | Options                                | Notes                                                                                                                                                       |
| :---------- | :------------------------------ | :-------- | :------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| button      | ReactElement                    | no        |                                        | If you want a button (or a group of buttons) to appear in the righthand part of the snackbar, pass the respective elements to the "button" property.        |
| className   | string                          | no        |                                        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                        |
| context     | instance of NotificationService | no        |                                        | Set this property to the NotificationService, as outlined below in the "Usage" section, if you wish to use the snackbar as part of the notification system. |
| variant     | string                          | no        | 'info', 'danger', 'warning', 'success' | This determines the colours used in the snackbar. If unset, the variant will default to 'info' and the snackbar will be blue-themed.                        |
| withIcon    | boolean                         | no        |                                        | If true, an appropriate icon will appear next to the content.                                                                                               |
| Other Props | any                             | no        |                                        | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component.                          |

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

Pass in the contents of the snackbar (excluding buttons) as children.

<Anchor idToScrollTo="usage"><h3>Usage</h3></Anchor>

To use the snackbar as part of the notification system, follow these steps.

1. Import and use the `<Notification />` component as high up the component tree as possible (ideally, in the App.js/App.tsx file or an equivalent).

2. Import `{NotificationService}` in the component where you need to use the snackbar.

3. To call a snackbar, call `NotificationService.addNotification(element, autoClose)`, in which:

| Parameter | Type            | Required? | Notes                                                                                                                                                                               |
| :-------- | :-------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| element   | JSX element     | yes       | The snackbar that should be rendered.                                                                                                                                               |
| autoClose | number or false | no        | The amount of time, in milliseconds, that the snackbar should remain open. If the snackbar should not close automatically, set `autoClose` to 'false'. Defaults to 5000 if omitted. |

The example uses a button click as the trigger event:

<CodeSnippet>
   {`const snackbarEl = <Snackbar variant='success' context={NotificationService}> This is a success snackbar </Snackbar>
   ...
   <Button
   size="small"
   variant="tertiary"
   onClick={() => {
   NotificationService.addNotification(snackbarEl, 3000);
   }}
   > Button </Button>`}
</CodeSnippet>

4. Pass `{NotificationService}` as the `context` property of the snackbar component. For example:

   `<Snackbar variant="info" context={NotificationService}>Lorem ipsum </Snackbar>`

5. To close the snackbar, follow these steps.

   &nbsp;&nbsp;1. Import `{snackbarIdContext}` to the component where the snackbar component is being used.

   &nbsp;&nbsp;2. Wrap the button that needs to close the snackbar in `<snackbarIdContext.Consumer`>. In the function that `<context.Consumer>` takes as a child, pass the value of the context and return the button you need to render.

   &nbsp;&nbsp;3. On the button, call `dismissNotification(id)`, where `id` is the value passed in by the context. For example:
   
<CodeSnippet>
   {`<Snackbar
      context={NotificationService}
      variant="info" >
   Snackbar
   <snackbarIdContext.Consumer>
      {id => <Button size='small' variant='label' onClick={() => dismissNotification(id)} > Dismiss </Button>}
   </snackbarIdContext.Consumer>
   </Snackbar>`}
</CodeSnippet>

