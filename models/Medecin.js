const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Medecin = sequelize.define('Medecin', {
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
  specialite: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  numero_ordre: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  adresse_cabinet: {
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

module.exports = Medecin;
