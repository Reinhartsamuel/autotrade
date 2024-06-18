'use client';
import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Spinner,
  HStack,
  Divider,
  Input,
  Center,
  Checkbox,
  Link,
  Image,
} from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authFirebase, db } from '../../config/firebase';
import { FcGoogle } from 'react-icons/fc';
import {
  getCollectionFirebase,
  setDocumentFirebase,
} from '../../utils/firebaseApi';

const provider = new GoogleAuthProvider();

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const handleLoginGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(authFirebase, provider);
      // console.log(result, 'result');
      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // console.log(token, 'token');
      // console.log('fetching user with email ', result?.user?.email);
      const findUser = await getCollectionFirebase('users', [
        { field: 'email', operator: '==', value: result?.user?.email },
      ]);
      const isNewUser = findUser.length === 0;
      console.log(isNewUser, 'isNewUser');
      console.log(findUser, 'findUser');

      try {
        const dataNew = {
          name: user?.displayName || '',
          lastLogin: new Date(),
          email: user?.email || '',
          photoUrl: user?.photoURL || '',
          token,
          country: 'Indonesia',
        };
        if (isNewUser) dataNew.createdAt = new Date();
        console.log(dataNew, 'dataNew');
        await setDocumentFirebase('users', user.uid, dataNew);
      } catch (error) {
        console.log(error.message, 'error setdoc users');
      }

      try {
        fetch(isNewUser ? '/api/email/login/new-user' : '/api/email/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: user?.displayName || user?.email || '',
            email: user?.email,
          }),
        });
      } catch (error) {
        console.log(error.message, 'error send emailemail');
      }

      if (isNewUser) {
        router.push('/onboarding');
      } else {
        router.push('/subscriptions');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        w={'50%'}
        display={{ base: 'none', lg: 'inherit' }}
        borderRightRadius={'xl'}
        bgGradient={'linear(55deg, black, blue, lightblue, white)'}
        h={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          overflow={'hidden'}
          borderRadius={10}
          transition='transform 0.2s'
          _hover={{ transform: 'scale(1.1)' }}
          width={200}
        >
          <Image
            // width={100}
            alt={'byscript'}
            src={
              'https://i.ibb.co.com/RB9rQy3/Whats-App-Image-2024-05-19-at-16-02-06.jpg'
            }
          />
        </Box>
      </Stack>
      {!loading ? (
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Buat akun byScript</Heading>
            <Text fontSize={'lg'} color={'gray.500'} textAlign={'center'}>
              Jika kamu sudah punya <i>subscription</i> byScript, pastikan login
              dengan email yang sama
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <Stack spacing={10}>
                <Button
                  isLoading={loading}
                  onClick={handleLoginGoogle}
                  variant={'outline'}
                >
                  <Box mx={2}>
                    <FcGoogle size={20} />
                  </Box>
                  Continue with Google
                </Button>
                <HStack>
                  <Divider />
                  <Text>atau</Text>
                  <Divider />
                </HStack>

                <Stack alignItems={'center'}>
                  <Text color={'gray.400'}>Login dengan email</Text>
                  <Input placeholder={'email'} type={'email'} />
                  <Input placeholder={'password'} type={'password'} />
                  <HStack>
                    <Checkbox />
                    <Text fontSize={12} color={'gray.400'}>
                      I have read and agreed to terms and conditions.
                    </Text>
                  </HStack>
                  <Button
                    bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    _active={{
                      bgGradient: 'linear(to-r,#8C52FF,#031B4B)',
                    }}
                    w={'full'}
                    variant={'ghost'}
                  >
                    Login
                  </Button>
                  <Flex justifyContent={'flex-start'}>
                    <Text color={'gray.400'}>Belum punya akun?</Text>
                    <Link>
                      <Text ml={1} as={'span'} color={'blue.400'}>
                        Buat akun
                      </Text>
                    </Link>
                  </Flex>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      ) : (
        <Stack
          dir={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          w={'full'}
        >
          <Text>Loading...</Text>
          <Spinner />
        </Stack>
      )}
    </Flex>
  );
}
