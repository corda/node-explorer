<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <PageHeader>Lorem ipsum</PageHeader>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type                        | Required? | Options          | Notes                                                                                                                                                                                                       |
| :---------- | :-------------------------- | :-------- | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size        | string                      | yes       | 'large', 'small' |                                                                                                                                                                                                             |
| className   | string                      | no        |                  | Classnames can be passed to the wrapping `<div>` element of the component (excluding the outermost `<div>` that also contains the tabs, if such are present.)                                               |
| dark        | boolean                     | no        |                  | If set to true, the page header will be dark gray with a white heading. If false, it will be light gray with a dark gray heading.                                                                           |
| offset      | number                      | no        |                  | If the page header should be sticky, but should sit below another element, specify the offset in pixels. Default = 0.                                                                                       |
| sticky      | boolean                     | no        |                  | Set to true if you need a sticky page header. If used with a page header with `size = 'large'`, when the page header sticks to the top, it will assume the styles of a page header with `size="small"`.     |
| tabs        | array of `<Tab`> components | no        |                  | Use `[<Tab key="key1" name={<Link/>}/>, <Tab key="key2" name={<NavLink/>} />, <Tab key="key3" name={<a className="active"/>} />]` elements. Property key is mandatory.                                      |
| Other Props | any                         | no        |                  | Any other props that a `<div>` element can take. These will be applied to the wrapping `<div>` element of the component (excluding the outermost `<div>` that also contains the tabs, if such are present.) |

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

Pass in as a child the text of the page header.

