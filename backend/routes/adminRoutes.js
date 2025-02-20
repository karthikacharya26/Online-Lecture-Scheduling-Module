const express = require('express');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const { addInstructor, addCourse, scheduleLecture } = require('../controllers/adminController');

const router = express.Router();
router.post('/instructor', protect, adminOnly, addInstructor);
router.post('/course', protect, adminOnly, addCourse);
router.post('/lecture', protect, adminOnly, scheduleLecture);

module.exports = router;
