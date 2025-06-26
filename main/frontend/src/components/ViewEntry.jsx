import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Spinner,
  useToast,
  Textarea
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { logout } from '../utils/auth'; // import your utility function
import Navbar from './Navbar';


const ViewEntry = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [updatedContent, setUpdatedContent] = useState('');
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

  const handleDelete = async (id) => {
  try {
    await api.delete(`/entries/${id}`);
    toast({
      title: 'Entry deleted',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    // Refresh entries
    fetchEntries();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Could not delete entry',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdate = async (id) => {
    try {
      await api.put(`/entries/${id}`, { content: updatedContent });
      toast({
        title: 'Entry updated',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setEditingId(null);
      fetchEntries(); // Refresh list
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Could not update entry',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };


  useEffect(() => {
    fetchEntries();
  }, []);

    return (
    <Box>
      <Navbar /> {/* ✅ Top navigation bar */}

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

                {editingId === entry._id ? (
                  <>
                    <Textarea
                      value={updatedContent}
                      onChange={(e) => setUpdatedContent(e.target.value)}
                      mt="2"
                    />
                    <Button
                      colorScheme="green"
                      size="sm"
                      mt="2"
                      onClick={() => handleUpdate(entry._id)}
                    >
                      Save
                    </Button>
                    <Button
                      size="sm"
                      mt="2"
                      ml="2"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Text mt="2">{entry.content}</Text>
                    <Button
                      colorScheme="blue"
                      size="sm"
                      mt="2"
                      onClick={() => {
                        setEditingId(entry._id);
                        setUpdatedContent(entry.content);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      colorScheme="red"
                      size="sm"
                      mt="2"
                      ml="2"
                      onClick={() => handleDelete(entry._id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </Box>
            ))}
          </VStack>
        )}

        <Button mt="6" onClick={() => navigate('/')}>Back to Home</Button>
        <Button colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default ViewEntry;
