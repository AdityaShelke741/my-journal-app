import React, { useState } from 'react';
import { Box, Input, Button, VStack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
        username,
        password
      });
      localStorage.setItem('token', response.data.token);
      toast({ title: 'Logged in!', status: 'success', duration: 3000 });
      navigate('/');
    } catch (err) {
      toast({
        title: 'Login failed',
        description: err.response?.data?.message || '',
        status: 'error',
        duration: 3000
      });
    }
  };

  return (
    <Box width="100%">
      <VStack spacing={4}>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handleLogin}
          colorScheme="beige"
          variant="solid"
          width="full"
        >
          Log In
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;
