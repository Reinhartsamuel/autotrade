import { Box, Spinner } from '@chakra-ui/react';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <Box display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} h={'100vh'}><Spinner size={'xl'} colorScheme='blue'/></Box> // <Box display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} h={'100vh'}><Spinner colorScheme='blue'/></Box>
  }