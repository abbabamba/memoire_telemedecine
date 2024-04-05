const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Patient = require('./Patient');
const Medecin = require('./Medecin');
const ConsultantLocal = require('./ConsultantLocal');

const Authentification = sequelize.define('Authentification', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  utilisateur_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('patient', 'medecin', 'consultant_local'),
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

Authentification.belongsTo(Patient, {
  foreignKey: 'utilisateur_id',
  constraints: true,
  onDelete: 'CASCADE',
});

Authentification.belongsTo(Medecin, {
  foreignKey: 'utilisateur_id',
  constraints: true,
  onDelete: 'CASCADE',
});

Authentification.belongsTo(ConsultantLocal, {
  foreignKey: 'utilisateur_id',
  constraints: true,
  onDelete: 'CASCADE',
});

module.exports = Authentification;
