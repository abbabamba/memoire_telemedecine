const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Patient = sequelize.define('Patient', {
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
  date_naissance: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  adresse: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  telephone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

module.exports = Patient;
