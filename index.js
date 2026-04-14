const express = require('express');
const app = express();
const port = 8000;

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const durationMs = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${durationMs}ms`);
  });
  res.type('application/json');
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({ message: "The api is running" });
})

app.get('/help', (req, res) => {
  res.status(200).json({ message: "healthy" });
})

app.get('/me', (req, res) => {
  res.status(200).json({ message: `Godson Chinonyerem godsonesq@gmail.com https://github.com/nielvid` });
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
