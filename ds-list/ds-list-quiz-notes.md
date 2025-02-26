# ds-list-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:cd

- Briefly describe the List data structure.
  A list is a data structure that holds its data in a contiguous block of memory. Each element in a list is the same size, and they are accessed by index, with the first element being at index 0. It allows for insertion, deletion, and retrieval of elements at specific positions.

- What are some examples of when you would use a List?
  To do list, products list, grocery list

- How do you read an element of a List given its index? What is its time complexity?
  An element in a list can be located in memory by multiplying the index by the element size and adding the memory location of the first element in the list.
  We read an element of a List given its index with bracket notation. Its time complexity is O(1) (constant time).

- How do you add an element into a List at a given index? What is its time complexity?
  We find the memory location where we want to add the new element at and push the elements at that location to add the new element.
  We add an element into a List at a given index with the splice method. Its time complexity is O(n) (linear time).

- How do you update an element in a List at a given index? What is its time complexity?
  We find the memory location where we want to add the new element at and change the element at that location with the new element.
  We update an element into a List at a given index with the splice method. Its time complexity is O(1) (constant time).

- How do you remove an element from a List at a given index? What is its time complexity?
  We find the memory location where we want to add the new element at and move the elements at that location to remove the new element. (If we want to move element at index 2, elements at index 3 and upwards will move down -- element at index 3 moves to index 2, element at index 4 moves to index 3, and so on.)
  We remove an element into a List at a given index with the splice method. Its time complexity is O(n) (linear time).

ss

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
