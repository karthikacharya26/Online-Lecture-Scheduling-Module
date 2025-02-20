import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, Heading, Text } from '@chakra-ui/react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, userInfo } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    // Use useEffect to navigate after state updates
    useEffect(() => {
        if (userInfo) {
            navigate(userInfo.role === 'admin' ? '/admin' : '/instructor');
        }
    }, [userInfo, navigate]);

    return (
        <Box maxW="400px" mx="auto" mt="10" p="6" border="1px solid #ccc" borderRadius="8px">
            <Heading mb="4">Login</Heading>
            {error && <Text color="red.500" mb="4">{error}</Text>}
            <Box mb="4"> 
                <Text>Email</Text>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Box>
            <Box mb="4">
                <Text>Password</Text>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Box>
            <Button type="submit" colorScheme="blue" w="100%" onClick={handleSubmit}>Login</Button>
        </Box>
    );
};

export default Login;
