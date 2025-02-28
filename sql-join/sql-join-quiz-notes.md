# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  It is a column in a table that references the primary key of another table.
  In many-to-many relationships there is a 3rd table that contains a foreign key to one of the tables and another foreign key to the other table. This table is referred to as a "join table".

- How do you join two SQL tables? (Provide at least two syntaxes.)
  -- When primary and foreign keys have same names:
  select \*
  from "products"
  join "suppliers" using ("supplierId");

  -- When primary and foreign keys have different names:
  select \*
  from "products"
  join "suppliers" on "products"."supplier_Id" = "suppliers"."supplierId";

- How do you temporarily rename columns or tables in a SQL statement?
  select "products"."name" as "product", "suppliers"."name" as "supplier"
  from "products"
  join "suppliers" using ("supplierId");

- How do you create a one-to-many relationship between two tables?
  With a foreign key in one table pointing to a primary key in another table

- How do you create a many-to-many relationship between two tables?
  With a join table where there is a 3rd table that contains a foreign key to one of the tables and another foreign key to the other table.

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
