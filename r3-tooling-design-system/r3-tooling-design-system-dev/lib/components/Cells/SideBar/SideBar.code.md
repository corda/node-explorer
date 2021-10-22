<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <SideBar>
        <SideBarItem icon="CalendarAlert" title="Test 1">
        <SideBarItem icon="CalendarAlert" title="Test 1.1">
            <SideBarItem
            icon="RobotExcitedOutline"
            title={
                <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://google.com"
                >
                Test 1.1.1 - Link to Google
                </a>
            }
            ></SideBarItem>
            <SideBarItem icon="Twitter" title="Test 1.1.2">
            <SideBarItem title="Test 1.1.2.1" active={true}></SideBarItem>
            </SideBarItem>
        </SideBarItem>
        <SideBarItem icon="CalendarAlert" title="Test 1.2">
            <SideBarItem title="Test 1.2.1"></SideBarItem>
        </SideBarItem>
        </SideBarItem>
        <SideBarItem icon="Resize" title="Test 2">
        <SideBarItem title="Test 2.1">
            <SideBarItem
            icon="RobotExcitedOutline"
            title="Test 2.1.1"
            ></SideBarItem>
        </SideBarItem>
        <SideBarItem title="Test 2.2">
            <SideBarItem
            icon="RobotExcitedOutline"
            title="Test 2.2.1"
            ></SideBarItem>
        </SideBarItem>
        </SideBarItem>
        <SideBarItem icon="MapMarkerOutline" title="Test 3"></SideBarItem>
        <SideBarItem icon="CropRotate" title="Test 4"></SideBarItem>
        <SideBarItem icon="FolderPound" title="Test 5"></SideBarItem>
        <SideBarItem
        icon="RobotExcitedOutline"
        title={
            <a rel="noopener noreferrer" target="_blank" href="https://google.com">
            Link
            </a>
        }
        ></SideBarItem>
    </SideBar>
</Playground>


<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

| Property            | Type     | Required? | Notes                                                                                                                                   |
| :------------------ | :------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| className           | string   | no        | Classnames can be passed to the outermost wrapping `<aside>` element of the component.                                                  |
| id                  | string   | no        | If an id is provided, it will be used as the element's id. If not, the component will generate an unique id.                            |
| multipleActiveItems | boolean  | no        | Option that enables or disables multiple opened sub menus on a same level. Default is `false`.                                          |
| open                | boolean  | no        | Sets the initial `open` or `closed` state of the `toggable` mode. Default is `false`.                                                   |
| toggable            | boolean  | no        | Setter if the `SideBar` can be toggled between closed and opened state. Default is `false`.                                             |
| onToggle            | function | no        | Callback function fired when opening/closing menu in `toggable` mode.                                                                   |
| Other Props         | any      | no        | Any other props that an `<aside>` element can take. These will be applied to the outermost wrapping `<aside>` element of the component. |

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

The children of the `<SideBar>` component are `<SideBarItem>` components. Each `<SideBarItem>` component can have the following properties:

| Property    | Type                   | Required? | Notes                                                                                                                                                                                                                                                       |
| :---------- | :--------------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| active      | string                 | no        | Set witch menu item should be active programaticaly. Default is `false`.                                                                                                                                                                                    |
| className   | string                 | no        | Classnames can be passed to the outermost wrapping `<ul>` element of the component.                                                                                                                                                                         |
| icon        | string                 | no        | Specifies an `MDI icon` to be used with the sidebar item. Example: `icon='Download'` will show the mdiDownload icon. Needs to be spelled exactly as the icon's name in the Material Design Icons library, with the exception of the 'mdi' at the beginning. |
| title       | string or ReactElement | yes       | Enter title of the menu item or pass a React Element (`<a>`, `<Link>`, `<NavLink` or any valid `HTML` or `React` element                                                                                                                                    |
| Other Props | any                    | no        | Any other props that a `<ul>` element can take. These will be applied to the outermost wrapping `<ul>` element of the component.                                                                                                                            |


Each `<SideBarItem>` component can also have other `<SideBarItem>` components nested within it.


Example of `Sidebar` with different types of `SideBarItem` components, nested or not:
