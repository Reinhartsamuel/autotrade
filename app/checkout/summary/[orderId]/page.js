import { Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SummaryComponent from './SummaryComponent'

const page = async () => {
  return (
    <>
      <Stack
        w={"100vw"}
        minH={['80vh','100vh']}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <SummaryComponent />
      </Stack>
    </>
  );
};

export default page;
