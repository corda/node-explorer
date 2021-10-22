<div>
    <AnchorLink to="spacing" offset={210}>
        Spacing
    </AnchorLink>
    <AnchorLink to="usage" offset={210}>
        Usage
    </AnchorLink>
        <AnchorLink to="states" offset={210}>
        States
    </AnchorLink>
</div>

<Row >
    <Column cols={8}>
        <img src="../_img/checkbox--1.png" />
    </Column> 
</Row>

<Anchor idToScrollTo="spacing"><h2>Spacing</h2></Anchor>
<Row >
    <Column cols={8}>
        <img src="../_img/checkbox--2.png" />
    </Column> 
</Row>

<Anchor idToScrollTo="usage"><h2>Usage</h2></Anchor>
<Row >
    <Column cols={4}>
        <img src="../_img/checkbox--3.png" />
    </Column> 
    <Column cols={4}>
        <img src="../_img/checkbox--4.png" />
    </Column>
    <Column cols={4} className="pt-4">
        <ul>
        <li>- Forms</li>
        <li>- Filtering and batch actions</li>
        <li>- Terms and conditions</li>
        <li>- Lists with sub-selections</li>
        </ul>
    </Column> 
</Row>

<Row >
    <Column cols={6}>
        <img src="../_img/checkbox--5.png" />
        <p>Use checkbox groups for multiple selections.</p>
    </Column> 
    <Column cols={6}>
        <img src="../_img/checkbox--6.png" />
        <p>Don’t use radio buttons for multiple selections.</p>
    </Column> 
</Row>

<h3>How to choose a component?</h3>

| Condition                          | Checkbox group            | Single Checkbox    | Radio Buttons      | Toggle             |
|:-----------------------------------|:--------------------------|:-------------------|:-------------------|:-------------------|
| How many options?                  | Multiple                  | Single             | Multiple           | Single             |
| How many selections could be made? | Multiple                  | Two (on/off)       | Single             | Two (on/off)       |
| Is there a default option?         | No                        | Yes                | Yes                | Yes                |
| Type of choice?                    | Independent of each other | Mutually exclusive | Mutually exclusive | Mutually exclusive |
| Selection execution?               | After submitting          | After submitting   | After submitting   | Immediately        |

<Anchor idToScrollTo="states"><h2>States</h2></Anchor>
<Row >
    <Column cols={12}>
        <img src="../_img/checkbox--7.png" />
    </Column> 
</Row>