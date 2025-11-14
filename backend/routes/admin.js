const express = require("express");
const router = express.Router();
const {  getPendingDoctors, verifyDoctor, getAllPatients } = require("../controllers/adminController");
const {protect} = require('../middlewares/authMiddleware')

router.get("/pending-doctors", protect, getPendingDoctors);
router.put("/verify-doctor/:id", protect, verifyDoctor);
router.get("/patients", protect, getAllPatients);

module.exports = router;
