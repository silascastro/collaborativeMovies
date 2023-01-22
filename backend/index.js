const express = require('express');
const cors = require('cors');
const database = require('./src/config/database');
database.sync({ force: false });

const user = require('./src/routes/user');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.port || 3000;

//routes
app.use('/user', user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
