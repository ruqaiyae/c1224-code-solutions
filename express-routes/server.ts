import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), ',', req.method, req.path);
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello');
  next();
});

app.get('/notes', (req, res, next) => {
  res.send('Here are the notes');
  next();
});

app.post('/notes/:noteId', (req, res, next) => {
  res.send(`Created note ${req.params.noteId}`);
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
