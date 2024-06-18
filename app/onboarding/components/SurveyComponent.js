'use client';
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
const options = [
  {
    id: 1,
    title: 'Belajar Trading Plan',
    description:
      'Belajar membuat algoritma trading dengan trading plan dengan materi dari byScript',
    image: './undraw-learn.png',
  },
  {
    id: 2,
    title: 'Otomatiskan trading',
    description:
      'Subscribe ke trading plan byScript untuk eksekusi trading otomatis',
    image: './undraw-trade.png',
  },
  {
    id: 3,
    title: 'Jual trading plan',
    description: 'Listing trading plan di marketplace trading plan byScript',
    image: './undraw-cart.png',
  },
  {
    id: 4,
    title: 'Daftar affiliate',
    description: 'Share link referal untuk mendapatkan komisi hingga 50%',
    image: './undraw-affiliate.png',
  },
];

const SurveyComponent = ({setIndex}) => {
  const [selected, setSelected] = useState([]);
  const handleSelect = (item) => {
    const included = selected?.filter((x) => x?.id === item?.id)?.length > 0;
    if (included) {
      setSelected(selected?.filter((x) => x?.id !== item?.id));
    } else {
      setSelected([...selected, item]);
    }
  };
  return (
    <>
      <Container maxW={'6xl'} pt={{ base: 100, lg: '8%' }}>
        <Center flexDir={'column'}>
          <Stack>
            <Heading size={'md'}>
              Apa yang ingin anda lakukan dalam platform byScript?
            </Heading>
            <Text>
              Informasi ini akan membantu <i>customize experience</i> kamu
            </Text>
          </Stack>
          <SimpleGrid columns={1} gap={2} mt={10}>
            {options?.map((item, i) => (
              <Box
                //   justifyContent={'center'}
                alignItems={'center'}
                display={'flex'}
                flexDirection={'row'}
                key={i}
                p={5}
                rounded={'md'}
                border={'1px'}
                borderColor={'gray.700'}
                cursor={'pointer'}
                _hover={{
                  bg: 'gray.700',
                }}
                onClick={() => handleSelect(item)}
              >
                <HStack>
                  <Checkbox
                    isChecked={
                      selected?.filter((x) => x?.id === item?.id)?.length !== 0
                    }
                  />

                  <Stack gap={0}>
                    <Text fontWeight={'bold'}>{item?.title}</Text>
                    <Text fontSize={12} color={'gray'}>
                      {item?.description}
                    </Text>
                  </Stack>
                </HStack>
                {/* <Image w={'full'} src={item?.image} alt={''} /> */}
              </Box>
            ))}
          </SimpleGrid>
        </Center>
        <Flex w={'full'} justifyContent={'flex-end'} mt={10}>
          <Button onClick={() => setIndex(1)}>Lanjutkan {'->'}</Button>
        </Flex>
      </Container>
    </>
  );
};

export default SurveyComponent;
