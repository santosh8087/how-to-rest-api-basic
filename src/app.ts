import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, function() {
  if (false) {
    return console.error("ss");
  }
  return console.log(`server is listening on ${port}`);
});