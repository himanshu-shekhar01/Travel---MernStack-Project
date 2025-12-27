import express from 'express'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js'
const router = express.Router()

router.post('/', verifyUser, createBooking);
router.get('/:id', verifyToken, getBooking);
router.get('/', verifyToken, getAllBooking);

export default router;
 