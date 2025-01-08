# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  event.target refers to the element that is responsible for firing the event.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Because of event bubbling. When an event occurs on a particular DOM element it doesn't just affect that specific element-it ripples through its ancestors in the DOM hierarchy.

- What DOM element property tells you what type of element it is?
  The tagName property

- What does the `element.closest()` method take as its argument and what does it return?
  The `element.closest()` method take css selector as its argument and it returns the element which matches the selector.

- How can you remove an element from the DOM?
  The Element.remove() method removes an element from the DOM.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  By adding an event listener to the parent element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
