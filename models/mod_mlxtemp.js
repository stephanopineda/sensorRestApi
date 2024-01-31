const mongoose = require('mongoose')

// Schema/columns
const MLXSchema = new mongoose.Schema({
  bodytemp: {
    type: Number,
    required: true
  },
  time_date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('mlx_sensor', MLXSchema)