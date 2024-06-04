import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const page = () => {
  return (
    <>
      <Stack w={'100vw'} minH={'100vh'}>
        <Container maxW={'5xl'} pt={{ base: 100, lg: '8%' }}>
          <Heading>Subscription Aktif</Heading>
          <Text>Tidak ada subscription</Text>
        </Container>
      </Stack>
    </>
  );
};

export default page;
