import express from 'express';
import { body, validationResult } from 'express-validator';
import * as profileCtrl from '../controllers/profile.js';

const router = express.Router();

router.post('/profile',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('skillsOffered').isArray().optional(),
    body('skillsWanted').isArray().optional(),
    body('availability').notEmpty().withMessage('Availability is required'),
    body('isPublic').isBoolean().optional()
  ],
  profileCtrl.createProfile
);

router.get('/profiles', profileCtrl.getProfiles);

export default router;
