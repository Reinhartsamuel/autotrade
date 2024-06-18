import {
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import ProductCart from './ProductCart';

const data = [
  {
    id: 1,
    name: 'Sniper',
    author: 'byScript',
    price: 200000,
    netProfit: '927562605',
    maxDrawDown: '52.17',
    percentProfitable: '30.59',
    subscribers: 89,
    timeframe: '1D',
    star: 3,
    subscribed: true,
  },
  {
    id: 1,
    name: 'VertexMax',
    author: 'byScript',
    price: 200000,
    netProfit: '3000.35',
    maxDrawDown: '54.33',
    percentProfitable: '38.89',
    subscribers: 21,
    timeframe: '1D',
    star: 3,
    subscribed: false,
  },
];
const page = () => {
  return (
    <>
      <Stack w={'100vw'} minH={'100vh'}>
        <Container maxW={'7xl'} pt={{ base: 100, lg: '8%' }}>
          <Heading>Marketplace Trading Plan</Heading>
          {data?.length > 0 ? <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={{ base: 0, md: 0, xl: 2 }}
          >
            {data?.length > 0 &&
              data?.map((item, i) => (
                <ProductCart key={i} item={item} />
              ))}
          </SimpleGrid> : 
          <Text>Belum ada data terbaru</Text>
          }
        </Container>
      </Stack>
    </>
  );
};

export default page;
