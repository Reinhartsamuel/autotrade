import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react';
import { collection, getDocs, query } from 'firebase/firestore/lite';
import React from 'react';
import { db } from '../config/firebase';


const page = async () => {
  return (
    <Stack w={'100vw'} minH={'100vh'}>
      <Container maxW={'5xl'}>
        <Heading>Events</Heading>
        <Center w={'full'}></Center>
      </Container>
      <Box
        bgGradient={'linear(to-r,#5DE1E6,#00205E)'}
        position={'relative'}
        w={'800px'}
        h={'500px'}
        borderRadius={'20px'}
        aspectRatio={16 / 9}
        className='glowxx'
      >
        <Box className='imgWrapper'>
          <Image src={'/backtest.jpeg'} />
        </Box>
      </Box>
    </Stack>
  );
};

export default page;
