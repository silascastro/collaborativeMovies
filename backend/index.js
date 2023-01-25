const express = require('express');
const cors = require('cors');
const database = require('./src/config/database');
database.sync({ force: false });
const uploadImage = require('./src/config/upload-image');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

//routes

const movie = require('./src/routes/movie');
const review = require('./src/routes/review');

// app.use('/users', user);
app.use('/movies', movie);
app.use('/reviews', review);

//image upload
app.post('/upload-image', uploadImage.single('image'), async (req, res) => {
  res.json({ data: req.file });
});

app.use('/upload', express.static('public/images'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
