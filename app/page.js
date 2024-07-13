import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
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
import VideoPlayer from './components/VideoPlayer';

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
        {/* <Box
          zIndex={-1}
          w={{ base: 250, sm: 400, md: 500, lg: 800 }}
          h={{ base: 250, sm: 400, md: 500, lg: 800 }}
          bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
          borderRadius={'full'}
          filter={{ base: 'blur(40px)', md: 'blur(80px)', lg: 'blur(200px)' }}
          saturate={200}
          // style={{ transform: 'translateX(60%)' }}
          transform={'translateX(60%)'}
          position={'absolute'}
        ></Box> */}
        <Box
          zIndex={-1}
          w={{ base: 300, md: 500, lg: 800 }}
          h={{ base: 100, md: 200, lg: 800 }}
          bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
          borderRadius={'full'}
          style={{ filter: 'blur(100px)' }}
          position={'absolute'}
        ></Box>
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
              Bantu kamu <i>traders</i> untuk trading secara otomatis dengan{' '}
              <i>script</i>
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Link href={'new'}>
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
          <Image
            borderRadius={'30'}
            w={'full'}
            aria-label='trading'
            src={'/signal1.png'}
            alt={'ss'}
          />
        </Flex>
      </Stack>
      {/* <Stack
        minH={{base:'800', xl:'100vh'}}
        direction={{ base: 'column', lg: 'row' }}
        pt={{ base: 100, xl: 0 }}
        position={'relative'}
      >
        <Flex w={'full'} flex={1} alignItems={'center'} justifyContent={'center'}>
          <Box w={{ base: 'full', sm: 400, md: 500, lg: 800 }}>
            <VideoPlayer
              url={
                'https://rr5---sn-npoeened.googlevideo.com/videoplayback?expire=1720486198&ei=1jSMZoTtFf2_6dsPlLiVyAM&ip=148.251.137.140&id=o-ADQ_oG-c820fjjI5jXM0_Jw_QnnKMnhd7Q2cp4t43oGV&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=25826337&ratebypass=yes&dur=946.050&lmt=1713240754098041&c=ANDROID_TESTSUITE&txp=6219224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgB2hx1onikBtq71DG3f-hATuqSQRytgfmYlvmESfGyF0CIQChdhXOd0S6QqkQtl51ZWvwpl2iw6Xgc0YKADolMGHjpg%3D%3D&title=Beli%20Bitcoin%20%241000%20Setiap%20Tanggal%201%20Pakai%20Algoritma%2C%20Apakah%20Cuan%3F%3F&rm=sn-4g5ekd76,sn-xmjxajvh-jb3zz7e&fexp=24350518&req_id=363e0c64f22fa3ee&ipbypass=yes&redirect_counter=3&cm2rm=sn-nposz76&cms_redirect=yes&cmsv=e&mh=DH&mip=140.213.11.14&mm=34&mn=sn-npoeened&ms=ltu&mt=1720464282&mv=m&mvi=5&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRQIgClyn_zDR94fWhF8EYFnf_KsjlA3ONgDcuPmqG7C91rECIQCLY0wuY-fatboMtBRN8IX8fSWpuYLjgobcFM284CaNzA%3D%3D'
              }
            />
          </Box>
        </Flex>
      </Stack> */}
      <Stack position={'relative'}>
        <SimpleGrid p={5} columns={{ base: 1, lg: 2 }} gap={10}>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <CarouselComponent />
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Heading>
              Trading plan kamu sendiri, tanpa screening berjam-jam atau tarik
              garis{' '}
              <Text
                bgGradient='linear(to-r, yellow.400, red.500)'
                bgClip='text'
              >
                signal trading langsung dari pinescript
              </Text>
            </Heading>
          </Box>
        </SimpleGrid>

        <Box
          zIndex={-1}
          w={{ base: 300, sm: 400, md: 500, lg: 500 }}
          h={{ base: 300, sm: 400, md: 500, lg: 500 }}
          bgGradient={'linear(to-l,#5DE1E6, #031B4B)'}
          borderRadius={'full'}
          filter={{ base: 'blur(50px)', md: 'blur(80px)', lg: 'blur(100px)' }}
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
          <Heading>
            Seberapa jauh <i>journey</i> trading-mu?
          </Heading>
        </Center>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 2, xl: 10 }}
          position={'relative'}
        >
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
        </SimpleGrid>
        <Image
          mt={10}
          borderRadius={'20px'}
          w={{ base: '100%', lg: '80%' }}
          src={'/backtest.jpeg'}
          alt={'pine'}
        />
      </Stack>

      <Stack
        mt={30}
        p={{ base: 10, lg: 30 }}
        h={'100vh'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Center>
          <Heading textAlign={'center'}>
            Sudah Punya Trading Plan Kamu Sendiri?
          </Heading>
        </Center>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 2, xl: 10 }}
          position={'relative'}
        >
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
            <Heading size={'md'}>Saya belum punya trading plan</Heading>
          </Button>
          <Button variant={'outline'} colorScheme={'green'} p={5}>
            <Heading size={'md'}>Saya sudah punya trading plan</Heading>
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
        </SimpleGrid>
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
