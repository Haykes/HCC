const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Logique pour récupérer la liste des adhérents
});

router.get("/:id", (req, res) => {
  // Logique pour récupérer un adhérent spécifique
});

module.exports = router;
