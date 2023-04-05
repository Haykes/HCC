// Importez les dépendances nécessaires
const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const config = require("./config");

// Importez les fichiers de route
const adherentRoutes = require("./routes/adherentRoutes");
const actualiteRoutes = require("./routes/actualiteRoutes");
const matchRoutes = require("./routes/matchRoutes");
const authRoutes = require("./routes/authRoutes");

// Initialisez l'application Express
const app = express();

// Utilisez le middleware bodyParser pour parser les requêtes JSON
app.use(bodyParser.json());

// Configurez la connexion à la base de données SQLite
const db = new sqlite3.Database(config.databasePath, (err) => {
  if (err) {
    console.error(
      "Erreur lors de la connexion à la base de données SQLite:",
      err.message
    );
  } else {
    console.log("Connecté à la base de données SQLite");
  }
});

// Enregistrez la connexion à la base de données dans l'objet "app" pour y accéder dans les autres fichiers
app.locals.db = db;

// Utilisez les routes importées
app.use("/adherents", adherentRoutes);
app.use("/actualites", actualiteRoutes);
app.use("/matchs", matchRoutes);
app.use("/auth", authRoutes);

// Démarrez le serveur sur un port spécifique
const port = process.env.PORT || config.port;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
