
import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Topnavv from '../Topnav/Topnavv';
import Navbar from '../navbar/Navbar';

 function Razorpay() {
  const nav = useNavigate();
  const [ammount, setammount]=useState(0)

  const storedData= sessionStorage.getItem('myitemdata');
  const parsedData = JSON.parse(storedData);
  // console.log(parsedData[0].name);
  let amt=0;
  let i;
  const totalamout=()=>{
    for(i=0;i<parsedData.length;i++){
      amt=amt+parseInt(parsedData[i].price)*parseInt(parsedData[i].quantity);
      setammount(amt);
    }
    console.log(amt);
  }

  useEffect(()=>{
    totalamout()
  })

  const loadScript=(src)=>{
    return new Promise((resovle)=>{
      const script=document.createElement('script')
      script.src=src
      script.onload=()=>{
        resovle(true)
      }
      script.onerror=()=>{
        resovle(false);
      }

      document.body.appendChild(script)
    })
  }

  const displayRazorpay= async()=>{
 
    const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res){
      alert("error");
    }

    const options={
      key: "rzp_test_2yzb2hGbf1QVa5",
      currency: "INR",
      amount:ammount*100,
      name:"Tech Gradiator",
      description: "Test Transaction",

      handler: function(response) {
        alert("successfull payment")
        nav('/thankyou');

      },
      prefill: {
        name: "Vivek",
        email: "vk@example.com",
        contact: "7008673052"
    }
    }

    const paymentObject=new window.Razorpay(options)
    paymentObject.open();
  }

  return (
    <>
    <Topnavv/>
    <Navbar/>
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            Total ammount
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>INR:</Text>
            <Text fontSize={'6xl'} fontWeight={800}>
              {ammount}.00
            </Text>
            {/* <Text color={'gray.500'}>/month</Text> */}
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}
            onClick={displayRazorpay}
            >
            Pay Now
          </Button>
        </Box>
      </Box>
    </Center>
    </>
  )
}

export default Razorpay