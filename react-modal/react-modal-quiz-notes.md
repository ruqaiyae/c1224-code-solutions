# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  It's used to create both modal and non-modal dialog boxes. Modal dialog boxes interrupt interaction with the rest of the page being inert, while non-modal dialog boxes allow interaction with the rest of the page.

- How do you show and hide a modal dialog?
  showModal() and close()

- How do you manipulate child components in React? Why will that not work for the `<dialog>` element?
  With props. Because the dialog element needs to be referenced, so we use the useRef hook.

- How do you call the dialog element's functions in React?
  We call useRef with a value of null and save it in a variable. We pass the ref prop with the value of the variable to the dialog element. We use that variable to call the dialog element's functions.

- How can you render nested components or JSX elements in React?
  With the children prop

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
