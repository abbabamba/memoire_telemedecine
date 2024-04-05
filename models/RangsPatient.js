const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const RangsPatient = sequelize.define('RangsPatient', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  medecin_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  statut: {
    type: DataTypes.ENUM('en_attente', 'annule'),
    allowNull: false,
    defaultValue: 'en_attente',
  },
});

module.exports = RangsPatient;
