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
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { authFirebase } from "../config/firebase";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavbarChakra() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const [user, setUser] = useState(authFirebase.currentUser);
  const router = useRouter()
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
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Heading size={"md"} color={useColorModeValue("black", "white")}>
              byScript login :{" "}
              {user ? "loggedin" : "loggedout"}
            </Heading>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
          {user ? (
            <Button size={"sm"} onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button size={"sm"} onClick={() => router.push("/auth/login")}>
              Login
            </Button>
          )}
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={user?.photoURL}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
