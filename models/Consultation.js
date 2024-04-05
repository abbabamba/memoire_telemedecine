const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Patient = require('./Patient');
const Medecin = require('./Medecin');

const Consultation = sequelize.define('Consultation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date_consultation: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  type_consultation: {
    type: DataTypes.ENUM('en ligne', 'en personne', 'urgence'),
    allowNull: false,
    defaultValue: 'en ligne',
  },
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  medecin_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  duree: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  statut: {
    type: DataTypes.ENUM('en attente', 'en cours', 'terminee'),
    allowNull: false,
    defaultValue: 'en attente',
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  chat_session_id: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  video_call_session_id: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
});

Consultation.belongsTo(Patient, {
  foreignKey: 'patient_id',
});

Consultation.belongsTo(Medecin, {
  foreignKey: 'medecin_id',
});

module.exports = Consultation;
