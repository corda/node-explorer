<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Tabs>
        <Tab name="design">content for design</Tab>
        <Tab name="code">content for code</Tab>
        <Tab name="other">content for other</Tab>
        <Tab name="system component">Content for system component</Tab>
    </Tabs>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>


| Property    | Type   | Required? | Options         | Notes                                                                                                                              |
| :---------- | :----- | :-------- | :-------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| variant     | string | yes       | 'light', 'dark' |                                                                                                                                    |
| className   | string | no        |                 | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                               |
| selected    | number | no        |                 | Can predefine which tab is selected, it is zero based.                                                                             |
| Other Props | any    | no        |                 | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component. |


<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

The children of the `<Tabs>` component are `<Tab>` components. Each `<Tab>` component can have the following properties:

| Property    | Type                   | Required? | Notes                                                                                                                              |
| :---------- | :--------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| name        | string or ReactElement | yes       | Displayed as tab text.                                                                                                             |
| className   | string                 | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                               |
| selected    | boolean                | no        | Used to define if the current tab is selected in the tabs menu it belongs to.                                                      |
| Other props | any                    | no        | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component. |

