'use client'
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow='base'
      borderWidth='1px'
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function PricingComponent() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign='center'>
        <Heading as='h1' fontSize='4xl'>
          Plans that fit your need
        </Heading>
        <Text fontSize='lg' color={"gray.500"}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign='center'
        justify='center'
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight='500' fontSize='xl'>
              Starter
            </Text>
            <HStack justifyContent='center'>
              <Text fontSize='xl' fontWeight='600'>
                Rp
              </Text>
              <Text fontSize='4xl' fontWeight='900'>
                150,000
              </Text>
              <Text fontSize='xl' color='gray.500'>
                /bulan
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign='start' px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                  Langganan Sinyal AutoTrade
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                  Eksekusi sinyal manual
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Gratis Backtesting
              </ListItem>
            </List>
            <Box w='80%' pt={7}>
              <Button w='full' colorScheme='red' variant='outline'>
                Daftar
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position='relative'>
            <Box
              position='absolute'
              top='-16px'
              left='50%'
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform='uppercase'
                bg={useColorModeValue("red.300", "red.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize='sm'
                fontWeight='600'
                rounded='xl'
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight='500' fontSize='xl'>
                Pro
              </Text>
              <HStack justifyContent='center'>
                <Text fontSize='xl' fontWeight='600'>
                  Rp
                </Text>
                <Text fontSize='4xl' fontWeight='900'>
                  300,000
                </Text>
                <Text fontSize='xl' color='gray.500'>
                  /bulan
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign='start' px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  Free coding trading plan anda
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  Eksekusi sinyal otomatis
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  Lifetime Community
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  Gratis Backtesting
                </ListItem>
              </List>
              <Box w='80%' pt={7}>
                <Button w='full' colorScheme='red'>
                  Hubungi Kami
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
