import express from 'express'
import { getProblemSet } from '../controllers/problemController.js';

const router = express.Router();

router.get('/problems', getProblemSet);

export default router