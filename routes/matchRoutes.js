const express = require("express");
const router = express.Router();

const matchController = require("../controllers/matchController");

// Routes pour les matchs
router.get("/", matchController.getAllMatchs);
router.get("/:id", matchController.getMatchById);
router.post("/", matchController.createMatch);
router.put("/:id", matchController.updateMatch);
router.delete("/:id", matchController.deleteMatch);

module.exports = router;
