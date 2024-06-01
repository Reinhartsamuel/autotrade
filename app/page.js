import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import VIdeoComponent1 from './components/VIdeoComponent1';
import PricingComponent from './components/PricingComponent';
import { Suspense } from 'react';
import Testimonials from './components/Testimonials';
import Link from 'next/link';
import StepsComponent from './components/StepsComponent';
import CarouselComponent from './components/CarouselComponent';

export default function Home() {
  return (
    <Stack minW={'100%'} gap={0}>
      <Stack
        minH={'100vh'}
        direction={{ base: 'column', lg: 'row' }}
        // bgGradient={"linear(to-b,black,gray.700)"}
        // bgImage={'/9019808.jpg'}
        pt={{ base: 100, xl: 0 }}
        position={'relative'}
      >
        <Box
          zIndex={-1}
          w={{ base: 300, sm: 400, md: 500, lg: 800 }}
          h={{ base: 300, sm: 400, md: 500, lg: 800 }}
          bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
          borderRadius={'full'}
          filter={{ base: 'blur(50px)', md: 'blur(80px)', lg: 'blur(200px)' }}
          style={{ transform: 'translateX(60%)' }}
          position={'absolute'}
        ></Box>
        {/* <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}> */}
        <Flex p={8} flex={1} justify={'center'} flexDirection={'column'}>
          <Box>
            <Badge colorScheme={'yellow'} rounded={'full'} p={3}>
              😮 Launching
            </Badge>
          </Box>
          <Stack spacing={6} w={'full'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                // _after={{
                //   content: "''",
                //   width: 'full',
                //   height: '30%',
                //   position: 'absolute',
                //   bottom: 1,
                //   left: 0,
                //   bg: 'yellow.400',
                //   zIndex: -1,
                // }}
              >
                Stop trading manual
              </Text>
              <br />{' '}
              <Text bgGradient={'linear(to-r,#5DE1E6,#00205E)'} as={'span'}>
                otomatiskan trading plan kamu dengan byScript
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Bantu kamu <o>traders</o> untuk trading tanpa
              <strong>di-backtesting</strong>
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Link href={'#pricing'}>
                <Button
                  rounded={'full'}
                  bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _active={{
                    bg: 'blue.700',
                  }}
                >
                  Mulai Sekarang
                </Button>
              </Link>
              <Button rounded={'full'} leftIcon={<FaPlay />}>
                <Link href={'#'}>Gimana Cara Kerjanya?</Link>
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} alignItems={'center'} p={8}>
          {/* <VIdeoComponent1 /> */}
          <Image borderRadius={'30'} w={'full'} aria-label='trading' src={'/signal1.png'} alt={'ss'}/>
        </Flex>
      </Stack>
      <Stack p={{ base: 10, lg: 30 }} minH={'100vh'} position={'relative'}>

        <SimpleGrid columns={{base:1, lg:2}}alignItems={'center'}>
          <Heading>
            Trading plan kamu sendiri, tanpa screening berjam-jam atau tarik
            garis{' '}
            <Heading
              bgGradient='linear(to-r, yellow.400, red.500)'
              bgClip='text'
            >
              signal trading langsung dari pinescript
            </Heading>
          </Heading>
          <CarouselComponent />
        </SimpleGrid>
      <Box
          zIndex={-1}
          w={{ base: 300, sm: 400, md: 500, lg: 800 }}
          h={{ base: 300, sm: 400, md: 500, lg: 800 }}
          bgGradient={'linear(to-l,#5DE1E6, #031B4B)'}
          borderRadius={'full'}
          filter={{ base: 'blur(50px)', md: 'blur(80px)', lg: 'blur(200px)' }}
          style={{ transform: 'translateX(-100%)' }}
          position={'absolute'}
        ></Box>
      </Stack>
      <StepsComponent />
      <Testimonials />
      <Stack
        p={{ base: 10, lg: 30 }}
        h={'100vh'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Center>
          <Heading>Seberapa jauh <i>journey</i> trading-mu?</Heading>
        </Center>
        <HStack gap={10} position={'relative'}>
          <Box
            zIndex={-1}
            w={{ base: 300, md: 500, lg: 800 }}
            h={{ base: 100, md: 200, lg: 800 }}
            bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
            borderRadius={'full'}
            style={{ filter: 'blur(100px)' }}
            position={'absolute'}
          ></Box>
          <Button variant={'outline'} colorScheme={'red'} p={5}>
            <Heading size={'md'}>Saya belum pernah trading</Heading>
          </Button>
          <Button variant={'outline'} colorScheme={'green'} p={5}>
            <Heading size={'md'}>Saya sudah pernah trading</Heading>
          </Button>
          <Box
            zIndex={-1}
            w={{ base: 300, md: 500, lg: 800 }}
            h={{ base: 100, md: 200, lg: 800 }}
            bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
            borderRadius={'full'}
            style={{
              filter: 'blur(100px)',
              transform: 'translateX(-100%)',
              top: 0,
            }}
            position={'absolute'}
          ></Box>
        </HStack>
        <Image
          mt={10}
          borderRadius={'20px'}
          w={{ base: '100%', lg: '80%' }}
          src={'/backtest.jpeg'}
          alt={'pine'}
        />
      </Stack>
      


      <Stack
        p={{ base: 10, lg: 30 }}
        h={'100vh'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Center>
          <Heading>Belum Punya Trading Plan?</Heading>
        </Center>
        <HStack gap={10} position={'relative'}>
          <Box
            zIndex={-1}
            w={{ base: 300, md: 500, lg: 800 }}
            h={{ base: 100, md: 200, lg: 800 }}
            bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
            borderRadius={'full'}
            style={{ filter: 'blur(100px)' }}
            position={'absolute'}
          ></Box>
          <Button variant={'outline'} colorScheme={'red'} p={5}>
            <Heading size={'md'}>Saya belum pernah trading</Heading>
          </Button>
          <Button variant={'outline'} colorScheme={'green'} p={5}>
            <Heading size={'md'}>Saya sudah pernah trading</Heading>
          </Button>
          <Box
            zIndex={-1}
            w={{ base: 300, md: 500, lg: 800 }}
            h={{ base: 100, md: 200, lg: 800 }}
            bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
            borderRadius={'full'}
            style={{
              filter: 'blur(100px)',
              transform: 'translateX(-100%)',
              top: 0,
            }}
            position={'absolute'}
          ></Box>
        </HStack>
        <Image
          mt={10}
          borderRadius={'20px'}
          w={{ base: '100%', lg: '80%' }}
          src={'/backtest.jpeg'}
          alt={'pine'}
        />
      </Stack>
      <Suspense fallback={<Skeleton />}>
        <PricingComponent />
      </Suspense>
    </Stack>
  );
}
