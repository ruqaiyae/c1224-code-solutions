# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to programmatically create a list of React components?
  When we want show several instances of the same component using different data

- Why is it important for React components to be data-driven?
  Since data can be dynamic, having flexible react components can accommodate this dynamic data. Also, in most React apps, the majority of the data is read from the database, so the component must handle unknown data efficiently.

- What `Array` method is commonly used to create a list of React components?
  The map() method is commonly used to create a list of React components.

- Why do components in a list need to have unique keys?
  Keys tell React which array item each component corresponds to, so that it can match them up later.

- What is the best value to use as a "key" prop when rendering lists?
  A stable ID based on the data. Because index as a key would lead to bugs since the order in which items are rendered will change over time if an item is inserted, deleted, or if the array gets reordered. ID generated with key={Math.random()} will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items.

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
