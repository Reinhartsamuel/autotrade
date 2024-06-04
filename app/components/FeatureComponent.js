"use client";
import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Stack,
  Heading,
  Text,
  Input,
  HStack,
} from "@chakra-ui/react";
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { authFirebase, db } from '../config/firebase';
import { useRouter } from 'next/navigation';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize='xl' fontWeight='600'>
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function FeatureComponent () {
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({name : authFirebase?.currentUser?.displayName, email : authFirebase?.currentUser?.email});
  const router = useRouter();
  const params = useSearchParams();
  const plan = params.get('plan')
  const productId = params.get('id')

  const handlePayment = async () => {
    // console.log(id)
    setLoading(true)
    const data = {
      email : 'reinhartsams@gmail.com',
      name : inputData?.name || '',
      phone : inputData?.phone || '087806848932',
      createdAt : new Date(),
      lastUpdated : new Date(),
      paymentStatus : 'PENDING',
      productId,
      plan,
      uid : authFirebase?.currentUser?.uid || '',
      ...inputData,
    }
    try {
      const docSnap = await getDoc(doc(db, "products", productId));
      const productData = docSnap.data();
      const docRef = await addDoc(collection(db, 'orders'), {...data, product: productData, amount : productData?.price || 0});
      const id = docRef?.id
      if (id) router.push(`/checkout/summary/${id}/?plan=${plan}`);
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Box as={Container} maxW='7xl' mt={14} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >

        <GridItem >
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
               Daftar Plan 
                <Text
                  as={"span"}
                  bgGradient='linear(to-r, red.400,pink.400)'
                  bgClip='text'
                >
                 {' '}{plan}
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                Selesaikan pesanan anda, atur onboarding meeting dengan tim kami, dan langsung trading otomatis byScript
              </Text>
            </Stack>
            <Box as={"form"} mt={5}>
              <Stack spacing={4}>
                <Input
                  placeholder='Nama'
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  onChange={(e) => setInputData({ ...inputData, name : e.target.value})}
                  defaultValue={authFirebase.currentUser?.displayName || ''}
                />
                <Input
                  placeholder='Phone'
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  onChange={(e) => setInputData({ ...inputData, phone : e.target.value})}
                  defaultValue={authFirebase.currentUser?.phoneNumber || ''}
                />
                <Input
                  placeholder='Email'
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  onChange={(e) => setInputData({ ...inputData, email : e.target.value})}
                  defaultValue={authFirebase.currentUser?.email || ''}
                />
              </Stack>
              <Button
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient='linear(to-r, red.400,pink.400)'
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
                onClick={() => handlePayment('starter')}
                isLoading={loading}
                loadingText={'Memproses pesanan anda...'}
              >
                Lanjutkan Ke Pembayaran {plan}
              </Button>
            </Box>
            form
          </Stack>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"First Feature"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"Second Feature"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"Third Feature"}
          text={"Short text describing one of you features/service"}
        />
        <Feature
          heading={"Fourth Feature"}
          text={"Short text describing one of you features/service"}
        />
      </Grid>
    </Box>
  );
}
