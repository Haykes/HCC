const db = require("../models/db");
const jwt = require("jsonwebtoken");

// Contrôleur pour la soumission du formulaire de connexion
exports.login = (req, res) => {
  const { username, password } = req.body;

  // Vérifiez que l'utilisateur a fourni un nom d'utilisateur et un mot de passe
  if (!username || !password) {
    res.status(400).json({ error: "Please provide a username and password" });
    return;
  }

  // Vérifiez les informations d'identification de l'utilisateur dans la base de données
  const user = db.getUserByUsername(username);
  if (!user || user.password !== password) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  // Générez un token d'authentification pour l'utilisateur
  const token = generateAuthToken(user.id);

  // Stockez le token dans la base de données pour une utilisation future
  db.storeToken(user.id, token);

  // Retournez le token dans la réponse
  res.json({ token });
};

// Fonction pour générer un token JWT
function generateAuthToken(userId) {
  const payload = { userId };
  const secret = "your-secret-key";
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
}
