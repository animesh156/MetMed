const express = require("express");
const router = express.Router();
const { addDoctorDetails, addEarning, updateDoctorDetails, getDoctorProfile, getAllDoctors } = require("../controllers/doctor");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRole } = require("../middlewares/auhtorizeRoles");

router.post("/add-details", protect, authorizeRole("doctor"), addDoctorDetails);
router.post("/add-earnings", protect, authorizeRole("doctor"), addEarning);
router.put('/update', protect, authorizeRole('doctor'), updateDoctorDetails)
router.get('/profile', protect, authorizeRole('doctor'), getDoctorProfile)
router.get('/all', protect, getAllDoctors)

module.exports = router;
 