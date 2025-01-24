# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  Adding async at the start of a function makes it an async function. The await keyword makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  They are the same. `async` and `await` syntax is syntactic sugar. Code using async and await is usually easier to follow, understand, and reason about

- When do you use `async`?
  The async keyword is used to write functions that handle asynchronous actions.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  When the function is asynchronous. The await keyword is used to indicate that the JavaScript Runtime should "wait" or "pause" until the asynchronous function completes.
  We do not use `await` when the function is synchronous.
  We would get a syntax error.

- How do you handle errors with `await`?
  Errors are handled using the standard JavaScript try/catch/finally exception handling mechanism.

- What do `try`, `catch` and `throw` do? When do you use them?
  A try-catch block handle the resolved and rejected cases. `throw` stops the execution of the code and throws an error.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  If we don't await the promise, our code is going to continue to execute. So essentially if we don't await it, our catch handler would never get called and we would never properly handle the error.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  `async/await` because the syntax is easier to read and understand.

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
