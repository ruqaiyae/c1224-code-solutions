# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  No, creating an element does not automatically add it to the page, it just creates the DOM object in JavaScript. In order to actually see this newly created item on the page, it must be appended to an element that currently already exists on the DOM.

- How do you add an element as a child to another element?
  appendChild() adds an element as a child to another element

- What do you pass as the arguments to the `element.setAttribute()` method?
  It takes in 2 arguments, the first being a string of the attribute you are trying to create or update, like class, id, type, etc. The 2nd argument is the value that you would like to assign to that attribute.

- What steps do you need to take in order to insert a new element into the page?
  We declare a variable that we would like to store our new element in.
  We then call the createElement method of the document object with one argument. The argument is the name of the element we want to create.

- What is the `textContent` property of an element object for?
  The textContent property represents the text content of an element and all it's descendants. It is a getter/setter.

- Name two ways to set the `class` attribute of a DOM element.
  "className" property
  "setAttribute" property

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  Functions are reusable blocks of code. Defining a function makes it easier to turn data from objects into a similar HTML structure and add those new elements to the page.

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
