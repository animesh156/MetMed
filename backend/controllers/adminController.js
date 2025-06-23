const Doctor = require('../models/doctor')
const User = require('../models/user')

// GET all unverified doctors
const getPendingDoctors = async (req, res) => {
  try {
    const unverifiedDoctors = await Doctor.find({ isVerified: false }).populate('doctorId', 'name email');
    res.json(unverifiedDoctors);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching doctors' });
  }
};


//GEt all patients
const getAllPatients = async (req,res) => {
  try {
    const patients = await User.find({role: 'patient'})

    return res.status(200).json(patients);
  } catch (error) {
    return res.status(500).json({ error: 'Server error fetching patients' });
    console.error("Error fetching patients:", error);
  }
}


// PATCH to verify a doctor
const verifyDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { isVerified: true },
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    res.json({ message: "Doctor verified successfully", doctor: updatedDoctor });
  } catch (err) {
    console.error("Error verifying doctor:", err);
    res.status(500).json({ error: "Server error" });
  }
};

 
module.exports = {
    getPendingDoctors,
    verifyDoctor,
    getAllPatients
}