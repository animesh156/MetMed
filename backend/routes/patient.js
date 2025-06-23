const express = require("express");
const router = express.Router();
const {
  updatePatient,
  bookAppointment,
  upcomingAppointments,
} = require("../controllers/patient");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRole } = require("../middlewares/auhtorizeRoles");

router.put("/update", protect, updatePatient);
router.post("/book", protect, bookAppointment);
router.get("/appointments", protect, upcomingAppointments);

module.exports = router;
