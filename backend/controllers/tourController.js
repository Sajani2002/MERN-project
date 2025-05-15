const Tour = require('../models/tourModel')
const mongoose = require('mongoose')

//get all tours
const getTours = async (req, res) => {
    const tours = await Tour.find({}).sort({createdAt: -1})
    res.status(200).json(tours)
}

//get a single tour
const getTour = async (req, res) => {
    const {id} = req.params
    //check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such tour'})
    }
    const tour = await Tour.findById(id)
    if(!tour){
        return res.status(404).json({error: 'No such tour'})
    }
    res.status(200).json(tour)
}

//create a new tour
const createTour = async (req, res) => {
    const {title, location, description, price, duration} = req.body
    //add doc to db
    try{
        const tour = await Tour.create({title, location, description, price, duration})
        res.status(200).json(tour)
    }catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a tour

//update a tour

module.exports = {
    getTours,
    getTour,
    createTour
}