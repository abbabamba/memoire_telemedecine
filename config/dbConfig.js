const Sequelize = require('sequelize');

const sequelize = new Sequelize('base_telemedecine', 'babs', 'bismibamba111', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;
