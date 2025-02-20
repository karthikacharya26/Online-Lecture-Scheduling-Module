import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Input, Button, Heading } from "@chakra-ui/react";
import { addInstructor } from "../redux/actions/instructorActions";

const AddInstructor = () => {
  const dispatch = useDispatch();
  const [instructor, setInstructor] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setInstructor({ ...instructor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addInstructor(instructor));
    setInstructor({ name: "", email: "" });
  };

  return (
    <Box p={6} boxShadow="md" borderRadius="lg">
      <Heading size="md" mb={4}>Add Instructor</Heading>
      <Input placeholder="Instructor Name" name="name" value={instructor.name} onChange={handleChange} mb={3} />
      <Input placeholder="Email" name="email" value={instructor.email} onChange={handleChange} mb={3} />
      <Button colorScheme="blue" onClick={handleSubmit}>Add Instructor</Button>
    </Box>
  );
};

export default AddInstructor;
