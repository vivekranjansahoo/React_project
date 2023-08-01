'use client'
import axios from 'axios';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import Topnavv from '../../components/Topnav/Topnavv';
import CartList from '../Cart/CartList/CartList';

 function ProductDetails() {

    var [allimage, setallimage] = useState([]);
    const { id } = useParams();
    const [cart,setCart]=useState([]);
    const [showCart,setShowCart]=useState(false);

   

    const handleLogin = async (id) => {
        console.log(id);
        try {
          const response = await axios.get(`http://localhost:5000/productdetails/${id}`);
          console.log(response.data);
          setallimage(response.data);
        } catch (error) {
          console.error('error', error);
        }
      };

      const addTocart=(data)=>{
        console.log(data);
        
        setCart([...cart,{ ...data,quantity:1}]);
        alert("item added to cart for buy");
      }
    
      const handleShow =(value)=>{
        setShowCart(value);
      }

//  const { addToCart } = useContext(CartContext);

  // const handleAddToCart = (all) => {
  //   const product = {
  //       id: all._id,
  //       name:all.name,
  //       price: all.price
  //     };
  //   var a= addToCart(product);
  //  console.log(a);

  //   alert("added succfully");
  // };

  useEffect(()=>{
    handleLogin(id)
  },[id])


  return (
    <>


        <div > 
        <Topnavv count={cart.length} handleShow={handleShow}/>
        <Navbar/>
        {/* <CartIcon count={cart.length} handleShow={handleShow}/> */}

        {
            showCart ? <CartList cart={cart}/> : null
        }
    <Container maxW={'7xl'}>
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 18, md: 12 }}>
      <Flex>
        <Image
          rounded={'md'}
          alt={'product image'}
          src={allimage.image}
          fit={'cover'}
          align={'center'}
          w={'100%'}
          h={{ base: '100%', sm: '400px', lg: '500px' }}
        />
      </Flex>
      <Stack spacing={{ base: 6, md: 10 }}>
        <Box>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
            {allimage.name}
          </Heading>
          <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}>
           INR: {allimage.price} <br />
           desc: {allimage.desc}
          </Text>
        </Box>

        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={'column'}
          divider={
            <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
          }>
          <VStack spacing={{ base: 4, sm: 6 }}>
            <Text fontSize={'lg'}>
            Lorem ipsum dolor sit amet consectetur.
            </Text>
          </VStack>
          <Box>
            <Text
              fontSize={{ base: '16px', lg: '18px' }}
              color={useColorModeValue('yellow.500', 'yellow.300')}
              fontWeight={'500'}
              textTransform={'uppercase'}
              mb={'4'}>
              Features
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <List spacing={2}>
                <ListItem>Chronograph</ListItem>
                <ListItem>Master Chronometer Certified</ListItem>{' '}
                <ListItem>Tachymeter</ListItem>
              </List>
              <List spacing={2}>
                <ListItem>Anti‑magnetic</ListItem>
                <ListItem>Chronometer</ListItem>
                <ListItem>Small seconds</ListItem>
              </List>
            </SimpleGrid>
          </Box>
          <Box>
            <Text
              fontSize={{ base: '16px', lg: '18px' }}
              color={useColorModeValue('yellow.500', 'yellow.300')}
              fontWeight={'500'}
              textTransform={'uppercase'}
              mb={'4'}>
              Product Details
            </Text>

            <List spacing={2}>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Between lugs:
                </Text>{' '}
                20 mm
              </ListItem>
            </List>
          </Box>
        </Stack>

        <Button
          rounded={'none'}
          w={'full'}
          mt={8}
          size={'lg'}
          py={'7'}
          bg={useColorModeValue('gray.900', 'gray.50')}
          color={useColorModeValue('white', 'gray.900')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}
          onClick={()=> addTocart(allimage)}>
          Buy Now
        </Button>
      </Stack>
    </SimpleGrid>
  </Container>
  </div>
  </>

  )
}

export default ProductDetails;