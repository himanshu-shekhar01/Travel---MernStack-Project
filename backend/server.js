import express from 'express';
import dotenv from 'dotenv';
import mongoose, { connect, mongo } from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routers/tours.js';
import userRoute from './routers/users.js';
import authRoute from './routers/auth.js';
import reviewRoute from './routers/reviews.js';
import bookingRoute from './routers/bookings.js';

dotenv.config();
const app = express();
const PORT = 8000;
const corsOptions = {
    origin: true,
    credentials: true,
}

//database connection
mongoose.set('strictQuery', false);
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MongoDB_URI,{
           

        })
        console.log('MongoDB connected successfully');
    }
    catch(error){
        console.log('Error connecting to database',error);
    }
}
//for testing server
app.get('/',(req,res)=>{
    res.send('API is running...');
})

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/reviews',reviewRoute);
app.use('/api/v1/bookings', bookingRoute);


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
