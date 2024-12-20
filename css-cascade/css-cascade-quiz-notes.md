# css-cascade-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the four components of "the Cascade".
  Source Order, Inheritance, Specificity and !important

- What does the term "source order" mean with respect to CSS?
  Source order determines which styles are applied when multiple rules could affect the same element. The styling provided for an element last in the stylesheet is the styling that will ultimately take effect.

- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  Inheritance is the process by which certain CSS properties on a child HTML element can receive value from a parent element, if no CSS for that property is directly declared on the child element.

- List the three selector types in order of increasing specificity.
  Universal selector (\*), Class selectors, ID selectors

- Why is using `!important` considered bad practice?
  Because it disrupts the natural flow of cascading styles, making debugging and maintenance challenging.

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
