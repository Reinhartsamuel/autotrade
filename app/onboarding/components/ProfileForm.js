'use client';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { authFirebase } from '../../config/firebase';


const ProfileForm = ({ setIndex }) => {
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
          <Box
            rounded={'md'}
            w={'md'}
            border={'1px'}
            // mt={5}
            p={10}
            bg={useColorModeValue('gray.100', 'gray.800')}
            borderColor={'gray.600'}
          >
            <Stack alignItems={'center'}>
              <Heading size={'md'}>Silakan lengkapi profile kamu</Heading>
              <Text>Isi informasi dengan benar</Text>
            </Stack>
            <Spacer />
            <Stack>
              <Input placeholder='Nama' defaultValue={authFirebase?.currentUser?.displayName} />
              <Input placeholder='Email' defaultValue={authFirebase?.currentUser?.email} />
              <Input placeholder='Nomor telepon' defaultValue={authFirebase?.currentUser?.phoneNumber} />
              <Input placeholder='Alamat' />
            </Stack>
          </Box>
          <Flex w={'full'} justifyContent={'space-between'} mt={10}>
            <Button onClick={() => setIndex(0)}>{'<-'} Kembali</Button>
            <Button onClick={() => setIndex(2)}>Lanjutkan {'->'}</Button>
          </Flex>
        </Center>
      </Container>
    </>
  );
};

export default ProfileForm;
