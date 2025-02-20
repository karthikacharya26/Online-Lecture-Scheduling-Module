import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Select, Input, Button, Heading } from "@chakra-ui/react";
import { fetchInstructorLectures } from "../redux/actions/instructorActions";
import { fetchInstructors } from "../redux/actions/adminActions";
import { scheduleLecture } from "../redux/actions/adminActions";

const ScheduleLecture = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.course);
  const { instructors } = useSelector((state) => state.instructor);

  const [lecture, setLecture] = useState({
    courseId: "",
    instructorId: "",
    date: "",
  });

  useEffect(() => {
    dispatch(fetchInstructorLectures());
    dispatch(fetchInstructors());
  }, [dispatch]);

  const handleChange = (e) => {
    setLecture({ ...lecture, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(scheduleLecture(lecture));
    setLecture({ courseId: "", instructorId: "", date: "" });
  };

  return (
    <Box p={6} boxShadow="md" borderRadius="lg">
      <Heading size="md" mb={4}>Schedule a Lecture</Heading>
      <Select placeholder="Select Course" name="courseId" value={lecture.courseId} onChange={handleChange} mb={3}>
        {courses.map((course) => (
          <option key={course._id} value={course._id}>{course.name}</option>
        ))}
      </Select>
      <Select placeholder="Select Instructor" name="instructorId" value={lecture.instructorId} onChange={handleChange} mb={3}>
        {instructors.map((instructor) => (
          <option key={instructor._id} value={instructor._id}>{instructor.name}</option>
        ))}
      </Select>
      <Input type="date" name="date" value={lecture.date} onChange={handleChange} mb={3} />
      <Button colorScheme="blue" onClick={handleSubmit}>Schedule Lecture</Button>
    </Box>
  );
};

export default ScheduleLecture;
