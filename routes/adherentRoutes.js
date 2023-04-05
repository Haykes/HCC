const express = require("express");
const router = express.Router();

const adherentController = require("../controllers/adherentController");

// Routes pour les adhérents
router.get("/", adherentController.getAllAdherents);
router.get("/:id", adherentController.getAdherentById);
router.post("/", adherentController.createAdherent);
router.put("/:id", adherentController.updateAdherent);
router.delete("/:id", adherentController.deleteAdherent);

module.exports = router;
