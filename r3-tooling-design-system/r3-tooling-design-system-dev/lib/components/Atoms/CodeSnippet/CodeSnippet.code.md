<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <CodeSnippet>CodeSnippet</CodeSnippet>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type    | Required? | Options                          | Notes                                                                                                                                                     |
| :---------- | :------ | :-------- | :------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className   | string  | no        |                                  | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                      |
| flush       | string  | no        | 'top', 'right', 'bottom', 'left' | If specified, the border on the relevant side of the element will not be rounded, to allow the code snippet box to lay flush with the element next to it. |
| link        | string  | no        |                                  | If the property 'withSandbox' is present, use this property to provide the link to the appropriate sandbox.                                               |
| withSandbox | boolean | no        |                                  | If true, a link to the appropriate sandbox will appear in the top left corner of the code snippet box.                                                    |
| Other Props | any     | no        |                                  | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component.                        |

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

Pass in the code that needs to be displayed as a child of the `<CodeSnippet>` element.

