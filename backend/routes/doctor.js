const express = require("express");
const router = express.Router();
const { addDoctorDetails, addEarning } = require("../controllers/doctor");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRole } = require("../middlewares/auhtorizeRoles");

router.post("/add-details", protect, authorizeRole("doctor"), addDoctorDetails);
router.post("/add-earnings", protect, authorizeRole("doctor"), addEarning);

module.exports = router;
 