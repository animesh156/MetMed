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

const updateDoctorDetails = async (req, res) => {
  try {
    const { experience, availabeSlots, email, password, specialization } =
      req.body;

    const doctor = await Doctor.findOne({ doctorId: req.user._id });
    if (!doctor) {
      return res.status(404).json({ error: "Doctor profile not found." });
    }

    if (experience) {
      doctor.experience = experience;
    }
    if (availabeSlots) {
      doctor.availabeSlots = availabeSlots;
    }
    if (specialization) {
      doctor.specialization = specialization;
    }
    if (email) {
      doctor.email = email;
    }

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      doctor.password = hashedPassword;
    }

    await doctor.save();

    return res.status(200).json({
      message: "Doctor details updated successfully.",
      doctor,
    });
  } catch (error) {
    return res.status(500).json({ error: "Server Error" });
    console.log("error updating details", error);
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


// // Fetching doctor profile with populated doctorId
const getDoctorProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ doctorId: req.user._id }).populate(
      "doctorId",
      "name email"
    ); 

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    res.json(doctor);
  } catch (error) {
    console.error("Error fetching doctor profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({})
      .populate("doctorId", "name age email"); // include required user fields

    if (!doctors || doctors.length === 0) {
      return res.status(404).json({ error: "No doctors found" });
    }

    res.status(200).json(doctors);
  } catch (error) {
    console.error("Error fetching all doctors:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};




 

module.exports = {
  addDoctorDetails,
  addEarning,
  updateDoctorDetails,
  getDoctorProfile,
  getAllDoctors
};
