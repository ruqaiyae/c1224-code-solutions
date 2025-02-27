# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  When React renders a component for the first time, it is mounted to the DOM.

- What is a React Effect?
  It is React hook that allows us to interact with things outside of React
  For example:
  -- with the network (for network request)
  -- with JS runtime (for timers)

- When should you use an Effect and when should you not use an Effect?
  When you want to make a network request or when using timers.

- When do Effects run?
  When the component is first mounted and when the values in the dependency array changes

- What function is used to declare an Effect?
  useEffect

- What are Effect dependencies and how do you declare them?
  They are things the effect function uses that are declared outside of the function. They are put in an array and passed as the second argument to useEffect.

- Why would you want to clean up from an Effect?
  To clear an interval, to cancel a network request

- How do you clean up from an Effect?
  By returning a function from the effect function

- When does the cleanup function run?
  When the component unmounts and/or if the dependency array has changed.

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
