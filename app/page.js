import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import VIdeoComponent1 from './components/VIdeoComponent1';
import PricingComponent from './components/PricingComponent';
import { Suspense } from 'react';
import Testimonials from './components/Testimonials'
import bg from '../public/9019808.jpg';

export default function Home() {
  return (
    <Stack minW={'100%'}>
      <Stack 
        minH={"100vh"} 
        direction={{ base: "column", md: "row" }} 
        // bgGradient={"linear(to-b,black,gray.700)"} 
        bgImage={'/9019808.jpg'}
      >
      {/* <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}> */}
        <Flex p={8} flex={1}  justify={"center"} flexDirection={'column'}>
          <Box>
            <Badge colorScheme={'yellow'} rounded={'full'} p={3}>😮 Launching</Badge>
          </Box>
          <Stack spacing={6} w={"full"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "yellow.400",
                  zIndex: -1,
                }}
              >
                Stop trading manual
              </Text>
              <br />{" "}
              <Text bgGradient={"linear(to-r,#5DE1E6,#00205E)"} as={"span"}>
                otomatiskan trading plan kamu dengan byScript
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Sebagai seorang trader, mempunyai <i>trading plan</i> adalah suatu
              hal yang wajib. Dengan Auto Trader, kamu bisa otomatiskan trading plan kamu
              atau pakai algoritma kami yang sudah <strong>di-backtesting</strong>
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bgGradient={"linear(to-l,#8C52FF,#031B4B)"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                _active={{
                  bg: "blue.700",
                }}
              >
                Mulai Sekarang
              </Button>
              <Button rounded={"full"} leftIcon={<FaPlay />}>Gimana Cara Kerjanya?</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} alignItems={'center'} p={8}>
          <Suspense fallback={<Skeleton />}>
            <VIdeoComponent1 />
          </Suspense>
        </Flex>
      </Stack>
      <Testimonials />
      <Suspense fallback={<Skeleton />}>
        <PricingComponent />
      </Suspense>
    </Stack>
  );
}
