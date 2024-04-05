const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Rendezvous = sequelize.define('Rendezvous', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date_rendez_vous: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  medecin_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  motif: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Rendezvous;
