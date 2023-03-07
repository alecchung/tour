import express from 'express'
import { createTour, deleteTour, updateTour, getAllTours, getSingleTour, getTourBySearch } from './../controllers/tourController.js'

const router = express.Router()

// create new tour
router.post('/', createTour)
router.put('/:id', updateTour)
router.delete('/:id', deleteTour)
router.get('/:id', getSingleTour)
router.get('/', getAllTours)
router.get('/search/getTourBySearch', getTourBySearch)

export default router