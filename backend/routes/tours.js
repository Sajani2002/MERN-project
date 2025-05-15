const express = require('express')
const {
    createTour,
    getTours,
    getTour
} = require('../controllers/tourController')

const router = express.Router()

//get all tours
router.get('/', getTours)

//get a single tour
router.get('/:id', getTour)

//post a new tour
router.post('/', createTour)

//delete a tour
router.delete('/:id', (req,res) => {
    res.json({msg: 'delete a tour'})
})

//update a tour
router.patch('/:id', (req,res) => {
    res.json({msg: 'update a tour'})
})

module.exports = router