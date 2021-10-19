<Anchor idToScrollTo="usage"><h3>Usage</h3></Anchor>

1. Import and use the `<Notification />` component as high up the component tree as possible (ideally, in the App.js/App.tsx file or an equivalent).

2. Import `{NotificationService}` in the component where you need to use the toast or snackbar.

3. Wherever you need the toast or snackbar to be called, do either of the following:
4. To quickly create a simple toast, comprised of title and message only, you can call `NotificationService.notify(message, title, variant, autoClose)`, in which:

| Parameter | Type            | Required? | Options                                | Notes                                                                                                                                                                         |
| :-------- | :-------------- | :-------- | :------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message   | string          | yes       |                                        | The main contents of the toast.                                                                                                                                               |
| title     | string          | yes       |                                        | The title of the toast.                                                                                                                                                       |
| variant   | string          | no        | 'info', 'danger', 'warning', 'success' | This determines the colours used in the toast. If unset, the variant will default to 'info' and the toast will be blue-themed.                                                |
| autoClose | number or false | no        |                                        | The amount of time, in milliseconds, that the toast should remain open. If the toast should not close automatically, set `autoClose` to 'false'. Defaults to 5000 if omitted. |

5. To create a custom toast with buttons and an icon, for example, or a snackbar, call `NotificationService.addNotification(element, autoClose)`, in which:

| Parameter | Type            | Required? | Notes                                                                                                                                                                                                             |
| :-------- | :-------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| element   | JSX element     | yes       | The toast or snackbar that should be rendered. Please refer to the relevant documentation for the <Link to="/atoms/Toast">`<Toast>`</Link> or <Link to="/atoms/Snackbar">`<Snackbar>`</Link> component. |
| autoClose | number or false | no        | The amount of time, in milliseconds, that the toast or snackbar should remain open. If the toast or snackbar should not close automatically, set `autoClose` to 'false'. Defaults to 5000 if omitted.             |

6. In case you have called your toast or snackbar with the `NotificationService.addNotification` function:

   &nbsp;&nbsp;1. Pass `{NotificationService}` as the `context` property of the toast or snackbar component.

   &nbsp;&nbsp;2. To close the toast or snackbar programatically, follow these steps.

      &nbsp;&nbsp;&nbsp;&nbsp;1. Import `{toastIdContext}` or `{snackbarIdContext}` to the component where the toast or snackbar component, respectively, is being used.

      &nbsp;&nbsp;&nbsp;&nbsp;2. Wrap the button that should close the toast or snackbar in `<toastIdContext.Consumer>` or `<snackbarIdContext.Consumer>`, respectively. In the function that `<context.Consumer>` takes as a child, pass the value of the context and return the button you need to render.

      &nbsp;&nbsp;&nbsp;&nbsp;3. On the button, call `dismissNotification(id)`, where `id` is the value passed in by the context.

For detailed examples, please refer to the documentation for the Toast or Snackbar components.
