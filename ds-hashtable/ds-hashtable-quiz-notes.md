# ds-hashtable-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Hash Table data structure.
  A Hash Table is a data structure that stores data as key/value pairs. A Hash Table stores the keys in a list (often referred to as the "buckets" list).

- What are some examples of when you would use a Hash Table?
  Documents, telephone directory

- How do you read a key's value in a Hash Table? What is its time complexity?
  To locate an item, the key is "hashed", which means that a calculation is performed on it that reduces the key to a number between 0 and the size of the list. This hash value is used as an index into the buckets list to find the item. Its time complexity constant time

- How do you add a key/value into a Hash Table? What is its time complexity?
  We first perform a check to see if a key is already present, if it isn't we add the new key/value pair. Its time complexity constant time

- How do you update a key's value in a Hash Table? What is its time complexity?
  We call the hash function with the key and get the index, we then use that index to update the value. Its time complexity constant time

- How do you remove a key/value from a Hash Table? What is its time complexity?
  We call the hash function with the key and get the index, we then use that index to remove the value. Its time complexity constant time

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
