const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.status(200).json({
    message: "HNGI14 Stage 1",
    track: "DevOps",
    username: "nyson"
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
