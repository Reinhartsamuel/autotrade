'use client';
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
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';
import { priceFormat } from '../utils/priceFormat';
import { cache, useEffect, useState } from 'react';
import { collection, getDocs, query, where, sortBy, orderBy } from 'firebase/firestore';
import { authFirebase, db } from '../config/firebase';

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow='base'
      borderWidth='1px'
      maxW={400}
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

export default function PricingComponent() {
  const router = useRouter();
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPricing = cache(async () => {
    try {
      const arr = [];
      const productsRef = collection(db, 'products');
      const q = query(productsRef, where('type', '==', 'plan'), orderBy('price', 'asc'));
      // const q = query(collection(db, 'products'), where('type', '==', 'plan'));
  
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      arr.push({id : doc.id, ...doc.data()})
      });
      setPrices( arr)
    } catch (error) {
      console.log(error.message);
    }
  })


  const handleCheckout = async (x) => {
    setLoading(true)
    try {
      if (authFirebase.currentUser) {
        router.push(`/checkout/?plan=${x?.name}&id=${x?.id}`)
      } else {
        router.push('/auth/login')
      }
    } catch (error) { throw new Error(error.message) }
     finally { setLoading(false) }
  }

  useEffect(() => {
    getPricing()
  } ,[])
  return (
    <Box py={20} id='pricing'>
      <VStack spacing={2} textAlign='center'>
        <Heading as='h1' fontSize='4xl'>
          Pilih Plan
        </Heading>
        <Text fontSize='lg' color={'gray.500'}>
          Bayar dengan kartu kredit, Gopay, atau transfer bank
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign='center'
        justify='center'
        spacing={{ base: 4, lg: 10 }}
        py={10}
        overflow={'auto'}
      >
        {prices?.map((x, i) => (
          <PriceWrapper key={i}>
            <Box position='relative'>
              {x.popular && <Box
                position='absolute'
                top='-16px'
                left='50%'
                style={{ transform: 'translate(-50%)' }}
              >
                <Text
                  textTransform='uppercase'
                  bg={useColorModeValue('red.300', 'red.700')}
                  px={3}
                  py={1}
                  color={useColorModeValue('gray.900', 'gray.300')}
                  fontSize='sm'
                  fontWeight='600'
                  rounded='xl'
                >
                  Most Popular
                </Text>
              </Box>}
              <Box py={4} px={12}>
                <Text fontWeight='500' fontSize='3xl'>
                  {x.name}
                </Text>
                {x.maxBalance && <Text fontSize={12}>Maximum balance : ${priceFormat(x.maxBalance)}</Text>}
                {x.minBalance && <Text fontSize={12}>Minimum balance : ${priceFormat(x.minBalance)}</Text>}
                <HStack justifyContent='center'>
                  <Text fontSize='xl' fontWeight='600'>
                    Rp
                  </Text>
                  <Text fontSize='4xl' fontWeight='900'>
                    {priceFormat(x.price)}
                  </Text>
                  {/* <Text fontSize='xl' color='gray.500'>
                    /bulan
                  </Text> */}
                </HStack>
              </Box>
              <VStack
                // bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}
              >
                <List spacing={3} textAlign='start' px={12}>
                  {x.features.map((y, idx) => (
                    <ListItem key={idx}>
                      <ListIcon as={FaCheckCircle} color='green.500' />
                      {y}
                    </ListItem>
                  ))}
                </List>
                <Box w='80%' pt={7}>
                  <Button
                    w='full'
                    // colorScheme='red'
                    bgGradient={x?.popular? 'linear(to-l,#5DE1E6,#00205E)' : ''}
                    _hover={{
                      bgGradient: 'linear(to-l,#8C52FF,#031B4B)',
                    }}
                    variant={x?.popular ? 'solid' : 'outline'}
                    onClick={() => handleCheckout(x)}
                    isLoading={loading}
                    isDisabled={loading}
                    loadingText={'Processing...'}
                  >
                    Daftar
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
        ))}
      </Stack>
    </Box>
  );
}
