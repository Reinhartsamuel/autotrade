"use client";
import { 
  Stack, 
  Text, 
  useToast, 
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
  Badge,
  Button, 
} from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { authFirebase, db } from "../config/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import moment from 'moment';

const OrdersComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const getOreders = async () => {
    setLoading(true);
    console.log(authFirebase.currentUser,'authFirebase.currentUser');
    try {
      let arr = [];
      const q = query(
        collection(db, "orders"),
        authFirebase?.currentUser ? where("uid", "==", authFirebase?.currentUser?.uid) : null
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setData(arr);
      console.log(arr);
    } catch (error) {
      toast({ status: "error", title: "Oops!", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleCheck = (row) => {
    
  };

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        getOreders();
      }
    })
    // getOreders();
  }, []);

  return (
    <>
      <Stack w={['full', '2xl', '5xl']}>
        <TableContainer>
          <Table variant='striped' colorScheme='gray' size={['sm','md']} fontSize={'sm'}>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Order ID</Th>
                <Th>Nama</Th>
                <Th>Harga</Th>
                <Th>Status Pembayaran</Th>
                <Th>Timestamp</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.length > 0 ? data?.map((row, i) => (
                <Tr key={i}>
                <Td>{i + 1}</Td>
                <Td>{row?.id}</Td>
                <Td>{row?.name}</Td>
                <Td>{row?.price || 'Rp 150,000'}</Td>
                <Td><Badge colorScheme={row?.paymentStatus === 'PAID' ? 'green' : 'red'}>{row?.paymentStatus}</Badge></Td>
                <Td>{moment.unix(row?.createdAt?.seconds).format('ddd, DD MMM YYYY HH:mm')}</Td>
                <Td><Button size={'sm'} variant={'outline'} onClick={() => handleCheck(row)}>Cek Status</Button></Td>
              </Tr>
              )) :
                <Center>Belum ada order</Center>
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
};

export default OrdersComponent;
