"use client";
import {
  Box,
  Button,
  HStack,
  Heading,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { authFirebase } from "../config/firebase";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const router = useRouter();
  const [user, setUser] = useState(authFirebase.currentUser);
  const handleLogout = async () => {
    try {
      await authFirebase.signOut();
      router.push('/')
    } catch (error) {
      console.error(error.message, 'error signout');
    }
  };

  useEffect(() => {
    const unsubscribe = authFirebase.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () =>  unsubscribe()
  }, [])



  return (
    <>
      <Box
        shadow={"lg"}
        w={"100%"}
        bgGradient='linear(to-r, blue.800,purple.400)'
        zIndex={2}
        height={70}
        p={5}
        // position={["relative", "relative", "fixed"]}
        position={"fixed"}
        top={0}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {/* <Image alt='logo' src={'/algotraderlogo.png'} width={200} height={30} />  */}
        <Heading size={"md"} color={useColorModeValue("black", "white")}>
          byScript login : {user ? 'loggedin' : 'loggedout'}
        </Heading>
        <HStack>
          <Switch onChange={toggleColorMode} />

          {user ? (
            <Button size={"sm"} onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button size={"sm"} onClick={() => router.push("/auth/login")}>
              Login
            </Button>
          )}
        </HStack>
      </Box>
    </>
  );
};

export default Navbar;
