const express = require('express')
const {
    createTour,
    getTours,
    getTour,
    deleteTour,
    updateTour
} = require('../controllers/tourController')

const router = express.Router()

//get all tours
router.get('/', getTours)

//get a single tour
router.get('/:id', getTour)

//post a new tour
router.post('/', createTour)

//delete a tour
router.delete('/:id', deleteTour)

//update a tour
router.patch('/:id', updateTour)

module.exports = router