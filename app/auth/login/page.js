'use client'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authFirebase, db } from '../../config/firebase'
import { doc, setDoc } from 'firebase/firestore/lite';

const provider = new GoogleAuthProvider();

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const handleLoginGoogle = async () => {
    signInWithPopup(authFirebase, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // navigate("/employee/dashboard");
        setDoc(doc(db, "users", user.uid), {
          name: user?.displayName || "",
          lastLogin : new Date(),
          email : user?.email || "",
          photoUrl : user?.photoURL || "",
          token,
          country: "Indonesia"
        });
        toast({status  : 'success', title : `Selamat datang, ${user?.displayName || user?.email}`, duration : 3000, isClosable : true})
        router.push('/')

        if (user) {
          setUserCredential(user);
          localStorage.setItem("userGoogleCredential", JSON.stringify(user));
        }
        
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    // signInWithRedirect(authFirebase, provider);
    // try {
    //   const uploadedData = await setDoc(
    //     doc(db, "users", userCredential.uid),
    //     {
    //       name: userCredential.displayName,
    //       email: userCredential.email,
    //       uid_user: userCredential.uid,
    //       role: "employee",
    //       enrollmentDate: moment().format("MMMM Do YYYY, h:mm:ss a"),
    //       createdAt: new Date(),
    //     },
    //     { merge: true }
    //   );
    // } catch (error) {
    //   console.log(error.message);
    // }
  };
  
  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
              <Button onClick={handleLoginGoogle}>Continue With Google</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}