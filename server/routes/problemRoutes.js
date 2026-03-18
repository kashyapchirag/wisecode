import express from 'express'
import { getProblemSet } from '../controllers/problemController.js';
import { getProblemBySlug } from '../controllers/problemController.js';

const router = express.Router();

router.get('/problems', getProblemSet);
router.get('/problems/:slug', getProblemBySlug);

export default router