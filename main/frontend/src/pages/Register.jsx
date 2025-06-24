import React, { useState } from 'react';
import { Box, Input, Button, Heading, VStack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/v1/auth/register', { username, password });
      toast({ title: 'Registered successfully!', status: 'success', duration: 3000 });
      navigate('/login');
    } catch (err) {
      toast({ title: 'Registration failed', description: err.response?.data?.message || '', status: 'error', duration: 3000 });
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt="10">
      <VStack spacing={4}>
        <Heading>Register</Heading>
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleRegister} colorScheme="teal">Sign Up</Button>
      </VStack>
    </Box>
  );
};

export default Register;
