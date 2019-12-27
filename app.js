const express = require('express');
const bodyParser = require('body-parser');

const place = require('./models/place');

const app = express();
let from1 = ""; 
let to1 = "";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  place.find({from: from1, to: to1})
    .then(places => {
      res.render('index', { places: places });
    })
    .catch(err => {
      res.status(200).json({ err: err });
    });
});

app.get('/', (req, res) => res.render('index'));

app.post('/', (req, res) => {
  const {from, to} = req.body;

  from1 = from;
  to1 = to;
  res.redirect('/');
});

module.exports = app;
