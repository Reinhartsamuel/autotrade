import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import VIdeoComponent1 from './components/VIdeoComponent1';
import PricingComponent from './components/PricingComponent';

export default function Home() {
  return (
    <Stack minW={'100%'}>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
                Realisasikan Auto Trade
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                untuk Algoritma Kamu
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
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Mulai Sekarang
              </Button>
              <Button rounded={"full"} leftIcon={<FaPlay />}>Gimana Cara Kerjanya?</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} alignItems={'center'} p={8}>
          <VIdeoComponent1 />
        </Flex>
      </Stack>
      <PricingComponent />
    </Stack>
  );
}
