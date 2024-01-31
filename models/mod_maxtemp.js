const mongoose = require('mongoose')

// Schema/columns
const MAXSchema = new mongoose.Schema({
  heartrate: {
    type: Number,
    required: true
  },
  spo2: {
    type: Number,
    required: true
  },
  time_date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('max_sensor', MAXSchema)