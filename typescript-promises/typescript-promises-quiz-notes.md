# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  The Event Queue model of Promises is as follows:
  When the Promise is created, the Promise task is synchronously put onto the Event Queue.
  Synchronous execution of the calling code continues until the end of the function(s).
  When the current functions complete, the Event Loop runs.
  The Promise task is taken from the Event Queue and executed.
  After the Promise task completes:
  If it completes successfully, the Promise calls the then handler
  If it completes with an error, the Promise calls the catch handler
  The Promise then calls the finally handler (in all cases).

- What are the three states a Promise can be in?
  Pending: The initial state; the promise is neither resolved nor rejected.
  Fulfilled: The promise has been resolved, and the corresponding then handlers will be called.
  Rejected: The promise has been rejected, and the catch handlers will be invoked.

- How do you handle the fulfillment of a Promise?
  The fulfillment of a Promise is managed by attaching a .then() method to the Promise. The .then() method takes a callback function that will be called when the Promise is resolved.

- How do you handle the rejection of a Promise?
  The rejection of a Promise is managed by attaching a .catch() method. The .catch() method is used to define a callback that will be executed if the Promise is rejected.

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
