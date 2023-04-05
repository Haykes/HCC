const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  // Logique pour ajouter un match
});

router.put("/:id", (req, res) => {
  // Logique pour modifier un match
});

router.get("/", (req, res) => {
  // Logique pour récupérer la liste des matchs
});

router.get("/:id", (req, res) => {
  // Logique pour récupérer un match spécifique
});

module.exports = router;
