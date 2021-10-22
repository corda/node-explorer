<Anchor idToScrollTo="playground"><h3>Playground</h3></Anchor>

<Playground>
    <Breadcrumbs>
        <BreadcrumbItem>
            <a href="https://google.com">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <a href="https://google.com">Page</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
            <span>You are here</span>
        </BreadcrumbItem>
    </Breadcrumbs>
</Playground>

<Anchor idToScrollTo="properties"><h3>Properties</h3></Anchor>

Any properties that a `<div>` element can take. These will be applied to the outermost wrapping `<div>` element of the component.

<Anchor idToScrollTo="children"><h3>Children</h3></Anchor>

Pass in the elements of the breadcrumb as `<BreadcrumbItem>` components. Within a `<BreadcrumbItem>` component, pass in a link element for a parent page or a span element for the current page.
Each `<BreadcrumbItem>` can have the following properties:

| Property    | Type    | Required? | Notes                                                                                                                |
| :---------- | :------ | :-------- | :------------------------------------------------------------------------------------------------------------------- |
| active      | boolean | no        | Set to true on the element that represents the page the user is currently on.                                        |
| Other Props | any     | no        | Any other props that a `<span>` element can take. These will be applied to the `<span>` holding the breadcrumb item. |

