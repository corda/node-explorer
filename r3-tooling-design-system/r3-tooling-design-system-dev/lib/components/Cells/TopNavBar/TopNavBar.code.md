<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <TopNavBar
        center={
            <>
                <a rel="noopener noreferrer" href="/#">
                    home
                </a>
                <a rel="noopener noreferrer" href="/#">
                    services
                </a>
                <a rel="noopener noreferrer" href="/#">
                    about us
                </a>
                <a rel="noopener noreferrer" href="/#">
                    contact us
                </a>
            </>
        }
        right={
            <>
                <Dropdown
                    positionX="left"
                    positionY="bottom"
                    closeOnSelectOption
                    trigger={<IconCustom icon="Account" className="h-5"></IconCustom>}
                >
                    <Option value="one">One</Option>
                    <Option value="two">Two</Option>
                </Dropdown>
                <IconCustom icon="ExitToApp" className="h-5"></IconCustom>
            </>
        }
    ></TopNavBar>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property    | Type                   | Required? | Options                  | Notes                                                                                                                              |
| :---------- | :--------------------- | :-------- | :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| center      | ReactElement           | no        |                          | Pass React elements with `.active` class to set active item. Elements should be wrapped in React Fragment.                         |
| centerPos   | string                 | no        | 'start', 'center', 'end' | Positioning central element projection. Default: `end`.                                                                            |
| className   | string                 | no        |                          | Classnames can be passed to the outermost wrapping `<nav>` element of the component.                                               |
| id          | string                 | no        |                          | If an id is provided, it will be used as the element's id. If not, the component will generate an unique id.                       |
| logo        | ReactElement           | no        |                          | `Anchor` or `Link` element with `text` or `image` as child or only `image` element                                                 |
| title       | string \| ReactElement | no        |                          | Title of nav bar                                                                                                                   |
| Other Props | any                    | no        |                          | Any other props that a `<nav>` element can take. These will be applied to the outermost wrapping `<nav>` element of the component. |
