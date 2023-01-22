const express = require('express');
const cors = require('cors');
const database = require('./src/config/database');
database.sync({ force: false });

//routes
const user = require('./src/routes/user');
const movie = require('./src/routes/movie');
const gender = require('./src/routes/gender');
const review = require('./src/routes/review');
const favorite = require('./src/routes/favorite');
const character = require('./src/routes/character');
const actor = require('./src/routes/actor');

app.use('./images');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.port || 3000;

//routes
app.use('/users', user);
app.use('/movies', movie);
app.use('/genders', gender);
app.use('/reviews', review);
app.use('/favorites', favorite);
app.use('/characters', character);
app.use('/actors', actor);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
