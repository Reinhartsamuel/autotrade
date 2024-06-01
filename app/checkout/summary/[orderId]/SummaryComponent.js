"use client";
import { Box, Button, Heading, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { authFirebase, db } from '../../../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { priceFormat } from '../../../utils/priceFormat';
import { FaRegCopy } from 'react-icons/fa';

const SummaryComponent = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState({});
  const toast = useToast();


  const handleTransfer = async () => {
    if (orderData?.paymentLink) return window.open(orderData?.paymentLink, "_blank");
    setLoading(true);
    try {
      const res = await fetch("/api/payment", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: params.orderId,
          amount : orderData?.amount || orderData?.product?.price,
          first_name : orderData?.name?.includes(' ') ? orderData?.name?.split(' ')[0] : orderData?.name,
          last_name : orderData?.name?.includes(' ') ? orderData?.name?.split(' ')[1] : '-',
          email : orderData?.email || '',
          phone : orderData?.phone || authFirebase.currentUser?.phoneNumber || '-'
        }),
      });
      const result = await res.json();
      if (result?.data?.redirect_url) {
        window.open(result?.data?.redirect_url, "_blank");
        await setDoc(doc(db, "orders", params.orderId), {
          paymentLink : result?.data?.redirect_url
        },{merge : true});
        getOrderData();
      } else {
        toast({
          status : 'error',
          description: JSON.stringify(result.data)
        })
      }
      // console.log(result);
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
        <Heading size={"md"}>Terima kasih sudah mengorder {orderData?.product?.price}</Heading>
        <Text>Order ID #{params?.orderId}</Text>

        <Box my={20} justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
          <Text>Untuk menyelesaikan proses order, silakan transfer sejumlah </Text>
          <Heading size={'md'}>Rp {priceFormat(orderData?.product?.price)}</Heading>
          <Button variant={'outline'} my={10}><FaRegCopy mx={2}/>Salin Jumlah</Button>
        </Box>


        <Box my={10} justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
          <Text>Ke brekening bank di bawah ini:</Text>
          
        </Box>
        <Stack direction={["column", "row"]}>
          <Button
            isDisabled={loading}
            isLoading={loading}
            size={"sm"}
            colorScheme={"blue"}
            onClick={handleTransfer}
          >
            Selesaikan Pembayaran
          </Button>
          {/* <Button size={"sm"} colorScheme={"green"}>
            Credit Card (Visa / Mastercard) / Gopay
          </Button> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SummaryComponent;
