import { Center, Container, Heading, Stack } from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore/lite";
import React from "react";
import { db } from "../config/firebase";

const getData = async () => {
  try {
    const q = query(collection(db, "orders"));
    const res = await getDocs(q);
    res.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });
    return arr;
  } catch (error) {
    throw new Error(error)
  }
};

export const revalidate = 3600;
const page = async () => {
  const data = await getData();
  return (
    <Stack w={"100vw"} minH={"100vh"}>
      <Container maxW={"5xl"}>
        <Heading>Events</Heading>
        <Center w={"full"}>
          {data?.map((x, i) => (
            <pre key={i}>{JSON.stringify(x, null, 2)}</pre>
          ))}
        </Center>
      </Container>
    </Stack>
  );
};

export default page;
