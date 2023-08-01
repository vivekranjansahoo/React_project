'use client'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'

function AdminLogin() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      if(email === "admin@gmail.com" && password ==="admin"){
        sessionStorage.setItem('admin', 'admin');
        alert("Successful login admin!");
        navigate("/admindashboard");
      }
      else{
        alert("error please try again!");
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
          <Heading fontSize={'4xl'} textAlign={'center'}>Admin Login!</Heading>
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
          placeholder="text@gmail.com" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" />
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
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default AdminLogin;