const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'heroku_a7d2a55b2795ea1',
  'be22ec052f4541',
  'f9ea654e',
  {
    host: 'us-cdbr-east-06.cleardb.net',

    dialect: 'mysql',
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('conexão realizada com sucesso!');
  })
  .catch(() => console.error('erro ao conectar!'));

module.exports = sequelize;
