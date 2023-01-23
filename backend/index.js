const express = require('express');
const cors = require('cors');
const database = require('./src/config/database');
database.sync({ force: false });
const uploadImage = require('./src/config/upload-image');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.port || 3000;

//routes
const user = require('./src/routes/user');
const movie = require('./src/routes/movie');
const gender = require('./src/routes/gender');
const review = require('./src/routes/review');

app.use('/users', user);
app.use('/movies', movie);
app.use('/genders', gender);
app.use('/reviews', review);

//image upload
app.post('/upload-image', uploadImage.single('image'), async (req, res) => {
  console.log(req.file);

  res.json({ message: 'teste' });
});

app.use('/upload', express.static('public/images'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
