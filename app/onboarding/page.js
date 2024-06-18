'use client';
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import SurveyComponent from './components/SurveyComponent';
import ProfileForm from './components/ProfileForm';
import { useRouter } from 'next/navigation';

const page = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <>
      <Stack w={'full'} minH={'100vh'}>
        {index === 0 && <SurveyComponent setIndex={setIndex} />}
        {index === 1 && <ProfileForm setIndex={setIndex} />}
        {index === 2 && (
          <Container maxW={'6xl'} pt={{ base: 100, lg: '8%' }}>
            <Heading>Selamat Datang di byScript</Heading>
            <Button onClick={() => router.push('/subscriptions')}>Mulai</Button>
          </Container>
        )}
      </Stack>
    </>
  );
};

export default page;
