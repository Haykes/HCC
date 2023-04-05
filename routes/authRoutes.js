const express = require("express");
const authController = require('../controllers/authController');

const router = express.Router();

router.get("/", (req, res) => {
  // Logique pour récupérer la liste des adhérents
});

router.get("/:id", (req, res) => {
  // Logique pour récupérer un adhérent spécifique
});

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;
