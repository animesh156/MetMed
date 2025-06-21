const Doctor = require('../models/doctor')


// GET all unverified doctors
const getPendingDoctors = async (req, res) => {
  try {
    const unverifiedDoctors = await Doctor.find({ isVerified: false }).populate('doctorId', 'email');
    res.json(unverifiedDoctors);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching doctors' });
  }
};


// PATCH to verify a doctor
const verifyDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    doctor.isVerified = true;
    await doctor.save();

    res.json({ message: 'Doctor verified successfully', doctor });
  } catch (err) {
    res.status(500).json({ error: 'Server error verifying doctor' });
  }
};


module.exports = {
    getPendingDoctors,
    verifyDoctor
}