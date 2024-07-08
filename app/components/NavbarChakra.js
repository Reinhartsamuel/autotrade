'use client';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  // Link,
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
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { authFirebase } from '../config/firebase';
import Link from 'next/link';

const Links = [
  { name: 'Home', link: '/' },
  { name: 'Pricing', link: '#pricing' },
  // { name: "Events", link: "/event" },
  { name: 'Subscription', link: '/subscriptions' },
  { name: 'Marketplace', link: '/marketplace' },
  { name: 'Affiliate', link: '/affiliate' },
];

const NavLink = ({ children }) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    <Link href={children?.link} replace>
      <Text fontWeight={'700'} spacing={2}>{children?.name}</Text>
    </Link>
  </Box>
);

export default function NavbarChakra() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState(authFirebase.currentUser);
  const [withoutNavbar, setWithoutNavbar] = useState(true);
  const router = useRouter();
  const params = useSearchParams();
  const referralId = params.get('ref');

  // console.log(paramsx, 'paramsx')

  const handleLogin = async () => {
    console.log(referralId);
    if (referralId) return router.push(`/auth/login?ref=${referralId}`);
    router.push('/auth/login');
  };
  const handleLogout = async () => {
    try {
      await authFirebase.signOut();
      router.push('/');
    } catch (error) {
      console.error(error.message, 'error signout');
    }
  };

  useEffect(() => {
    const x =
      window?.location.href.includes('auth') ||
      window?.location.href.includes('onboarding') ||
      window?.location.href.includes('checkout') ||
      window?.location.href.includes('new');
      console.log(x, 'without navbar useEffect')
    setWithoutNavbar(x);
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
      <Box
        position={'fixed'}
        w={'full'}
        zIndex={2}
        id='scroller'
        display={withoutNavbar ? 'none' : 'block'}
      >
        <Flex
          zIndex={2}
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          position={'relative'}
          px={5}
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box
              overflow={'hidden'}
              borderRadius={10}
              transition='transform 0.2s'
              _hover={{ transform: 'scale(1.2)' }}
            >
              <Image
                width={35}
                alt={'byscript'}
                src={
                  'https://i.ibb.co.com/RB9rQy3/Whats-App-Image-2024-05-19-at-16-02-06.jpg'
                }
              />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link, i) => (
                <NavLink key={i}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {user ? (
              <>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                  >
                    <Avatar size={'sm'} src={user?.photoURL} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <a href={'/orders'}>Orders</a>
                    </MenuItem>
                    <MenuItem>Payments</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout} fontWeight={'bold'}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <Button
                onClick={handleLogin}
                bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
                _active={{
                  bg: 'blue.700',
                }}
              >
                Login
              </Button>
            )}
          </Flex>
          <Box
            w={'full'}
            h={16}
            position={'absolute'}
            style={{ backdropFilter: 'blur(5px)' }}
            zIndex={-1}
          ></Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} bg='gray.800'>
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
