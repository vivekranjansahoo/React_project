'use client'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Link } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      alert("login successful");
      console.log('Login successful. Token:', response.data.token);
      
      localStorage.setItem("token", response.data.token);
      navigate("/userdashboard");

    } catch (error) {
      alert("login error");
      console.error('Login failed:', error);
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}  minW={'30%'}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>Welcome Back !</Heading>
        </Stack>
        <Box
       
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={8} >
           
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="text@gmail.com" required/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" required/>
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                bg: 'blue.500',
                }} 
                onClick={handleLogin}
                >
                Login
              </Button>
            </Stack>
            <Stack pt={3}>
              <Text align={'center'}>
                Admin Login <Link to="/adminlogin" target='_blank' style={{color:"red"}}>Click here</Link>
              </Text>
              <Text align={'center'}>
                Haven't an account ? <Link to="/register" style={{color:"red"}}>Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login;