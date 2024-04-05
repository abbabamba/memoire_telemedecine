const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const models = require('./models');
const sequelize = require('./config/dbConfig');

// Importer les routes
const authRoutes = require('./routes/authRoutes');
const consultationRoutes = require('./routes/consultationRoutes');
const messageRoutes = require('./routes/messageRoutes');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const prescriptionRoutes = require('./routes/prescriptionRoutes');
const appelVideoRoutes = require('./routes/appelVideoRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Autoriser les requêtes cross-origin

//Synchronisation des modèles avec la base de données
sequelize.sync()
  .then(() => {
    console.log('Base de donnée synchronisée');

    // Démarrer le serveur
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log('Serveur démarré sur le port ${PORT}');
    });
  })
  .catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/consultations', consultationRoutes);
// app.use('/api/messages', messageRoutes);
// app.use('/api/patients', patientRoutes);
// app.use('/api/doctors', doctorRoutes);
// app.use('/api/prescriptions', prescriptionRoutes);
// app.use('/api/rendezvous', rendezvousRoutes);
// app.use('/api/video-calls', videoCallRoutes);

