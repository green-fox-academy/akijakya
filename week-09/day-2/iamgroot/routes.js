const express = require('express');
const app = express();


app.get('/groot', (req, res) => {
  if (req.query.message !== undefined) {
    res.status(200);
    res.json({
      "received": req.query.message,
      "translated": "I am Groot!"
    });
  } else {
    res.status(404);
    res.json({
      "error": "I am Groot!"
    });
  }
});

module.exports = app;