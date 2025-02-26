# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  Hooks are special functions that allow components to have access to state will be persisted across component calls and used to schedule component re-renders.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  The function name must start with use followed by an uppercase letter
  Hooks can only be called by React components and other hooks
  All hooks in a component must always be called at the top level of a component, and in the same order. This means you cannot call hooks in nested functions or conditional statements

- What is the purpose of state in React?
  State allows React to create dynamic components that have the ability to respond to user input and update what is being displayed to the DOM based on user interactions or variable value changes.

- Why can't we just maintain state in a local variable?
  Because local variables do not persist between function calls. Each time when a function is called, new variables are allocated and prior data is lost.

- What two actions happen when you call a `state setter` function?
  The value of state changes and the component re-renders.

- When does the local `state variable` get updated with the new value?
  When the component is re-rendered.

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
