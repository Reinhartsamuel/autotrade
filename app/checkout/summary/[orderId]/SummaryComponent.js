"use client";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const SummaryComponent = () => {
    const [loading, setLoading] = useState(false);

    const handleTransfer = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/payment', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json',
                },
                body  : JSON.stringify({})
            });
            const result = await res.json();
            if (result?.data?.redirect_url) {
                window.open(result?.data?.redirect_url, '_blank')
            }
            console.log(result);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }
  return (
    <Box p={10} borderRadius={"md"} borderWidth={1}>
      <Stack direction={"column"} alignItems={"center"}>
        <Heading size={"md"}>Order Summary #1231231</Heading>
        <Text>Plan Sniper</Text>
        <Text>Rp 150,000</Text>
        <Stack direction={["column", "row"]}>
          <Button isDisabled={loading} isLoading={loading} size={"sm"} colorScheme={"blue"} onClick={handleTransfer}>
            Transfer
          </Button>
          <Button size={"sm"} colorScheme={"green"}>
            Credit Card (Visa / Mastercard) / Gopay
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SummaryComponent;
