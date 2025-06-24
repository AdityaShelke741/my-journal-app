import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Spinner,
  useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { logout } from '../utils/auth'; // import your utility function

const ViewEntry = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const navigate = useNavigate();

  const fetchEntries = async () => {
    try {
      const response = await api.get('/entries/');
      const sortedEntries = response.data.reverse();
      setEntries(sortedEntries);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch entries',
        status: 'error',
        duration: 3000
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();               // remove token from localStorage
    navigate('/login');     // redirect to login page
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <Box maxW="700px" mx="auto" mt="8" p="6">
      <Heading size="lg" mb="6">Your Journal Entries</Heading>
      {loading ? (
        <Spinner />
      ) : entries.length === 0 ? (
        <Text>No entries found</Text>
      ) : (
        <VStack spacing={4} align="stretch">
          {entries.map((entry) => (
            <Box key={entry._id} p="4" borderWidth="1px" borderRadius="md" boxShadow="sm">
              <Text fontWeight="bold">{entry.date}</Text>
              <Text mt="2">{entry.content}</Text>
            </Box>
          ))}
        </VStack>
      )}
      <Button mt="6" onClick={() => navigate('/')}>Back to Home</Button>
      <Button colorScheme="red" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default ViewEntry;
