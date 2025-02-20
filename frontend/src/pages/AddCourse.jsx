import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Input, Button, Textarea, Heading } from "@chakra-ui/react";
import { addCourse } from "../redux/actions/adminActions";

const AddCourse = () => {
  const dispatch = useDispatch();
  const [course, setCourse] = useState({
    name: "",
    level: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourse(course));
    setCourse({ name: "", level: "", description: "", image: "" });
  };

  return (
    <Box p={6} boxShadow="md" borderRadius="lg">
      <Heading size="md" mb={4}>Add New Course</Heading>
      <Input placeholder="Course Name" name="name" value={course.name} onChange={handleChange} mb={3} />
      <Input placeholder="Level" name="level" value={course.level} onChange={handleChange} mb={3} />
      <Textarea placeholder="Description" name="description" value={course.description} onChange={handleChange} mb={3} />
      <Input placeholder="Image URL" name="image" value={course.image} onChange={handleChange} mb={3} />
      <Button colorScheme="blue" onClick={handleSubmit}>Add Course</Button>
    </Box>
  );
};

export default AddCourse;
