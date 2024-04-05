const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const DonneesMedicales = sequelize.define('DonneesMedicales', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  saisie_donnees_patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pression_arterielle_systolique: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    validate: {
      min: 80,
      max: 200,
    },
  },
  pression_arterielle_diastolique: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    validate: {
      min: 50,
      max: 120,
    },
  },
  frequence_cardiaque: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 40,
      max: 200,
    },
  },
  temperature_corporelle: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false,
    validate: {
      min: 35,
      max: 42,
    },
  },
  date_saisie: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = DonneesMedicales;
