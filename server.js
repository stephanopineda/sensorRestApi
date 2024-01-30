require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const room_sensor_router = require('./routes/rou_room_sensor')
// const patient_router = require('./routes/rou_patient')

app.use('/room_sensor', room_sensor_router) // (chosen api access, import variable)
// app.use('/patient', patient_router) // (chosen api access link, import variable)

app.listen(3000, () => console.log('Server started'))