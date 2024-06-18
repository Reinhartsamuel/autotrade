import { Container, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

const page = ({ params }) => {
  return (
    <>
      <Stack minH={'100vh'}>
        <Container maxW={'7xl'} pt={{ base: 100, lg: '8%' }}>
          <Stack>
            <Heading>ID: {params?.id}</Heading>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default page;
