'use client'
import React, { useState } from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');


  const isError = firstname.length<2;
  const isError1 =email === '' || email.indexOf("@") === -1;
  const isError4 = lastname === ''|| lastname.length<2;;
  const isError3 =password === '' || password.length < 8;

  const handleregister = async (e) => {
    e.preventDefault();

    if(email==='' && password===''){
      alert("Plesse provide vaild info");
    }else{

    try {
      const response = await axios.post('http://localhost:5000/register', {
        firstname,
        lastname,
        email,
        password,
      });
      
      alert("Register Successful");
      console.log('successful.', response);
    } catch (error) {
      alert("register error");
      console.error('Login failed:', error);
    }
  }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign Up !
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isInvalid={isError} >
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
          placeholder="firstname"/>
          {!isError ? (
        <FormHelperText>
          looks Good
        </FormHelperText>
      ) : (
        <FormErrorMessage>firstname is required.</FormErrorMessage>
      )}
                </FormControl>
              </Box>

              <Box>
                <FormControl id="lastName" isInvalid={isError4}>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          placeholder="lastname" />
          
          {!isError4 ? (
        <FormHelperText>
          looks Good
        </FormHelperText>
      ) : (
        <FormErrorMessage>lastname is required.</FormErrorMessage>
      )}
                </FormControl>
              </Box>
            </HStack>

            <FormControl id="email"  isInvalid={isError1}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="text@gmail.com" />
          {!isError1 ? (
        <FormHelperText>
          looks Good
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email should contain @.</FormErrorMessage>
      )}
            </FormControl>
            <FormControl id="password" isInvalid={isError3}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
               
              </InputGroup>
              {!isError3 ? (
        <FormHelperText>
          looks Good
        </FormHelperText>
      ) : (
        <FormErrorMessage>password is required.</FormErrorMessage>
      )}
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleregister}
                >
                Register
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} to="/login" style={{color:"red"}}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Register;