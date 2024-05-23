import { Center, Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import OrdersComponent from './OrdersComponent';

const page = () => {
  return (
    <>
      <Stack w={"100vw"} minH={"100vh"}>
      <Container maxW={'5xl'}>
        <Heading>Orders</Heading>
          <OrdersComponent />
      </Container>
      </Stack>
    </>
  );
};

export default page;
