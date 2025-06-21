const express = require("express");
const router = express.Router();
const {  getPendingDoctors, verifyDoctor } = require("../controllers/adminController");
const {protect} = require('../middlewares/authMiddleware')
const {authorizeRole} = require('../middlewares/auhtorizeRoles')

router.get("/pending-doctors", protect, authorizeRole("admin"), getPendingDoctors);
router.post("/verify-doctor", protect, authorizeRole("admin"), verifyDoctor);

module.exports = router;
