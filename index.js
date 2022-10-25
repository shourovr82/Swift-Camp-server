const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const checkout = require('./data/checkout.json')

app.get('/', (req, res) => {
  res.send('swift-camp server is running')
})

app.get('/courses', (req, res) => {
  res.send(courses)
})


app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const details = courses.find(n => n.id == id);
  res.send(details)
})

app.get('/checkout/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const check = checkout.find(n => n.id == id);
  res.send(check);
})



app.listen(port, () => {
  console.log('swift-camp server running on 5000');
})