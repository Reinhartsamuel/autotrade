import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const page = () => {
  return (
    <>
      <Stack w={'100vw'} minH={'100vh'}>
        <Container maxW={'5xl'} pt={{ base: 100, lg: '8%' }}>
          <Heading>Marketplace Trading Plan</Heading>
          <Text>Belum ada data terbaru</Text>
        </Container>
      </Stack>
    </>
  );
};

export default page;
