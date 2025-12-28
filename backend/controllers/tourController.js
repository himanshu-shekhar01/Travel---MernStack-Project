
import Tour from '../models/Tour.js';

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save();
        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully created tour',
                data: savedTour
            });
    } catch (error) {
        res
            .status(500)
            .json({
                message: "Failed to create tour. Try again",
                error: error.message
            });
    }
}

//update tour
export const updateTour = async (req, res) => {
    const id = req.params.id;
    try{
        const updateTour = await Tour.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).json({
            success: true,
            message: "Successfully updated tour",
            data: updateTour
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to update tour",
            error: err.message
        });

    }
}
//get delete tour
export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try{
        await Tour.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Successfully deleted",
            data: updateTour
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to delete",
            error: err.message
        });

    }
}
//get singletour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try{
       const tour = await Tour.findById(id).populate('reviews');
        res.status(200).json({
            success: true,
            message: "Successfully found",
            data: tour
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Not found",
            error: err.message
        });
    }
}
export const getAllTour = async (req, res) => {
    
    //for pagination
    const page = parseInt(req.query.page);

    try{
        const tours = await Tour.find({}).populate('reviews')
        .skip(page*8)
        .limit(8);
        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successfully get all tours",
            data: tours
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Not found",
            error: err.message
        });
    }
}

//get tour by search

export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, "i"); //i for case insensitive
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const tours = await Tour.find({
            city,
            distance: { $gte: distance },
            maxGroupSize: { $gte: maxGroupSize },
        }).populate('reviews');

        res.status(200).json({
            success: true,
            message: "Successfully get searched tours",
            data: tours,
        });


        
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Not found",
            error: err.message,
        });
    }
}

//get featured tours
export const getFeaturedTours = async (req, res) => {

    try{
        const tours = await Tour.find({featured: true}).populate('reviews').limit(8);
        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successfully get all tours",
            data: tours
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Not found",
            error: err.message
        });
    }
}

//get tour counts
export const getTourCount = async (req, res) => {
    try{
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({
            success: true,
            data: tourCount
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "failed to fetch"
        });
    }
}