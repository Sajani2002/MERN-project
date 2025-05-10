const express = require('express')

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
router.post('/', (req,res) => {
    res.json({msg: 'post a new tour'})
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