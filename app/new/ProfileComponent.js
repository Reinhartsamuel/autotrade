'use client';
import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';

const ProfileComponent = ({ setIndex, data, setData }) => {
  const toast = useToast();
  const handlePhone = (e) => {
    let { value } = e.target;
    let phone = value;
    if (typeof value === 'string' && value?.startsWith('0')) {
      phone = '62' + value?.slice(1);
    } else if (typeof value === 'string' || value?.startsWith('+62')) {
      phone = value?.slice(1);
    }
    setData({ ...data, phoneNumber: phone });
  };

  const validate = () => {
    if (
      !data?.name ||
      !data?.email ||
      !data?.phoneNumber ||
      !data?.city ||
      !data?.address
    )
      return toast({
        title: 'Data belum lengkap!',
        description:
          'Mohon lengkapi semua data sebelum lanjut ke step berikutnya',
        status: 'error',
        duration: 3000,
        position: 'top-right',
        isClosable: true,
      });

    setIndex((prev) => prev + 1);
  };
  return (
    <>
      <Fade direction='up' duration={500}>
        <Container maxW={'7xl'} pt={{ base: 100, lg: '8%' }}>
          <Stack
            flexDirection={'column'}
            // alignItems={'center'}
            // justifyContent={'center'}
          >
            <Text
              mt={5}
              textAlign={'center'}
              fontSize={'xl'}
              fontWeight={'bold'}
            >
              Isi data diri kamu dengan benar:
            </Text>

            <Stack mt={10}>
              <Box>
                <Text>Nama Lengkap</Text>
                <Input
                  _placeholder={{ color: 'gray.100' }}
                  placeholder={'Masukkan nama sesuai KTP'}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data?.name}
                />
              </Box>
              <Box>
                <Text>Email</Text>
                <Input
                  _placeholder={{ color: 'gray.100' }}
                  placeholder={'Masukkan email'}
                  type={'email'}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data?.email}
                />
              </Box>
              <Box>
                <Text>Nomor Telepon (WA)</Text>
                <InputGroup>
                  <InputLeftAddon >
                    +62
                  </InputLeftAddon>
                  <Input
                    bg={'white'}
                    color={'black'}
                    _placeholder={{ color: 'gray.100' }}
                    type={'tel'}
                    placeholder={'Masukkan nomor telepon'}
                    onChange={handlePhone}
                    value={data?.phoneNumber}
                  />
                </InputGroup>
              </Box>
              <Box>
                <Text>Kota</Text>
                <Input
                  _placeholder={{ color: 'gray.100' }}
                  placeholder={'Ketik nama kota'}
                  type={'text'}
                  onChange={(e) => setData({ ...data, city: e.target.value })}
                  value={data?.city}
                />
              </Box>
              <Box>
                <Text>Alamat</Text>
                <Textarea
                  _placeholder={{ color: 'gray.100' }}
                  placeholder={'Alamat lengkap'}
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                  value={data?.address}
                />
              </Box>
            </Stack>
          </Stack>
          <Flex justifyContent={'flex-end'} mt={10}>
            <HStack>
              <Button onClick={() => setIndex((prev) => prev - 1)}>
                {'<'}- Kembali
              </Button>
              <Button onClick={validate}>
                Lanjut -{'>'}
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Fade>
    </>
  );
};

export default ProfileComponent;
