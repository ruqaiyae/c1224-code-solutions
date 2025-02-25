# unit-tests-jest-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are unit tests?
  They are a way of testing the smallest piece of code that can be logically isolated in a software application.

- Why is it important to write unit tests?
  Unit tests help catch bugs

- What code should be tested with a unit test? What code is not well suited for unit tests?
  Unit tests should only test exported functions and components, not implementation details. Only the externally visible behavior of an exported function or component should be tested. For example, if an exported function calls another function that is not exported, only the exported function should be tested, since the non-exported function is an implementation detail. Of course, the non-exported function's code will be executed during the test, but the test should not call it directly.
  Code that makes api calls or interacts with a database is not suited for unit tests because it results in a test suite that takes longer and longer to run with each added test.

- What is Jest? What are some other popular JavaScript unit testing frameworks?
  It is the most popular JavaScript unit testing framework. JUnit, Mocha

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
