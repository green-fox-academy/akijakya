const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page with a name query
app.get('/', (req, res) => {
  if (req.query.name !== undefined) {
    res.render('home', {name: req.query.name});
  } else {
    res.render('home', {name: 'Guest'});
  }
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});