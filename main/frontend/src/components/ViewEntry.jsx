import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Spinner,
  Button
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewEntry = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEntries() {
      const response = await axios.get('http://localhost:5000/api/v1/entries/');
      console.log('Response from backend:', response.data);
      setEntries(response.data.reverse());
      setLoading(false);
    }
    fetchEntries();
  }, []);

  if (loading) return <Spinner size="xl" mt={10} />;

  return (
    <Box maxW="700px" mx="auto" mt={10} p={6}>
      <Heading mb={6}>All Journal Entries</Heading>
      <VStack align="start" spacing={6}>
        {entries.map((entry) => (
          <Box key={entry._id} p={4} borderWidth="1px" borderRadius="md" width="100%" bg="gray.50">
            <Text fontWeight="bold">Date: {entry.date}</Text>
            <Text mt={2}>{entry.content}</Text>
          </Box>
        ))}
      </VStack>
      <Button mt={6} onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </Box>
  );
};

export default ViewEntry;
