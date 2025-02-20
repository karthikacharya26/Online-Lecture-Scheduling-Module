const Course = require('../models/Course');
const Instructor = require('../models/Instructor');
const Lecture = require('../models/Lecture');

exports.addInstructor = async (req, res) => {
    const { name, email } = req.body;
    const instructor = new Instructor({ name, email });
    await instructor.save();
    res.status(201).json(instructor);
};

exports.addCourse = async (req, res) => {
    const { name, level, description, image } = req.body;
    const course = new Course({ name, level, description, image });
    await course.save();
    res.status(201).json(course);
};

exports.scheduleLecture = async (req, res) => {
    const { courseId, instructorId, date } = req.body;

    const lectureExists = await Lecture.findOne({ instructor: instructorId, date });
    if (lectureExists) {
        return res.status(400).json({ message: 'Instructor is already booked on this date' });
    }

    const lecture = new Lecture({ course: courseId, instructor: instructorId, date });
    await lecture.save();
    res.status(201).json(lecture);
};
