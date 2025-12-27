
import Booking from '../models/Booking.js'

//create new booking
export const createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body)
    try{
        const savedBooking = await newBooking.save()

        res.status(200).json({
            success: true,
            message: "Your tour is booked",
            data: savedBooking
        })
    }
    catch(err){
        res.status(500).json({
          success: false,
          message: "Booking failed",
          error: err.message
        });
      }
}

//get single booking
export const getBooking = async(req,res)=>{
    const id = req.params.id
    try{
        const book = await Booking.findById(id)
        res.status(200).json({
            success: true,
            message: "Booking details fetched",
            data: book
        })

    }
    catch(err){
        res.status(500).json({
          success: false,
          message: "Failed to fetch booking details",
          error: err.message
        });
    }
}

//get all booking
export const getAllBooking = async(req,res)=>{
    const id = req.params.id
    try{
        const books = await Booking.find()
        res.status(200).json({
            success: true,
            message: "All Booking details fetched",
            data: books
        })

    }
    catch(err){
        res.status(500).json({
          success: false,
          message: "Failed to fetch booking details",
          error: err.message
        });
    }
}