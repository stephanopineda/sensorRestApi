const mongoose = require('mongoose')

// Schema/columns
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  body_temp: {
    type: Number,
    required: true
  },
  heart_rate: {
    type: Number,
    required: true
  },
  spo2: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('mod_patient', patientSchema)