const Lecture = require('../models/Lecture');
const Course = require('../models/Course');

exports.getInstructorLectures = async (req, res) => {
    try {
        const instructorId = req.user._id; 

        // Fetch lectures assigned to this instructor
        const lectures = await Lecture.find({ instructor: instructorId })
            .populate('course', 'name description') 
            .select('date');

        if (!lectures.length) {
            return res.status(404).json({ message: 'No lectures assigned yet' });
        }

        res.json(lectures);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
