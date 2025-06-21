const Doctor = require("../models/doctor");

const addDoctorDetails = async (req, res) => {
  try {
    const { experience, availableSlots } = req.body;

    if (!experience || !availableSlots) {
      return res.status(401).json({ error: "Field is required" });
    }

    const doctorId = req.user._id;

    const doctorExist = await Doctor.findOne({ doctorId });
    if (doctorExist) {
      return res.status(401).json({ error: "Doctor already exist" });
    }

    const doctor = new Doctor({
      doctorId,
      experience,
      availabeSlots: availableSlots,
    });

    await doctor.save();

    res.status(201).json({
      doctorId: doctor.doctorId,
      experience: doctor.experience,
    });
  } catch (error) {
    console.log("error adding details", error);
    return res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  addDoctorDetails,
};
