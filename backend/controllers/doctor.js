const Doctor = require("../models/doctor");
const User = require("../models/user");
const Earning = require("../models/earning");

const addDoctorDetails = async (req, res) => {
  try {
    const { experience, availableSlots } = req.body;

    if (!experience || !availableSlots || availableSlots.length === 0) {
      return res
        .status(400)
        .json({ error: "Experience and slots are required." });
    }

    const user = await User.findById(req.user.userId);

    if (!user || user.role !== "doctor") {
      return res.status(403).json({ error: "Only doctors can add details." });
    }

    const existingProfile = await Doctor.findOne({ doctorId: user._id });

    if (existingProfile) {
      return res.status(400).json({ error: "Doctor profile already exists." });
    }

    const doctor = new Doctor({
      doctorId: user._id,
      experience,
      availabeSlots: availableSlots,
    });

    await doctor.save();

    return res.status(201).json({
      message: "Doctor details added successfully.",
      doctor,
    });
  } catch (error) {
    console.log("error adding details", error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// for adding doctor's earning
const addEarning = async (req, res) => {
  try {
    const { amount, appointmentId } = req.body;

    if (!appointmentId || !amount) {
      return res
        .status(400)
        .json({ error: "Appointment ID and amount are required." });
    }

    // Ensure it's a doctor user
    const user = await User.findById(req.user.userId);
    if (!user || user.role !== "doctor") {
      return res.status(403).json({ error: "Only doctors can add earnings." });
    }

    const doctor = await Doctor.findOne({ doctorId: user._id });
    if (!doctor) {
      return res.status(404).json({ error: "Doctor profile not found." });
    }

    const newEarning = new Earning({
      doctorId: doctor._id,
      appointmentId,
      amount,
    });

    await newEarning.save();

    return res.status(201).json({
      message: "Earning added successfully.",
      earning: newEarning,
    });
  } catch (error) {
    console.log("error adding amount", error);
    return res.status(500).json("Server error");
  }
};

module.exports = {
  addDoctorDetails,
  addEarning,
};
