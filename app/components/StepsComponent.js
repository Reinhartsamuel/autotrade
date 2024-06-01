'use client';
import React from 'react';
import { useEffect } from 'react';
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FcCandleSticks } from 'react-icons/fc';
import { Fade, Slide } from 'react-awesome-reveal';
import GlowingImage from './GlowingImage';

const indicators = [
  {
    name: 'Moving Average',
    url: 'https://s3.tradingview.com/o/oLfDPBra_mid.png',
  },
  { name: 'RSI', url: 'https://s3.tradingview.com/j/jaGhXmgT_big.png' },
  {
    name: 'Stochastics',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_xPplMDAVjZeLIpqS-5WFF3j1V7SUH71mg&s',
  },
  {
    name: 'Bollinger Bands',
    url: 'https://s3.tradingview.com/u/ULxUxPWn_mid.png',
  },
  { name: 'SAR', url: 'https://s3.tradingview.com/m/MddD4giy_mid.png' },
  { name: 'ATR', url: 'https://s3.tradingview.com/2/2NlZ5x0s_big.png' },
];

const StepsComponent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, 1000);
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  }, []);
  return (
    <>
      <Stack
        w={'full'}
        p={0}
        overflow={'hidden'}
        my={20}
        bgGradient={'linear(to-b, transparent, gray.800)'}
      >
        <Grid
          //   h='800'
          w={'full'}
          templateRows='repeat(1, 1fr)'
          templateColumns='repeat(17, 1fr)'
          gap={1}
        >
          <GridItem rowSpan={1} colSpan={1} h='full'>
            <Center direction={'column'} h='full'>
              <VStack h='full'>
                <FcCandleSticks size={30} />
                <Fade
                  direction={'down'}
                  duration={'2000'}
                  style={{ height: '100%' }}
                >
                  <Box
                    overflow={'hidden'}
                    rounded={'full'}
                    width='2px'
                    p='2px'
                    h='full'
                    bgGradient='linear(to-b, transparent, pink.500)'
                  >
                    <div></div>
                  </Box>
                </Fade>
              </VStack>
            </Center>
          </GridItem>
          <GridItem
            transition={'linear 2s'}
            colSpan={16}
            overflow={'scroll'}
            paddingRight={7}
          >
            <Heading>Pilih Indikator Favoritmu</Heading>
            <Slide cascade={true}>
              <SimpleGrid columns={{ base: 2, lg: 3 }} gap={1}>
                {indicators.map((x, i) => (
                  <Box tra key={i} pos={'relative'} w={'200'} h={'199'}>
                    <Image
                      objectFit={'cover'}
                      src={x.url}
                      alt={x.name}
                      h={'100%'}
                      w={'100%'}
                    />
                    <Box
                      pos={'absolute'}
                      bottom={0}
                      zIndex={2}
                      w='100%'
                      pt={10}
                      bgGradient='linear(to-b, transparent, gray)'
                    >
                      <Heading color={'white'} shadow={'md'}>
                        {x.name}
                      </Heading>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </Slide>
          </GridItem>
        </Grid>
        <Grid
          //   h='800'
          w={'full'}
          templateRows='repeat(1, 1fr)'
          templateColumns='repeat(17, 1fr)'
          gap={1}
        >
          <GridItem rowSpan={1} colSpan={1} h='full'>
            <Center direction={'column'} h='full'>
              <VStack h='full'>
                <FcCandleSticks size={30} />
                <Fade
                  direction={'down'}
                  duration={'2000'}
                  style={{ height: '100%' }}
                >
                  <Box
                    overflow={'hidden'}
                    rounded={'full'}
                    width='2px'
                    p='2px'
                    h='full'
                    bgGradient='linear(to-b, transparent, pink.500)'
                  >
                    <div></div>
                  </Box>
                </Fade>
              </VStack>
            </Center>
          </GridItem>
          <GridItem
            transition={'linear 2s'}
            colSpan={16}
            // overflow={'scroll'}
            paddingRight={7}
          >
            <Heading mt={10} mb={5}zIndex={2}>Coding Algoritma</Heading>
            <Slide cascade={true}>
              <Box width={'50%'}>
                <GlowingImage src={'/backtest.jpeg'} alt={'pine'} />
              </Box>
            </Slide>
          </GridItem>
        </Grid>

        <HStack h={'30rem'}>
          <VStack h='100%'>
            <FcCandleSticks size={30} />
            <Fade
              direction={'down'}
              duration={'2000'}
              style={{ height: '100%' }}
            >
              <Box
                overflow={'hidden'}
                rounded={'full'}
                width='2px'
                p='2px'
                h='full'
                bgGradient='linear(to-b, transparent, pink.500)'
              >
                <div></div>
              </Box>
            </Fade>
          </VStack>
          <Box width={'50%'}>
            <GlowingImage src={'/backtest.jpeg'} alt={'pine'} />
          </Box>
        </HStack>

        <Box my={500}>
          <Center my={20}>
            <Heading>ALGORITHMIC TRADER PATHWAY</Heading>
          </Center>
          <Fade style={{ display: 'flex', justifyContent: 'center' }}>
            <Box width={{ base: '100%', lg: '80%' }}>
              <GlowingImage
                src={'/pathway.jpg'}
                alt={'pine'}
                bg={'linear-gradient(0deg, lightblue, red)'}
              />
            </Box>
          </Fade>
        </Box>
      </Stack>
    </>
  );
};

export default StepsComponent;
