const express = require('express')
const Tour = require('../models/tourModel')

const router = express.Router()

//get all tours
router.get('/', (req,res) => {
    res.json({msg: 'Get all tours'})
})

//get a single tour
router.get('/:id', (req,res) => {
    res.json({msg: 'Get a single workout'})
})

//post a new tour
router.post('/', async (req,res) => {
    const {title, location, description, price, duration} = req.body
    try{
        const tour = await Tour.create({title, location, description, price, duration})
        res.status(200).json(tour)
    }catch (error) {
        res.status(400).json({error: error.message})
    }
})

//delete a tour
router.delete('/:id', (req,res) => {
    res.json({msg: 'delete a tour'})
})

//update a tour
router.patch('/:id', (req,res) => {
    res.json({msg: 'update a tour'})
})

module.exports = router