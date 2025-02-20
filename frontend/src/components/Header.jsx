import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Box bg="blue.500" p={4}>
      <Flex justify="space-between">
        <Flex gap={4}>
          <Link color="white" href="/">Login</Link>
          <Link color="white" href="/admin">Admin Dashboard</Link>
          <Link color="white" href="/instructor">Instructor Dashboard</Link>
        </Flex>
        <Button colorScheme="red" size="sm" onClick={handleLogout}>Logout</Button>
      </Flex>
    </Box>
  );
};

export default Header;
