const mongoose = require('mongoose')


const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    experience: {
        type: Number,
        required: true,
        min: 0
    },
    availabeSlots: {
        type: [String],
    },
    isVerified: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Doctor', doctorSchema)