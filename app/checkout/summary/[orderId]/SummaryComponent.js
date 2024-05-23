"use client";
import { Box, Button, Heading, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { authFirebase, db } from '../../../config/firebase';
import { doc, getDoc } from 'firebase/firestore/lite';

const SummaryComponent = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState({});
  const toast = useToast();


  const handleTransfer = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/payment", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: params.orderId,
          amount : 150000,
          first_name : orderData?.name?.includes(' ') ? orderData?.name?.split(' ')[0] : orderData?.name,
          last_name : orderData?.name?.includes(' ') ? orderData?.name?.split(' ')[1] : '-',
          email : orderData?.email || '',
          phone : orderData?.phone || authFirebase.currentUser?.phoneNumber || '-'
        }),
      });
      const result = await res.json();
      if (result?.data?.redirect_url) {
        window.open(result?.data?.redirect_url, "_blank");
      } else {
        toast({
          status : 'error',
          description: JSON.stringify(result.data)
        })
      }
      console.log(result);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getOrderData = async () => {
    try {
      const docSnap = await getDoc(doc(db, "orders", params.orderId));
      setOrderData({id:docSnap.id, ...docSnap.data()});
      console.log({id:docSnap.id, ...docSnap.data()}, 'order data');
    } catch (error) {
      console.log(error.message, 'error getting order data');
    }
  };
  useEffect(() => {
    getOrderData();
    return () => setOrderData({});
  }, []);
  return (
    <Box p={10} borderRadius={"md"} borderWidth={1}>
      <Stack direction={"column"} alignItems={"center"}>
        <Heading size={"md"}>Order Summary #1231231</Heading>
        <Text>Plan Sniper</Text>
        <Text>Rp 150,000</Text>
        <Stack direction={["column", "row"]}>
          <Button
            isDisabled={loading}
            isLoading={loading}
            size={"sm"}
            colorScheme={"blue"}
            onClick={handleTransfer}
          >
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
