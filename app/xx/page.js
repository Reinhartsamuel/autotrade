import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const page = () => {
  return (
    <>
      <Stack position={'relative'}>
      <Box bg={'black'} h={'100vh'} w={'100%'} pos={'fixed'} zIndex={-1}>
      </Box>
        <Stack minH={'100vh'} mt={16} position={'relative'}>
          <Box
            zIndex={-1}
            w={{ base: 300, md: 500, lg: 500 }}
            h={{ base: 100, md: 200, lg: 500 }}
            bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
            borderRadius={'full'}
            style={{ filter: 'blur(100px)' }}
            position={'absolute'}
            transform={'translateX(100%)'}
          ></Box>
          <Box
            zIndex={-1}
            w={{ base: 300, md: 500, lg: 800 }}
            h={{ base: 100, md: 200, lg: 800 }}
            bgGradient={'linear(to-l,#8C52FF,#031B4B)'}
            borderRadius={'full'}
            style={{ filter: 'blur(200px)' }}
            position={'absolute'}
            transform={'translateX(-70%)'}
          ></Box>
          <Stack w={'100%'} alignItems={'center'}>
            <Text>Raih financial freedom dengan emotionless trading</Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default page;
