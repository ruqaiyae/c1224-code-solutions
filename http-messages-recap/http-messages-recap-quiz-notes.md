# http-messages-recap-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?
  Client is a computer that gets information from another computer called server in the context of client–server model of computer networks. The server is often (but not always) on another computer system, in which case the client accesses the service by way of a network.

- What is a server?
  A server is a computer that provides information to other computers called "clients" on a computer network.

- Which HTTP method does a browser issue to a web server when you visit a URL?
  GET method

- What is on the first line of an HTTP **request** message?
  The first line is called a "request-line" and is made of three parts:
  <method> <request-target> <protocol>
  -- Method is one of a set of defined words that describes the meaning of the request and the desired outcome. For example, GET indicates that the client would like to receive a resource in return, and POST means that the client is sending data to a server.
  -- Request target is usually an absolute or relative URL
  -- Protocol refers to the HTTP version used in the communication between the client and the server. The HTTP version defines the structure of the remaining message.

- What is on the first line of an HTTP **response** message?
  The first line is called a "status line" in responses, and has three parts:
  <protocol> <status-code> <status-text>
  -- Protocol is the HTTP version of the remaining message.
  -- Status code is a numeric value that indicates whether the request succeeded or failed. Common status codes are 200(successful), 404(not found), or 302(redirection).
  -- The status text is a brief, purely informational, textual description of the status code to help a human understand the HTTP message.

- What are HTTP headers?
  HTTP headers contain metadata that describes the message. For example, a request for a resource might include the allowed formats of that resource, while the response might include headers to indicate the actual format returned.

- Is a body required for a valid HTTP message?
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
