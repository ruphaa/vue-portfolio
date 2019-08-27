---
title: Everything about Event Handlers and Event Propagation
published: true
description: Event Handling and Event Propagation in JavaScript
link: "https://dev.to/ruphaa/everything-about-event-handlers-and-event-propagation-47a8"
tags: #javascript #webdev #tutorial
name: everything-about-event-handlers
---

This has been written over a hundred times before and probably holds more than a hundred answers on StackOverflow. But over time, going through different articles and answers, I curated the important parts and writing it down as this post.

# Event Handling

There are 3 ways to attach a handler to an event in JavaScript.

- HTML Attribute
- DOM Property
- addEventListener()

## HTML attribute

This is the old school way of attaching a handler to an event by adding an attribute to the DOM element.

_Remember, a node can only have one onclick attribute. So with this approach, only one handler can be registered to an event._

```html
<div id="el" onclick="kaboom()"></div>
```

## DOM property

This is the _JavaScripty_ way of creating a DOM node on the fly, adding an attribute to it and attaching a handler to the attribute. Since this is almost the same as the previous approach, _only one handler can be registered to an event_.

```html
<script>
  el = document.querySelector("#el")
  el.onclick = clickMe();
</script>
```
## addEventListener() 🔥

This is the modern way of binding handlers to the event. We can bind any number of handlers with the event and all these handlers will be invoked when that event happens.

```html
<script>
  el.addEventListener("click", (e) => {
	// Some code here that goes KABOOM!
  });
</script>
```


# Event Behaviours
- preventDefault()
- Event Bubbling
- Event Capturing

## preventDefault()

There are a handful or pre-defined events that have default actions associated with them. For example,

- a link by default takes you to the link’s target.
- if you press down arrow, page scrolls down.

In these cases, the **custom handlers associated with these elements will get invoked before the default actions** followed by the default actions. If you want to completely unbind this default behaviour from the element, you can call the `event.preventDefault()` in your handler.

_Note: This has got nothing to stop the event from bubbling up the DOM._


## Event Bubbling & Event Capturing

Events in DOM usually get propagated as a stack of events nested in the web browser.

### Event Bubbling

Event bubbling can be better explained with an example.

Let's take a nested DOM structure like this

```html
<div id="parent">
  <div id="child"></div>
</div>
```

If there are handlers attached to both `#parent` and `#child` divs,

- when the child is clicked, due to the bubbling nature of events, first the handler for the `#child` div is invoked and then the event propagates to `#parent` div and its handler will be invoked.

In short, **child first and parent next** as events bubble from **bottom to top**.

### Event Capturing

Event capturing is more of capturing the event in the DOM and handing it over to event handlers for execution. Events are captured from top-down, meaning outermost element is captured first and propagated to the inner elements. Once the events are captured, bubbling of events start from the inner-most elements.


### stopPropagation()  

You can stop the bubbling of events from child to parent by calling `event.stopPropagation()` in the child event handler.

```js
function childHandler(event) {
  event.stopPropagation();
}
```
   	 
# Removing an event listener

You can remove an event listener from an element by invoking `removeEventListener()` on the event, which accepts the event name and handler name as arguments.

```js
function handleClick(e) {
  // go KABOOM!
}

element.addEventListener("click", handleClick);
element.removeEventListener("click", handleClick);

```
_Note: Do not use anonymous handler method. You should define the function outside the callback and then reference it in back in the removeEventListener callback._

```js
// this is wrong as you cannot remove this event listener
element.addEventListener("click", () => { /* go KABOOM! */ });
```

That's it folks. Pl drop a comment if you think this post could be improved in any way.


