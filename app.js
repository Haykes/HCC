const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authRoutes = require("./routes/authRoutes");
const adherentsRoutes = require("./routes/adherentsRoutes");
const actualitesRoutes = require("./routes/actualitesRoutes");
const matchsRoutes = require("./routes/matchsRoutes");

const app = express();
app.use(express.json());

const db = new sqlite3.Database(":memory:");

// Création des tables et ajout de données initiales
db.serialize(function () {
  // Ajoutez ici les instructions SQL pour créer vos tables
  // Exemple : db.run("CREATE TABLE adherents (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, prenom TEXT, ...)");
});

app.use("/auth", authRoutes);
app.use("/adherents", adherentsRoutes);
app.use("/actualites", actualitesRoutes);
app.use("/matchs", matchsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarre sur le port ${port}`);
});
