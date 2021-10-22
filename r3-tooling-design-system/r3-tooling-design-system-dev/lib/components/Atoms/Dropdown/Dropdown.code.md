<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Dropdown trigger={<span className="uppercase text-lg font-bold">Dropdown</span>}>
        <Option key="lorem">Lorem</Option>
        <Option key="ipsum">Ipsum</Option>
    </Dropdown>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property            | Type         | Required? | Options         | Notes                                                                                                                                                                                        |
| :------------------ | :----------- | :-------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| trigger             | ReactElement | yes       |                 | Pass in the element that you want to use as a trigger for the dropdown. This can be any element, but would usually be an icon or text.                                                       |
| className           | string       | no        |                 | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                                                                                         |
| closeOnSelectOption | boolean      | no        |                 | If false, only a click on the dropdown trigger will toggle the dropdown, and a click on other elements will close it. If true, a click on the dropdown options will also close the dropdown. |
| positionX           | string       | no        | 'left', 'right' |                                                                                                                                                                                              |
| positionY           | string       | no        | 'top', 'bottom' |

|
| block | boolean | no | | Dropdown takes the full available width if set to `true`, default value = false
| |
| Other Props | any | no | | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component. |

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

The children of the element should be `<Option>` components - one for each item in the dropdown. Each `<Option>` component within a `<Dropdown>` component can have the following properties:

| Property    | Type                  | Required? | Notes                                                                                                                              |
| :---------- | :-------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| value       | string                | yes       |                                                                                                                                    |
| active      | boolean               | no        | If provided, it will set an 'active' class on the option.                                                                          |
| className   | string                | no        | Classnames can be passed to the outermost wrapping `<div>` element of the component.                                               |
| icon        | string                | no        | If provided, it will visualise to the left of the dropdown item.                                                                   |
| onClick     | function (any) => any | no        |                                                                                                                                    |
| Other Props | any                   | no        | Any other props that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component. |
