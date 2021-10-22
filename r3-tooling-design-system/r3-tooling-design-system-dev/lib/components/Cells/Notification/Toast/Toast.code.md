<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
   <Toast>Lorem ipsum dolor sit amet</Toast>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type                            | Required? | Options                                | Notes                                                                                                                                                                                        |
| :---------- | :------------------------------ | :-------- | :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title       | string                          | no        |                                        |                                                                                                                                                                                              |
| context     | instance of NotificationService | no        |                                        | Set this property to the NotificationService, as outlined below in the "Usage" section, if you wish to use the toast as part of the notification system.                                     |
| variant     | string                          | no        | 'info', 'danger', 'warning', 'success' | This determines the colours used in the toast. If unset, the variant will default to 'info' and the toast will be blue-themed.                                                               |
| className   | string                          | no        |                                        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                                                         |
| withIcon    | boolean                         | no        |                                        | If true, an appropriate icon will appear next to the content.                                                                                                                                |
| onClose     | function () => void             | no        |                                        | If the toast is not being used as part of the notification system, and, therefore, no context is provided, provide the onClose function that will be called when the user clicks the X icon. |
| Other Props | any                             | no        |                                        | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component.                                                           |

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

Pass in the contents of the toast (including buttons) as children.

<Anchor idToScrollTo="usage"><h3>Usage</h3></Anchor>

To use the toast as part of the notification system, follow these steps.

1. Import and use the `<Notification />` component as high up the component tree as possible (ideally, in the App.js/App.tsx file or an equivalent).

2. Import `{NotificationService}` in the component where you need to use the toast.

3. Wherever you need the toast to be called, do either of the following:
4. To quickly create a simple toast, comprised of title and message only, you can call `NotificationService.notify(message, title, variant, autoClose)`, in which:
   
| Parameter | Type            | Required? | Options                                | Notes                                                                                                                                                                         |
| :-------- | :-------------- | :-------- | :------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message   | string          | yes       |                                        | The contents of the toast.                                                                                                                                                    |
| title     | string          | yes       |                                        | The title of the toast.                                                                                                                                                       |
| variant   | string          | no        | 'info', 'danger', 'warning', 'success' | This determines the colours used in the toast. If unset, the variant will default to 'info' and the toast will be blue-themed.                                                |
| autoClose | number or false | no        |                                        | The amount of time, in milliseconds, that the toast should remain open. If the toast should not close automatically, set `autoClose` to 'false'. Defaults to 5000 if omitted. |

5. To create a custom toast with buttons, for example, call `NotificationService.addNotification(element, autoClose)`, in which:

| Parameter | Type            | Required? | Notes                                                                                                                                                                         |
| :-------- | :-------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| element   | JSX element     | yes       | The toast that should be rendered.                                                                                                                                            |
| autoClose | number or false | no        | The amount of time, in milliseconds, that the toast should remain open. If the toast should not close automatically, set `autoClose` to 'false'. Defaults to 5000 if omitted. |

The example uses a button click as the trigger event:


<CodeSnippet>
   {`<Button
   size="small"
   variant="tertiary"
   onClick={() => {
   NotificationService.notify('This is a success toast', 'Success', 'success', 3000);
   }}
   > Button </Button>`}
</CodeSnippet>


Or, alternatively:

<CodeSnippet>
   {`const toastEl = <Toast variant='success' title='Success' context={NotificationService}> 
      This is a success toast 
   </Toast>`}
   {`...`}
   {`<Button
   size="small"
   variant="tertiary"
   onClick={() => {
   NotificationService.notify(toastEl, 3000);
   }}
   > Button </Button>`}
</CodeSnippet>

6.  In case you have called your toast with the `NotificationService.addNotification` function:

&nbsp;&nbsp;1.  Pass `{NotificationService}` as the `context` property of the toast component. For example:

<CodeSnippet>
   {`<Toast variant="info" title="Toast title" context={NotificationService}>Lorem ipsum </Toast>`}
</CodeSnippet>

&nbsp;&nbsp;2.  To close the toast programatically (and not by using the closing icon in the top right corner), follow these steps.

   &nbsp;&nbsp;&nbsp;&nbsp;1. Import `{toastIdContext}` to the component where the toast component is being used.

   &nbsp;&nbsp;&nbsp;&nbsp;2. Wrap the button that needs to close the toast in `<toastIdContext.Consumer`>. In the function that `<context.Consumer>` takes as a child, pass the value of the context and return the button you need to render.

   &nbsp;&nbsp;&nbsp;&nbsp;3. On the button, call `dismissNotification(id)`, where `id` is the value passed in by the context. For example:


<CodeSnippet>
   {`<Toast
      context={NotificationService}
      variant="info"
      title="Toast title" >
   Toast
   <toastIdContext.Consumer>
   {id => <Button size='small' variant='label' onClick={() => dismissNotification(id)}>}
   </toastIdContext.Consumer>
   </Toast>`}
</CodeSnippet>

