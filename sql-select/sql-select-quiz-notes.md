# sql-select-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is SQL and how is it different from languages like JavaScript?
  Structured Query Language (SQL) is the primary way of interacting with relational databases. It is a powerful way of retrieving, creating, and manipulating data in a relational database.

JS is an imperative programming language while SQL is a declarative programming language. In declarative languages, programmers describe the results they want and the programming environment comes up with its own plan for getting those results.

- How do you retrieve specific columns from a database table?
  We query the database table with a select statement.
  -- The query starts with the select keyword.
  -- The select keyword is followed by a comma-separated list of column names.
  -- The column names are followed by a from clause specifying which table to retrieve the data from.
  -- The query must end in a ; semicolon.

- How do you filter rows based on some specific criteria?
  With a where clause.
  eg. select "column_name_1",
  "column_name_2"
  from "table_name"
  where "column_name" = 'value';

- What are the benefits of formatting your SQL?
  For readability

- What are four comparison operators that can be used in a `where` clause?
  =, <, >, and !=

- How do you limit the number of rows returned in a result set?
  With the limit clause. It comes last in a 'select' statement

- How do you retrieve all columns from a database table?
  We use the asterisk in place of column names
  eg. select \*
  from "table_name"

- How do you control the sort order of a result set?
  With the order by clause which comes after the from clause. The default default sort order of the results is ascending order. However, we can switch to descending order with the desc keyword.
  eg. select "column_name_1",
  "column_name_2"
  from "table_name"
  order by "column_name" desc

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
