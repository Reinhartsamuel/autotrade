import { Box, Spinner } from '@chakra-ui/react';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <Box><Spinner colorScheme='blue'/></Box>
  }