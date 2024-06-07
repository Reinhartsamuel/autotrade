'use client'
import {
  Flex,
  Box,
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
import { useEffect, useState } from 'react';
import { authFirebase, db } from '../../config/firebase'
import { doc, setDoc } from 'firebase/firestore/lite';
import { FcGoogle } from 'react-icons/fc';

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
        router.push('/')
        try {
          fetch('/api/email/login',{
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body : JSON.stringify({
              name : user?.displayName || user?.email || '',
              email : user?.email
            })
          })
        } catch (error) {
          
        }
        const isNewUser = result.additionalUserInfo.isNewUser;
        const dataNew = {
          name: user?.displayName || "",
          lastLogin : new Date(),
          email : user?.email || "",
          photoUrl : user?.photoURL || "",
          token,
          country: "Indonesia"
        };
        if (isNewUser) dataNew.createdAt = new Date();
        setDoc(doc(db, "users", user.uid), dataNew);
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
          <Heading fontSize={'4xl'}>Buat akun byScript</Heading>
          <Text fontSize={'lg'} color={'gray.500'} textAlign={'center'}>
            Jika kamu sudah punya <i>subscription</i> byScript, pastikan login dengan email yang sama
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Stack spacing={10}>
              <Button isLoading={loading} onClick={handleLoginGoogle} variant={'outline'}>
                <Box mx={2}>
                  <FcGoogle size={20}/>
                </Box>
                Continue With Google
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}