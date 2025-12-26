
import Booking from '../models/Booking.js'

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

export const getBooking = async(req,res)=>{
    const id = req.params.id
    try{

    }
    catch(err){
        
    }
}