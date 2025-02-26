# ds-bst-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Binary Search Tree data structure.
  It is a data structure that holds its data in a tree, with special rules that allow for quick search and retrieval. It resembles an upside down tree, with a "root" at the top and children beneath it. Each node in the tree contains the node's value and references to the children beneath it.

- What are some examples of when you would use a Binary Search Tree?
  A dictionary, A calender

- How do you determine if an element is in a Binary Search Tree? What is its time complexity?
  To find a node, start at the root and compare its value to the search node's value. If the search node's value is less than the root node's value, continue the search down the left subtree. If it is greater than the root node's value, continue the search down the right subtree. Then repeat until the value is found or the search ends without finding the value.
  Logarithmic Complexity (or O(log N))

- How do you add an element into a Binary Search Tree? What is its time complexity?
  We start at the root and compare its value to the new node's value. If the new node's value is less than the root node's value, continue the search down the left subtree. If it is greater than the root node's value, continue the search down the right subtree. Then repeat until we find the location where we want to add the new element. We move the nodes down the tree to add the new element.
  Logarithmic Complexity (or O(log N))

- How do you remove an element from a Binary Search Tree? What is its time complexity?
  We locate the node we want to remove and move the nodes up the tree. Logarithmic Complexity (or O(log N))

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
