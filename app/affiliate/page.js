import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

const page = () => {
  return (
    <>
      <Head>
        <title>Affiliate</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
      <Stack
        minH={'100vh'}
        direction={{ base: 'column', lg: 'row' }}
        // bgGradient={"linear(to-b,black,gray.700)"}
        // bgImage={'/9019808.jpg'}
        alignItems={'center'}
        justifyContent={'center'}
        pt={{ base: 100, xl: 0 }}
        position={'relative'}
      >
        <Box
          zIndex={-1}
          w={{ base: 300, sm: 400, md: 500, lg: 800 }}
          h={{ base: 300, sm: 400, md: 500, lg: 800 }}
          bgGradient={'linear(to-l,#5DE1E6, #00205E, #8C52FF)'}
          borderRadius={'full'}
          filter={{ base: 'blur(50px)', md: 'blur(80px)', lg: 'blur(200px)' }}
          style={{ transform: 'translateX(-10%)' }}
          position={'absolute'}
        ></Box>
        <SimpleGrid
          columns={[1, 1, 2]}
          p={8}
          justifyContent={'center'}
          flexDirection={{ base: 'column', lg: 'row' }}
          // bg={'red'}
          w={'full'}
          gap={5}
        >
          <Stack spacing={6}>
            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}>
              Share link referal dan dapatkan hinggal{' '}
              <Text
                as={'span'}
                bgGradient={'linear(to-r, red, yellow)'}
                bgClip={'text'}
              >
                40%
              </Text>{' '}
              komisi
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.200'}>
              Ajak teman untuk gabung di byScript dan trading otomatis dengan
              algoritma. <i>Sharing</i> komisi dengan temanmu hingga 40%
            </Text>
            <Button
              rounded={'lg'}
              // bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              _active={{
                bg: 'blue.700',
              }}
              width={'full'}
            >
              Daftar Affiliate
            </Button>
          </Stack>
          <Flex flex={1}>
            <Box
              bg={'white'}
              borderRadius={'xl'}
              p={{ base: 5, lg: 10 }}
              width={'full'}
              // h={'400'}
              color={'black'}
              mx={{ base: 0, lg: 20 }}
            >
              <Text fontWeight={'bold'}>Komisi Referal</Text>
              <Text>Atur komisi referal layer pertama dan kedua</Text>
              <Box
                rounded={'md'}
                bg={'gray.50'}
                p={5}
                color={'gray.700'}
                border={'1px'}
                borderColor={'gray.200'}
              >
                <Flex w={'full'} justifyContent={'space-between'}>
                  <Stack>
                    <Heading>30%</Heading>
                    <Text fontSize={12} color={'gray.699'}>
                      Layer Pertama
                    </Text>
                  </Stack>
                  <Stack>
                    <Heading>10%</Heading>
                    <Text fontSize={12} color={'gray.699'}>
                      Layer Kedua
                    </Text>
                  </Stack>
                </Flex>
              </Box>
              <Stack mt={10}>
                <Text>Referral ID</Text>
                <InputGroup>
                  <Input
                    textColor={'gray.600'}
                    borderColor={'gray.200'}
                    value={'313o13hi12837681b39'}
                  />
                  <InputRightElement cursor={'pointer'}>
                    <Box
                      _hover={{
                        transform: 'scale(1.5)',
                        transition: 'all 0.4s ease',
                      }}
                      _active={{
                        transform: 'scale(1.25)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <FaRegCopy color={'gray'} />
                    </Box>
                  </InputRightElement>
                </InputGroup>
                <Text mt={5}>Referral Link</Text>
                <InputGroup>
                  <Input
                    textColor={'gray.600'}
                    borderColor={'gray.200'}
                    value={'byscript.io/checkout/aff=313o13hi12837681b39'}
                  />
                  <InputRightElement cursor={'pointer'}>
                    <Box
                      _hover={{
                        transform: 'scale(1.5)',
                        transition: 'all 0.4s ease',
                      }}
                      _active={{
                        transform: 'scale(1.25)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <FaRegCopy color={'gray'} />
                    </Box>
                  </InputRightElement>
                </InputGroup>
              </Stack>
            </Box>
          </Flex>
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default page;
