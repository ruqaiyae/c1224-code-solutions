# react-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When does React re-render a component?
  The state setter function triggers a re-render

- What are some ways to create a new, modified copy of an object?
  -- With the object.assign() method which takes 2 or more arguments
  -- With the spread syntax

- What is a good way to immutably add a value to an array?
  With the spread syntax:

```TypeScript
function addItem(arr: Array, item: unknown): Array {
  return [...arr, item];
}
```

- What is a good way to immutably update a value in an array?
  If each item in the array has a unique identifier, one of the easiest ways to do this is to use the Array.map method.

- What is a good way to immutably remove a value from an array?
  If each item in the array has a unique identifier, one of the easiest ways to do this is to use the Array.filter method.

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

## Update an Array

An item can be updated in an Array in an immutable manner by copying each element in the Array into a new Array, and then replacing the updated item. If each item in the array has a unique identifier, one of the easiest ways to do this is to use the Array.map method. The callback function can check if the item being mapped is the one to be updated, and if so, return the updated item, otherwise return the original item. This will copy every item from the original array into the new array except the one being updated, which will be the updated item instead.

## Remove item from Array

An item can be removed from an Array in an immutable manner by copying each element in the Array into a new Array, except the one being removed. If each item in the array has a unique identifier, one of the easiest ways to do this is to use the Array.filter method. The callback function can check if the item being mapped is the one to be removed, and if so, return false, otherwise return true. This will add every element to the new array except the one being removed.
