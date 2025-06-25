import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const AuthLayout = () => {
  const navigate = useNavigate();

  // Using your light/beige theme
  const leftBg = useColorModeValue('#fefaf4', 'gray.800');
  const rightBg = useColorModeValue('white', 'gray.900');

  return (
    <Flex height="100vh" width="100vw" fontFamily="heading">
      {/* Left side – Branding */}
      <Box
        flex="1"
        bg={leftBg}
        color="blackAlpha.800"
        px={{ base: 6, md: 16 }}
        py={{ base: 10, md: 20 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading fontSize="4xl" mb={4} color="brown.700">
          Mindflow
        </Heading>
        <Text fontSize="xl" maxW="400px">
          Transform your daily reflections into a meaningful journey. Write, reflect, and grow with our intuitive journaling platform.
        </Text>
      </Box>

      {/* Right side – Auth actions */}
      <Box
        flex="1"
        bg={rightBg}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px={{ base: 6, md: 12 }}
      >
        <VStack spacing={6} w="100%" maxW="400px">
          <Heading fontSize="2xl">Welcome Back</Heading>
          <Button
            colorScheme="orange"
            variant="solid"
            width="100%"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
          <Button
            colorScheme="orange"
            variant="outline"
            width="100%"
            onClick={() => navigate('/register')}
          >
            Create Account
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AuthLayout;
