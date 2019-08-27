---
title: CSS Subgrid — Level 2 of CSS Grid
published: true
date: Jan 5, 2019
description: CSS Subgrid - Align nested grid items to parent grid with CSS Subgrid
link: "https://dev.to/ruphaa/css-subgrid-level-2-of-css-grid-1na0"
tags: #css, #webdev, #ux, #tutorial
name: css-subgrid
---

![Title image](https://thepracticaldev.s3.amazonaws.com/i/k7bu3vqcyt3y2u226pdk.png)

*Something amazing is about to happen to grid layouts. The level 2 specification of CSS grid, called __CSS Subgrid__, is coming to browsers soon and it's gonna take the already awesome CSS Grid to a whole new level.*

## What's all the fuss about?

Recently, I came across [Rachel Andrew](https://twitter.com/rachelandrew)'s article where she introduced CSS Subgrid and I got super excited and thrilled about the possibilities that come along with CSS Subgrid.

In short — CSS Subgrid makes is possible to construct nested grids within CSS Grid.

Right now (without subgrid) the tracks of the nested grids have no relationship to the tracks on the parent grid. To put it in simple terms — we have a parent container with `display: grid` property, therefore its children become grid items. These grid items can also be made the grid containers. But __the grid tracks defined for the parent grid container won't be aligned with the grid tracks of the child grid containers since they both are independent of the layout__ of its content. In some cases, __it is necessary for the content and layout of multiple grid items to align with each other.__

With CSS Subgrid, __a grid container can inherit the definition of its rows and columns from its parent grid container__, by making the grid item a subgrid. Subgrid provides the ability to pass the properties of the grid to its nested elements and content-based sizing information back to the parent grid.

These are the two main wins of CSS Subgrid —
- A subgrid can use the grid tracks defined on the parent - for rows, columns or both.
- A subgrid will also inherit the gaps from the parent. The sizing of the items in the subgrid can change the size of the parent tracks.
    

Here's an example of how nested grid works without subgrid —

<iframe height="441" style="width: 100%;" scrolling="no" title="CSS Nested grid - with no Subgrid" src="//codepen.io/ruphaa/embed/gyzPBY/?height=441&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ruphaa/pen/gyzPBY/'>CSS Nested grid - with no Subgrid</a> by Ruphaa Ganesh
  (<a href='https://codepen.io/ruphaa'>@ruphaa</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

But what if we wanted the tracks of nested grid items to be aligned with the tracks of the parent grid?

This is where subgrid comes to the rescue. When we add the property `grid-template-rows: subgrid` to the nested grid items, they inherit the row property of the parent grid and align with each other automatically.

This is how it should look if the property is applied.

![CSS Subgrid](https://i.ibb.co/2Pr78Mk/Screen-Shot-2019-04-20-at-7-30-26-PM.png)

*Note: Currently, there is no browser support for subgrid so I have created an illustration to explain the behavior.*

## Subgrid for the columns and rows
  In this case, subgrid will be on both columns and rows. This means that both the dimensions are aligned to the tracks of the parent grid.
![Subgrid-Column-Row](https://i.ibb.co/4WnLP9N/subgrid-row-column.png)  

## Subgrid for columns only
  In this case, subgrid is used on columns, meaning there will be an implicit track for rows alone in the grid item but its column tracks are aligned with the parent grid.
![Subgrid-Column](https://i.ibb.co/6BnvdcG/subgrid-column.png)

## Subgrid for rows only 
  In this case, subgrid is applied on rows, which aligns with the row tracks of the parent grid, but its column sizing is independent of the parent grid.
![Subgrid-Row](https://i.ibb.co/crDPjkh/subgrid-row.png)
  
## Resources
   [CSS Grid Level 2: Here Comes Subgrid](https://www.smashingmagazine.com/2018/07/css-grid-2/)

   [Grids All The Way Down](https://noti.st/rachelandrew/g2qkOz/grids-all-the-way-down#s12eg0L)

   [CSS Grid Layout Module Level 2](https://www.w3.org/TR/css-grid-2/)

   [Why we need CSS subgrid](https://dev.to/kenbellows/why-we-need-css-subgrid-53mh)
  ________
  
  I am eagerly waiting for browsers to support subgrid *(hopefully soon)* so I can play around with it and figure out interesting use cases.
  
  Feedbacks? Leave a comment :)
  