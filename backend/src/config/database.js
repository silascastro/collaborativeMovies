const Sequelize = require('sequelize');

const sequelize = new Sequelize('movies', 'root', 'qwert123', {
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
