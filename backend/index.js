const express = require('express');
const cors = require('cors');
const database = require('./src/config/database');
const Gender = require('./src/models/gender');
const Movie = require('./src/models/movie');
database.sync({ force: true });

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.port || 3000;

app.get('/', async (req, res) => {
  // const novoGenero = Gender.create({
  //   gender: 'terror',
  // });

  // const novoFilme = Movie.create({
  //   movie_name: 'sexta feira 13',
  //   movie_description: 'tarara!',
  //   gender_id: novoGenero.gender_id,
  // });

  // const User = User.create({

  // })
  const movies = Movie.findAll();

  console.log(movies);
  return res.json({ teste: 'aaaaa' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
