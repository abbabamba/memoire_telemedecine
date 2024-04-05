const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Prescription = sequelize.define('Prescription', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  consultation_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  medicament: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  dosage: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  frequence: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  duree_traitement: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  instructions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Prescription;
