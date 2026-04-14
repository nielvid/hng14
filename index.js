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
  res.status(200).json({
    message: "API is running"
  })
});
app.get('/health', (req, res) => {
  res.status(200).json({
    message: "healthy"
  });
})

app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Godson Chinonyerem",
    email: "godsonesq@gmail.com",
    github: "https://github.com/nielvid"
  });
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
