import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInstructorLectures } from '../redux/actions/instructorActions';
import { Box, Heading, Text } from '@chakra-ui/react';

const InstructorDashboard = () => {
    const dispatch = useDispatch();
    const { lectures } = useSelector((state) => state.instructor);

    useEffect(() => {
        dispatch(fetchInstructorLectures());
    }, [dispatch]);

    return (
        <Box p="6">
            <Heading mb="6">Instructor Dashboard</Heading>
            {lectures.length > 0 ? (
                lectures.map((lecture) => (
                    <Box key={lecture._id} p="4" border="1px solid gray" mb="4">
                        <Text>Course: {lecture.course.name}</Text>
                        <Text>Date: {lecture.date}</Text>
                    </Box>
                ))
            ) : (
                <Text>No lectures assigned.</Text>
            )}
        </Box>
    );
};

export default InstructorDashboard;
