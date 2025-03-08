# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  It is used to manage and share global state across components without prop drilling.

- What values can be stored in context?
  It can store any JavaScript value, including objects, arrays, functions, and primitive values.

- How do you create context and make it available to the components?
  You create context using createContext(), provide it using a Context Provider, and wrap components that need access to the data.

- How do you access the context values?
  Components access context values using the useContext() hook.

- When would you use context? (in addition to the best answer: "rarely")
  It is useful for globally shared data like authentication state, themes, or shopping carts, but should be used sparingly to avoid unnecessary re-renders.

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
