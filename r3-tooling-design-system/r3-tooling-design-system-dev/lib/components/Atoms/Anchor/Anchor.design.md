<Row >
    <Column cols={8}>
    <p>Anchors can help users navigate through pages or send a link to a specific part of a page. Use the component preferable with H2 titles. The icon displayed before the text will copy the link to that particular section. Combine with Anchor links atom to create a page navigation.</p>
    </Column> 
</Row>

<div>
    <AnchorLink to="spacing" offset={210}>
        Spacing
    </AnchorLink>
    <AnchorLink to="directions" offset={210}>
        Directions
    </AnchorLink>
</div>

<Row>
   <Column cols={8}>
        <img src="../_img/anchor--1.png" />
    </Column> 
</Row>

<Anchor idToScrollTo="spacing"><h2>Spacing</h2></Anchor>
<Row >
    <Column cols={8}>
        <p>There is 8px padding between the icon and the text.</p>
    </Column> 
</Row>
<Row >
    <Column cols={6}>
        <img src="../_img/anchor--2.png" />
    </Column> 
</Row>

<Anchor idToScrollTo="directions"><h2>Directions</h2></Anchor>
<Row >
    <Column cols={6}>
        <img src="../_img/anchor--3.png" />
        <p>Use the anchor for level two headings (H2).</p>
    </Column> 
    <Column cols={6}>
        <img src="../_img/anchor--4.png" />
        <p>Don’t use the anchor for any other heading levels (H3, H4, etc.).</p>
    </Column> 
</Row>