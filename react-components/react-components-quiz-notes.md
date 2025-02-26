# react-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a React component?
  It is a reusable piece of code just like a JavaScript function. It takes in data in the form of props and with that data creates elements that contain HTML, CSS and JavaScript

- How do you define a component in React?
  A component in React is defined with the function keyword followed by the name of the component in PascalCase which is followed by parenthesis for props and a code block enclosed in curly braces that returns JSX

- How is a component "rendered" (made visible on the browser page)?
  --Components are imported into App.tsx, where the App function returns JSX containing those components.
  --The App component is imported into main.tsx.
  --In main.tsx, React creates a root using ReactDOM.createRoot() and renders the App component inside the element with id="root".

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
