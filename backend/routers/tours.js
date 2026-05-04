import express from 'express';
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTours,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour
} from '../controllers/tourController.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// ✅ SEARCH ROUTES FIRST
router.get('/search/getTourBySearch', getTourBySearch);
router.get('/search/getFeaturedTours', getFeaturedTours);
router.get('/search/getTourCount', getTourCount);

// ✅ BASIC ROUTES
router.get('/', getAllTour);
router.get('/:id', getSingleTour);

// ✅ PROTECTED ROUTES
router.post('/', verifyAdmin, createTour);
router.put('/:id', verifyAdmin, updateTour);
router.delete('/:id', verifyAdmin, deleteTour);

export default router;
