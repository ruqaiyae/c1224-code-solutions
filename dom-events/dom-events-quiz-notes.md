# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To get values of variables and for debugging purposes

- What is the purpose of events and event handling?
  Events are actions or occurrences that happen in the browser, such as a user clicking a button, submitting a form, or even hovering over an element. Event handlers are functions that respond to user actions or interactions with a web page, such as clicking a button or pressing a key. So the purpose is to make the program interactive by responding to user actions.

- Are all possible parameters required to use a JavaScript method or function?
  Yes

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener method

- What is a callback function?
  A callback function is a function passed into another function as an argument. In the context of event handling, callback functions are used to respond to events triggered by user interactions or other asynchronous actions.

- What object is passed into an event listener callback when the event fires?
  The event object that JS created when an event occurs is passed as an argument.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  event.target refers to the element that is responsible for firing the event.
  We can check by logging event.target to the console. We can get more information about it by logging the event to the console.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  In the first snippet, the second argument is a function definition while in the second snippet the second argument is a call to the function.

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
