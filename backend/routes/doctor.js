const express = require("express");
const router = express.Router();
const { addDoctorDetails, addEarning, updateDoctorDetails, getDoctorProfile, getAllDoctors, upcomingAppointments, updateAppointmentStatus, getDoctorEarnings } = require("../controllers/doctor");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRole } = require("../middlewares/auhtorizeRoles");

router.post("/add-details", protect, authorizeRole("doctor"), addDoctorDetails);
router.post("/earnings", protect, addEarning);
router.put('/update', protect, authorizeRole('doctor'), updateDoctorDetails)
router.get('/profile', protect, authorizeRole('doctor'), getDoctorProfile)
router.get('/all', protect, getAllDoctors)
router.get('/schedule', protect, upcomingAppointments)
router.put('/update-status', protect, updateAppointmentStatus)
router.get('/earnings-report', protect, getDoctorEarnings)


module.exports = router;
 