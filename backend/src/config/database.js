const Sequelize = require('sequelize');

const sequelize = new Sequelize('movies', 'be22ec052f4541', 'f9ea654e', {
  host: 'localhost',

  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('conexão realizada com sucesso!');
  })
  .catch(() => console.error('erro ao conectar!'));

module.exports = sequelize;
