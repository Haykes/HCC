const express = require("express");

const app = express();
app.use(express.json()); // Pour utiliser JSON dans les requêtes

// Votre code ici ...

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
