const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const SaisieDonneesPatient = sequelize.define('SaisieDonneesPatient', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  consultant_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  medecin_destinataire_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  motif_consultation: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  observations_recommandations: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dossier_medical: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  simuler_donnees_medicales: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  date_saisie: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = SaisieDonneesPatient;
