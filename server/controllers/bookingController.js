import Booking from '../models/Booking.js'

export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({
            success: true,
            message: 'Your tour is booked',
            data: savedBooking
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Someting went wrong...',
        })
    }
}

export const getBooking = async (req,res) => {
    const id = req.params.id
    try {
        const book = await Booking.findById(id)
        res.status(200).json({
            success: true,
            message: 'Booking found',
            data: book
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Booking not found',
        })
    }
}


export const getAllBookings = async (req,res) => {
    try {
        const books = await Booking.findById()
        res.status(200).json({
            success: true,
            message: 'Found all bookings',
            data: book
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Bookings not found',
        })
    }
}