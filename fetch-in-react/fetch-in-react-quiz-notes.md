# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  fetch()

- What two things need to be done to properly handle HTTP request errors? Why?
  try-catch and response.ok
  To let the users know about any errors

- How can `useEffect` be used to load data for a component?
  useEffect is used to fetch data when a component mounts by placing an API request inside the effect, updating state with the response, and handling errors, ensuring the component updates with the fetched data.

- How do you use `useEffect` to load component data just once when the component mounts?
  By passing an empty dependency array [] to useEffect

- How do you use `useEffect` to load component data every time the data key changes?
  Include data in the dependency array, so the effect re-runs whenever data changes.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  Third-party data management libraries like React Query and Vercel SWR help reduce excess network traffic and provide automatic updates for components that rely on the same data.

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
