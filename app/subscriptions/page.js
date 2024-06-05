import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';



const tradingPlans = [
  {name : '', ownerName : 'Reinhart', subscribers : 20, level : 'rookie'}
]

const page = () => {
  return (
    <>
      <Stack w={'100vw'} minH={'100vh'}>
        <Container maxW={'5xl'} pt={{ base: 100, lg: '8%' }}>
          <Stack>
            <Heading>Subscription Aktif</Heading>
            <Text>Tidak ada subscription</Text>
          </Stack>
          <Stack mt={10}>
            <Heading>Trading Plan</Heading>
            <Text>Tidak ada subscription</Text>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default page;
