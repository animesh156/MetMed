const express = require("express");
const router = express.Router();
const { addDoctorDetails } = require("../controllers/doctor");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRole } = require("../middlewares/auhtorizeRoles");

router.post("/add-details", protect, authorizeRole("doctor"), addDoctorDetails);

module.exports = router;
 