import React from 'react'
import FeatureComponent from '../components/FeatureComponent';
import { Box, Stack } from '@chakra-ui/react';

const page = () => {
  return (
   <>
    <Stack w={'100vw'} minH={'100vh'}>

      <Box mt={20}>
        <FeatureComponent />
      </Box>
    </Stack>
   </>
  )
}

export default page