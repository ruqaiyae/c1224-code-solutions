# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?
  Client is a computer that gets information from another computer called server in the context of client–server model of computer networks. The server is often (but not always) on another computer system, in which case the client accesses the service by way of a network.

- What is a server?
  A server is a computer that provides information to other computers called "clients" on a computer network.

- Which HTTP method does a browser issue to a web server when you visit a URL?
  GET method

- What three things are on the start-line of an HTTP **request** message?
  <method>: The HTTP method (also known as an HTTP verb) is one of a set of defined words that describes the meaning of the request and the desired outcome. For example, GET indicates that the client would like to receive a resource in return, and POST means that the client is sending data to a server.
  <request-target>: The request target is usually an absolute or relative URL, and is characterized by the context of the request. The format of the request target depends on the HTTP method used and the request context.
  <protocol>: The HTTP version, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response. This is almost always HTTP/1.1, as HTTP/0.9 and HTTP/1.0 are obsolete. In HTTP/2 and above, the protocol version isn't included in messages since it is understood from the connection setup.

- What three things are on the start-line of an HTTP **response** message?
  <protocol>: The HTTP version of the remaining message.
  <status-code>: A numeric status code that indicates whether the request succeeded or failed. Common status codes are -
  200(The HTTP 200 OK successful response status code indicates that a request has succeeded),
  404(The HTTP 404 Not Found client error response status code indicates that the server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links),
  302(The HTTP 302 Found redirection response status code indicates that the requested resource has been temporarily moved to the URL in the Location header).
  <status-text>:

- What are HTTP headers?'
  HTTP headers contain metadata that describes the message. For example, a request for a resource might include the allowed formats of that resource, while the response might include headers to indicate the actual format returned.

- Where would you go if you wanted to learn more about a specific HTTP Header?
  In the Network tab of the developer tools.

- Is a body required for a valid HTTP request or response message?
  Responses with a status code that answers the request without the need to include message content, such as 201 Created or 204 No Content, do not have a body.

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
