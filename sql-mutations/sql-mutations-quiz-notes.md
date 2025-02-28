# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Create (Insert), Read(Select), Update, and Delete

- How do you add a row to a SQL table?
  With the insert statement -
  -- The statement begins with the insert keyword.
  -- In PostgreSQL, the table to insert into is specified in " double quotes.
  -- The list of columns being inserted is wrapped in () parenthesis.
  -- The values being inserted are also wrapped in () in parenthesis in the same order as the columns they belong to. In SQL, a list of values is referred to as a tuple.
  -- Text values are wrapped in ' single quotes.
  Eg.
  insert into "products" ("name", "description", "price", "category")
  values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care');

- How do you add multiple rows to a SQL table at once?
  Data rows can be batch inserted into a database table by specifying more than one tuple of values, separated by commas.
  Eg.
  insert into "products" ("name", "description", "price", "category")
  values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care'),
  ('Tater Mitts', 'Scrub some taters!', 6, 'cooking')

- How do you update rows in a database table?
  With the update statement
  Eg.
  update "products"
  set "price" = 100
  where "productId" = 24;

- How do you delete rows from a database table?
  With the delete statement
  Eg.
  delete
  from "products"
  where "productId" = 24

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  With it, we would update or delete all the rows.

- How do you accidentally delete or update all rows in a table?
  If we don't use the 'where' clause

- How do you get back the modified row without a separate `select` statement?
  We use returning \*

- Why did you get an error when trying to delete certain films?
  Because the films table has a foreign key relationship with the castMembers table. Specifically, the film_actor_film_id_fkey constraint on castMembers ensures that filmId in castMembers references valid entries in the films table.

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
