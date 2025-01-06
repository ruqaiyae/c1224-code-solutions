# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  For debugging purposes or to get values of variables.

- What is a "model"?
  A model is a representation.

- Which "document" is being referred to in the phrase Document Object Model?
  HTML document

- What is the word "object" referring to in the phrase Document Object Model?
  Every html tag is an object in the DOM

- What is a DOM Tree?
  It is representation of html elements as tree structure.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector(selector)
  getElementById(id)

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll(selector)

- Why might you want to assign the return value of a DOM query to a variable?
  Each time we query the DOM for an element reference, it requires the interface to search through all of the HTML so that it can find the elements we are looking for.
  Because of this, it is generally a best practice to store DOM element references in a variable. Once the reference has been saved in a variable, accessing the element again does not require another search.

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  So that the browser can parse all of the elements in the HTML page before the JavaScript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?
  It takes as its argument any CSS selector. It returns the first element that matches the specified selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  It takes as its argument any CSS selector. It returns a NodeList of all elements in the document that match the specified selector.

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
