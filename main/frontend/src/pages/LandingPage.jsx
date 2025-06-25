// src/pages/LandingPage.jsx
import {
  Box,
  Flex,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from '@chakra-ui/react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const LandingPage = () => {
  const bg = useColorModeValue('beige.50', 'gray.800');
  const panelBg = useColorModeValue('white', 'gray.700');

  return (
    <Flex minH="100vh" bg={bg}>
      {/* Left section */}
      <Box
        flex="1"
        bg="beige.100"
        color="beige.900"
        p={10}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderRightRadius="2xl"
        boxShadow="md"
      >
        <Heading fontSize="7xl" mb={4}>
          Mindflow
        </Heading>
        <Text fontSize="2xl" textAlign="center" maxW="400px">
          Transform your daily reflections into a meaningful journey. Write, reflect, and grow with our journaling platform.
        </Text>
      </Box>

      {/* Right section */}
      <Box
        flex="1"
        p={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg={panelBg}
        fontFamily="'Inter', sans-serif"
      >
        <Box w="full" maxW="500px">
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>Sign In</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <LoginForm />
              </TabPanel>
              <TabPanel>
                <RegisterForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Flex>
  );
};

export default LandingPage;
