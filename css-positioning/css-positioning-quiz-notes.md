# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  static

- How does setting `position: relative` on an element affect document flow?
  Once the positioned element has taken its place in the normal flow, we can then modify its final position, including making it overlap other elements on the page.

- How does setting `position: relative` on an element affect where it appears on the page?
  The element's position is adjusted relative to its original position in the normal document flow.

- How does setting `position: absolute` on an element affect document flow?
  An absolutely positioned element does not exist in the normal document flow. It sits on its own layer separate from everything else.

- How does setting `position: absolute` on an element affect where it appears on the page?
  The element is positioned relative to the nearest positioned ancestor (an ancestor with position: relative, absolute, or fixed).

- How do you constrain an absolutely positioned element to a containing block?
  Set the container's position property and set the absolutely positioned element's top, right, bottom, and left values relative to that container.

- What are the four box offset properties?
  top, right, bottom, left

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
