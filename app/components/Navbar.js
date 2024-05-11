'use client'
import { Box, Button, HStack, Heading, Switch, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const { toggleColorMode } = useColorMode();
    const router = useRouter()
  return (
    <>
        <Box shadow={'md'} w={'100%'} height={70} p={5} position={['relative','fixed']} top={0} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            {/* <Image alt='logo' src={'/algotraderlogo.png'} width={200} height={30} />  */}
            <Heading size={'md'} color={useColorModeValue('black', 'white')}>AlgoTraders</Heading>
            <HStack>
                <Switch onChange={toggleColorMode}/>
                <Button size={'sm'} onClick={() => router.push('/auth/login')}>
                    Login
                </Button>
            </HStack>
        </Box>
    </>
  )
}

export default Navbar