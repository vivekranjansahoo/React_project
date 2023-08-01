'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react'

import img from '../../img/thank.jpg';
import { Link } from 'react-router-dom';
import Topnavv from '../Topnav/Topnavv';
import Navbar from '../navbar/Navbar';



 function Thankyou() {
  return (
    <>
    <Topnavv/>
    <Navbar/>
    <Center py={24}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={img}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Thank you Purchasing
          </Heading>
          <Stack direction={'row'} align={'center'}>
          <Link to="/" ><Button>Home</Button></Link>
           <Link to="/bill"><Button>Bill </Button></Link> 
            
          </Stack>
        </Stack>
      </Box>
    </Center>
    </>
  )
}
export default Thankyou