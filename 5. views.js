

const express = require('express');
const app = express();
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.get('/', function (req, res) {
  res.render('index')
})
app.listen(3000);



