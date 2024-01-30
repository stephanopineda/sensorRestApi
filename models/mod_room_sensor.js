const mongoose = require('mongoose')

// Schema/columns
const roomSensorSchema = new mongoose.Schema({
  temp: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  co2: {
    type: Number,
    required: true
  },
  pm1: {
    type: Number,
    required: true
  },
  pm2_5: {
    type: Number,
    required: true,
  },
  pm10: {
    type: Number,
    required: true,
  },
  time_date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('room_sensor', roomSensorSchema)