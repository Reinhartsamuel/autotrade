import { Center, Container, Heading, Stack } from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore/lite";
import React from "react";
import { db } from "../config/firebase";

const page = async () => {
  return (
    <Stack w={"100vw"} minH={"100vh"}>
      <Container maxW={"5xl"}>
        <Heading>Events</Heading>
        <Center w={"full"}>
          
      
        </Center>
      </Container>
    </Stack>
  );
};

export default page;
