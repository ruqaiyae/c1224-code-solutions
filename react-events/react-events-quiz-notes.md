# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  Events are actions or occurrences that happen in the browser, such as a user clicking a button, submitting a form, or even hovering over an element.

- What is an "event handler"? Which component declares the handler?
  An event handler is a function that is called when the event is fired. The parent component declares the handler which makes the child component easier to reuse.

- How do you pass an event handler to a React component?
  We pass it with an event handler prop.

- What is the naming convention for event handlers?
  Event handlers must begin with the handle keyword followed by an uppercase letter

- What is an "event handler prop"? Which component declares the prop?
  They are used to attach an event handler to an element. The child component declares the prop that calls the event handler that the parent passed to the prop.

- What are some custom event handler props a component may wish to define?
  onInputChange, onBtnClick, onToggle

- What is the naming convention for custom event handler props?
  Event handler props must begin with on

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
