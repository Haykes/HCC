const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  // Logique pour publier une actualité
});

router.get("/", (req, res) => {
  // Logique pour récupérer la liste des actualités
});

router.get("/:id", (req, res) => {
  // Logique pour récupérer une actualité spécifique
});

module.exports = router;
