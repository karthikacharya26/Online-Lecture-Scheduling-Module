const express = require('express');
const { protect, instructorOnly } = require('../middleware/authMiddleware');
const { getInstructorLectures } = require('../controllers/instructorController');

const router = express.Router();
router.get('/lectures', protect, instructorOnly, getInstructorLectures);

module.exports = router;
