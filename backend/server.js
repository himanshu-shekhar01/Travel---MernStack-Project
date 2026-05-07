import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routers/tours.js';
import userRoute from './routers/users.js';
import authRoute from './routers/auth.js';
import reviewRoute from './routers/reviews.js';
import bookingRoute from './routers/bookings.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;



// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "https://travel-mern-stack-project-mu.vercel.app/");
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });


// app.use(express.json());
// app.use(cookieParser());
// 1. Remove the manual res.header block entirely. 
// 2. Use ONLY the cors() middleware configured like this:

const corsOptions = {
  origin: ["http://localhost:5173", "https://travel-mern-stack-project-mu.vercel.app"],
  credentials: true, // This allows the browser to accept the cookie
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser()); // Ensure this is AFTER cors but BEFORE routes

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log('Error connecting to database', error);
  }
};

app.get('/', (req, res) => {
  res.send('API is running...');
});

// ✅ Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/bookings', bookingRoute);
app.use('/test', async(req,res)=>{
    res.json({message:"backend is running"})
})

// ✅ Start server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});