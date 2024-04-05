const Patient = require('./Patient');
const Medecin = require('./Medecin');
const ConsultantLocal = require('./ConsultantLocal');
const Authentification = require('./Authentification');
const Consultation = require('./Consultation');
const Message = require('./Message');
const Prescription = require('./Prescription');
const Rendezvous = require('./RenderVous');
const SaisieDonneesPatient = require('./SaisieDonneesPatient');
const RangsPatient = require('./RangsPatient');
const DonneesMedicales = require('./DonneesMedicales');
const sequelize = require('../config/dbConfig');

module.exports = {
  Patient,
  Medecin,
  ConsultantLocal,
  Authentification,
  Consultation,
  Message,
  Prescription,
  Rendezvous,
  SaisieDonneesPatient,
  RangsPatient,
  DonneesMedicales,
};
