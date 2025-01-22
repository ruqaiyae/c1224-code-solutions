# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  They are a logical operators.
  `&&` (logical AND) evaluates expression 2 if expression 1 is true.
  `||` (logical OR) evaluates expression 2 if expression 1 is false.
  They are used to check if conditions are met and take action based on those conditions in a single line of code.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Short-circuiting is a behavior exhibited by logical operators (&&, ||) where the evaluation of the second operand is skipped if the outcome can be determined by evaluating the first operand alone.

  For eg.
  With `&&` (logical AND) if first operand is false, the evaluation of the second operand is skipped.
  With `||` (logical OR) if first operand is true, the evaluation of the second operand is skipped.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The `??` (nullish coalescing) operator handles cases where variables might be null or undefined, providing a reliable way to set default values without the pitfalls of logical OR with falsy values like 0 or ''.

  For eg.
  With `??` (nullish coalescing) operator, if the value of the first operand is null or undefined, the second operand is evaluated.
  With `||` (logical OR) operator, if the value of the first operand is 'any falsy value (null, undefined, 0, false, '', NaN)', the second operand is evaluated.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The `?:` (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. It works like `if/else`, but in one line of code.

- What is the `?.` (optional chaining) operator? When would you use it?
  The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
  To safely access properties on objects that might not exist, preventing runtime errors due to undefined or null object properties.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The `...` (spread) syntax allows an iterable such as an array or a string to be expanded in places where zero or more arguments or elements are expected, or an object expression to be expanded in places where zero or more key-value pairs are expected.

- What data types can be spread into an array? Into an object?
  Only iterable values, like Array and String, can be spread in array literals.
  On the other hand, spreading in object literals enumerates the own properties of the value. For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects. All primitives can be spread in objects. Only strings have enumerable own properties, and spreading anything else doesn't create properties on the new object.

- How does spread syntax differ from rest syntax?
  Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## Notes

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
