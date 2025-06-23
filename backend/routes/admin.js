const express = require("express");
const router = express.Router();
const {  getPendingDoctors, verifyDoctor, getAllPatients } = require("../controllers/adminController");
const {protect} = require('../middlewares/authMiddleware')
const {authorizeRole} = require('../middlewares/auhtorizeRoles')

router.get("/pending-doctors", protect, authorizeRole("admin"), getPendingDoctors);
router.put("/verify-doctor/:id", protect, authorizeRole("admin"), verifyDoctor);
router.get("/patients", protect, authorizeRole("admin"), getAllPatients);

module.exports = router;
