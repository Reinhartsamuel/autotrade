'use client';
import { Button, Container, Heading, Stack } from '@chakra-ui/react';
import { signInWithCustomToken } from 'firebase/auth';
import React, { useState } from 'react';
import { authFirebase } from '../../config/firebase';
import { useRouter } from 'next/navigation';

const page = ({ params }) => {
  const token = params.auth;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const onVerify = async () => {
    setLoading(true);
    try {
      await signInWithCustomToken(authFirebase, token);
      setIsVerified(true);
      router.push('/onboarding');
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Stack w={'full'} minH={'100vh'}>
        <Container maxW={'6xl'} pt={{ base: 100, lg: '8%' }}>
          {isVerified ? (
            <Stack>
                <Heading>Akunmu terverifikasi!</Heading>
                
            </Stack>
          ) : (
            <Stack>
              <Heading>Selamat Datang di byScript</Heading>
              <Text>Verifikasi akun anda dengan klik tombol di bawah:</Text>
              <Button>Verifikasi</Button>
            </Stack>
          )}
        </Container>
      </Stack>
    </>
  );
};

export default page;
