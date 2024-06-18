'use client';

import {
    Avatar,
    Button,
    Flex,
    HStack,
    Heading,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import React from 'react';
  import { RxAvatar } from 'react-icons/rx';
  import { FaStar } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const ProductCart = ({item}) => {
    const router = useRouter();
    const handleSubscribe = (data) => {
      router.push(`/marketplace/subscribe/${data?.id}`)
    }
  return (
    <>
      <Stack
        justifyContent={'space-between'}
        alignItems={'center'}
        my={10}
        p={5}
        rounded={'xl'}
        boxShadow={'lg'}
        h={'80%'}
        borderColor={'gray'}
        border={'1px'}
        gap={0}
        position={'relative'}
      >
        <Flex position={'absolute'} top={0} right={5}>
          {new Array(item?.star).fill(0).map((x, i) => (
            <FaStar
              key={i}
              color={'yellow'}
              size={30}
              style={{ transform: 'translateY(-15px)' }}
            />
          ))}
        </Flex>
        <HStack w={'full'} justifyContent={'space-between'}>
          <HStack>
            <Avatar />
            <Stack gap={0}>
              <Heading size={'md'}>{item?.name}</Heading>
              <HStack>
                <RxAvatar />
                <Text fontSize={12}>{item?.subscribers} Subscribers</Text>
              </HStack>
            </Stack>
          </HStack>
          <Text fontSize={12}>Author : {item?.author}</Text>
        </HStack>
        <HStack w={'full'} justifyContent={'space-between'}>
          <Stack alignItems={'center'} gap={0}>
            <Text color={'green.300'} fontWeight={'bold'} fontSize={20}>
              {parseInt(item?.netProfit)?.toLocaleString()} %
            </Text>
            <Text fontSize={9} color={'gray.300'}>
              Net Profit
            </Text>
          </Stack>
          <Stack alignItems={'center'} gap={0}>
            <Text color={'green.300'} fontWeight={'bold'} fontSize={20}>
              {parseInt(item?.percentProfitable)?.toLocaleString()} %
            </Text>
            <Text fontSize={9} color={'gray.300'}>
              Percent Profitable
            </Text>
          </Stack>
          <Stack alignItems={'center'} gap={0}>
            <Text color={'red.300'} fontWeight={'bold'} fontSize={20}>
              {parseInt(item?.maxDrawDown)?.toLocaleString()} %
            </Text>
            <Text fontSize={9} color={'gray.300'}>
              Max Drawdown
            </Text>
          </Stack>
        </HStack>
        <Button
          isDisabled={item?.subscribed}
          w={'full'}
          bgGradient={'linear(to-r,#8C52FF,#5DE1E6)'}
          color={'white'}
          m={0}
          onClick={() =>handleSubscribe(item)}
        >
          {item?.subscribed ? 'Subscribed' : 'Subscribe'}
        </Button>
      </Stack>
    </>
  );
};

export default ProductCart;
