require('dotenv').config();

const cors = require('cors');
const express = require('express');
const routes = require('./routes/indexRoutes');

const app = express();

app.use(cors('*'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/works', routes.work);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('Something bad happened...');
  } else {
    console.log(`server is listening on port ${process.env.PORT}`);
  }
});
