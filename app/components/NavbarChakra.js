"use client";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { authFirebase } from "../config/firebase";

const Links = [
  { name: "Home", link: "/" },
  { name: "Pricing", link: "#pricing" },
  { name: "Events", link: "event" },
  { name: "Subscription", link: "subscription" },
  { name: "Akademi", link: "academy" },
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children?.link}
  >
    {children?.name}
  </Link>
);

export default function NavbarChakra() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState(authFirebase.currentUser);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authFirebase.signOut();
      router.push("/");
    } catch (error) {
      console.error(error.message, "error signout");
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
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Box position={'fixed'} w={'full'} zIndex={2} id='scroller'>
        <Flex zIndex={2} h={16} alignItems={"center"} justifyContent={"space-between"} position={'relative'}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              bg='red'
              overflow={"hidden"}
              borderRadius={10}
              transition='transform 0.2s'
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image
                width={35}
                alt={"byscript"}
                src={
                  "https://i.ibb.co.com/RB9rQy3/Whats-App-Image-2024-05-19-at-16-02-06.jpg"
                }
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, i) => (
                <NavLink key={i}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {user ? (
              <>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar size={"sm"} src={user?.photoURL} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <a href={"/orders"}>Orders</a>
                    </MenuItem>
                    <MenuItem>Payments</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout} fontWeight={"bold"}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <Button onClick={() => router.push("/auth/login")}  bgGradient={"linear(to-l,#8C52FF,#031B4B)"} _active={{
                bg: "blue.700",
              }}>
                Login
              </Button>
            )}
          </Flex>
          <Box w={'full'} h={16} position={'absolute'} style={{backdropFilter: 'blur(5px)'}} zIndex={-1}></Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, i) => (
                <NavLink key={i}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
