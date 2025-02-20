import { Link } from 'react-router-dom';
import { Box, Button, Heading } from '@chakra-ui/react';

const AdminDashboard = () => {
    return (
        <Box p="6">
            <Heading mb="6">Admin Dashboard</Heading>
            <Link to="/admin/add-instructor">
                <Button colorScheme="blue" mr="4">Add Instructor</Button>
            </Link>
            <Link to="/admin/add-course">
                <Button colorScheme="green" mr="4">Add Course</Button>
            </Link>
            <Link to="/admin/schedule-lecture">
                <Button colorScheme="red">Schedule Lecture</Button>
            </Link>
        </Box>
    );
};

export default AdminDashboard;
