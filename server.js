const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>nielvid</h1>');
});

app.get('/api', (req, res) => {
  res.status(200).json({
    message: "HNGI14 Stage 1",
    track: "DevOps",
    username: "nielvid"
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});