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

app.get('/yondu', (req, res) => {
  if (req.query.distance !== undefined && req.query.time !== undefined) {
    let speed = req.query.distance / req.query.time;
    res.status(200);
    res.json({
      "distance": parseFloat(parseFloat(req.query.distance).toFixed(1)),
      "time": parseFloat(parseFloat(req.query.time).toFixed(1)),
      "speed": parseFloat(parseFloat(speed).toFixed(1))
    });
  } else {
    res.status(404);
    res.json({
      "error": "Give distance and time!"
    });
  }
});

module.exports = app;