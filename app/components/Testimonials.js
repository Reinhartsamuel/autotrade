'use client';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      //   bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        // borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      //   color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text
          fontSize={'sm'}
          // color={useColorModeValue('gray.600', 'gray.400')}
        >
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box
      // bg={useColorModeValue('gray.100', 'gray.700')}
      // bgGradient={"linear(to-b,black,gray.700)"}
      minH={'100vh'}
    >
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading bgGradient='linear(to-r, yellow.400, red.500)' bgClip='text'>
            Kata mereka...
          </Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Luar Biasa</TestimonialHeading>
              <TestimonialText>
                Kurang dari seminggu aktifin auto trade porto udah mulai hijau,
                proses cepat dan transparan bisa ketemuan langsung
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://i.ibb.co.com/kQBpZdB/mustafa.jpg'}
              name={'Om Mustafa'}
              title={'Pensiunan'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Diajarin Bikin Algoritma</TestimonialHeading>
              <TestimonialText>
                Bisa belajar coding pine script dari 0 sampai sekarang punya
                trading plan sendiri bahkan sudah bisa mengaktifkan auto trade
                sendiri untuk tradingnya sendiri
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://i.ibb.co.com/dbFLJX1/alvin.jpg'}
              name={'Alvin'}
              title={'Pekerja Swasta non-IT'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>6000 Persen Profit</TestimonialHeading>
              <TestimonialText>
                Sudah ikut workshop algoritma untuk auto trading 2x, sekarang
                bisa aktifin auto trade di akun saya menggunakan trading plan
                hasil racikan saya sendiri
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://i.ibb.co.com/KD1Mhtj/carney.jpg'}
              name={'Carney'}
              // title={'CEO at ABC Corporation'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
