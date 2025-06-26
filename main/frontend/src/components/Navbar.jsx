import { Box, Flex, Spacer, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { logout, getUsernameFromToken } from '../utils/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const username = getUsernameFromToken();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box bg="beige.100" px={6} py={4} boxShadow="sm">
      <Flex align="center">
        <Text fontWeight="bold" fontSize="lg">
          Hello, {username}
        </Text>
        <Spacer />
        <Button variant="ghost" mr={3} onClick={() => navigate('/journal')}>
          Submit Entry
        </Button>
        <Button colorScheme="red" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
