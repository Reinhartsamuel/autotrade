import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  return (
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
        {/* <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        /> */}
        <Box objectFit={"cover"}>
          <iframe
            width='700'
            height='394'
            autoplay={1}
            mute={1}
            src='https://www.youtube.com/embed/mkTEEOSRmFA'
          ></iframe>
        </Box>
        
      </Flex>
    </Stack>
  );
}
