import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  VStack,
  useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api'; // 👈 use the axios instance with token


const EntryForm = () => {
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await api.post('/entries/date', { date, content });
      toast({
        title: 'Entry saved!',
        status: 'success',
        duration: 3000,
        isClosable: true
      });
      setDate('');
      setContent('');
    } catch (error) {
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'Failed to save entry',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  return (
    <Box maxW="600px" mx="auto" mt="40px" p="6" borderWidth="1px" borderRadius="md" boxShadow="md">
      <VStack spacing={4}>
        <Heading size="md">Add Journal Entry</Heading>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Select date"
        />
        <Textarea
          placeholder="Write your journal entry..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit Entry
        </Button>
        <Button onClick={() => navigate('/view')}>View All Entries</Button>
      </VStack>
    </Box>
  );
};

export default EntryForm;
