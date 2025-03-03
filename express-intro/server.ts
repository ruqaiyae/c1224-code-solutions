import express from 'express';

const app = express();

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

app.use((req, res, next) => {
  console.log('Hello, World!');
  console.log('The date is', new Date());
  next();
});
