const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const ConsultantLocal = sequelize.define('ConsultantLocal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  mot_de_passe: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = ConsultantLocal;
