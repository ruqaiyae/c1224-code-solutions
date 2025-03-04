# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  It allows Express.js to interact with a PostgreSQl database,

- How do you tell `pg` which database to connect to?
  We create a new Pool and pass it an object and with a property called connectionString with a value that has the database name at the end of the connection string.

- How do you send SQL to PostgreSQL from your Express server?
  We use db.query() to send SQL queries to PostgreSQL and receive results.

- How do you access the rows that get returned from the SQL query?
  We access them from the rows property of the pg.Result object.

- What must you always remember to put around your asynchronous route handlers? Why?
  A try-catch block to handle errors

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  It is when an attacker injects malicious code in the query by manipulating user input. We can avoid it with parameterized query. (It is a method of using placeholders - $1, $2 instead of the variables in the SQL string and then passing the values in an array)

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
