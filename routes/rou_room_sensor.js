const express = require('express')
const router = express.Router()
const room_sensor_model = require('../models/mod_room_sensor')

// Return all document from room_sensor collection
router.get('/', async (req, res) => {
    try{
        const readings = await room_sensor_model.find()
        res.json(readings)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Return one document from room_sensor collection based on id provided
router.get('/:id', getReadings, (req, res) => {
    res.json(res.readings)
})

// Insert one document to room_sensor collection
router.post('/', async (req, res) => {
    const readings = new room_sensor_model({
        temp: req.body.temp,
        humidity: req.body.humidity,
        co2: req.body.co2,
        pm1: req.body.pm1,
        pm2_5: req.body.pm2_5,
        pm10: req.body.pm10
    })
    try {
        const newReadings = await readings.save()
        res.status(201).json(newReadings)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update one document from room_sensor collection based on id
router.patch('/:id', getReadings, async (req, res) => {
    if(req.body.temp != null){
        res.readings.temp = req.body.temp;
    }
    if (req.body.humidity != null){
        req.readings.humidity = req.body.humidity;
    }
    if(req.body.co2 != null){
        res.readings.co2 = req.body.co2;
    }
    if (req.body.pm1 != null){
        req.readings.pm1 = req.body.pm1;
    }
    if(req.body.pm2_5 != null){
        res.readings.pm2_5 = req.body.pm2_5;
    }
    if (req.body.pm10 != null){
        req.readings.pm10 = req.body.pm10;
    }

    try{
        const updateReading = await res.readings.save();
        res.json(updateReading);
    } catch(err){
        res.status(400).json({ message: err.message });
    }
});

// Delete one document in room_sensor collection based on id
router.delete('/:id', getReadings, async (req, res) => {
    try{
        await res.readings.deleteOne()
        res.json({ message: 'Document deleted successfully.'})
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

// Delete all documents in room_sensor collection
router.delete('/', async (req, res) => {
    try {
        await room_sensor_model.deleteMany(); // Delete all subscribers
        res.json({ message: 'All documents deleted successfully.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getReadings(req, res, next){
    try {
        readings = await room_sensor_model.findById(req.params.id)
        if (readings == null){
            return res.status(404).json({ message: 'Cannot find id'})
        }
    } catch(err) {
        return res.status(500).json({ message: err.message })
    }

    res.readings = readings
    next()
}

module.exports = router
