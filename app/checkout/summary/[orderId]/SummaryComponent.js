'use client';
import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useToast,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Center,
  HStack,
  Spinner,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { authFirebase, db } from '../../../config/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { priceFormat } from '../../../utils/priceFormat';
import { FaRegCopy } from 'react-icons/fa';
import Compressor from 'compressorjs';
import { uploadFileFirebase } from '../../../utils/uploadFileFirebase';
import { useRouter } from 'next/navigation';

const SummaryComponent = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState({});
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState({});
  const [imageUrl, setImageUrl] = useState('');
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const router = useRouter();

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        status: 'success',
        title: `${type} berhasil disalin`,
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleTransfer = async () => {
    if (orderData?.paymentLink)
      return window.open(orderData?.paymentLink, '_blank');
    setLoading(true);
    try {
      const res = await fetch('/api/payment', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: params.orderId,
          amount: orderData?.amount || orderData?.product?.price,
          first_name: orderData?.name?.includes(' ')
            ? orderData?.name?.split(' ')[0]
            : orderData?.name,
          last_name: orderData?.name?.includes(' ')
            ? orderData?.name?.split(' ')[1]
            : '-',
          email: orderData?.email || '',
          phone:
            orderData?.phone || authFirebase.currentUser?.phoneNumber || '-',
        }),
      });
      const result = await res.json();
      if (result?.data?.redirect_url) {
        window.open(result?.data?.redirect_url, '_blank');
        await setDoc(
          doc(db, 'orders', params.orderId),
          {
            paymentLink: result?.data?.redirect_url,
          },
          { merge: true }
        );
        getOrderData();
      } else {
        toast({
          status: 'error',
          description: JSON.stringify(result.data),
        });
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
      const docSnap = await getDoc(doc(db, 'orders', params.orderId));
      setOrderData({ id: docSnap.id, ...docSnap.data() });
    } catch (error) {
      console.log(error.message, 'error getting order data');
    }
  };

  const handleSelectFile = async (file) => {
    setLoading(true)
    new Compressor(file, {
      quality: 0.2,
      success(result) {
        setFile(result);
        handleUpload(result)
      },
      error(err) {
        console.log(err.message);
        setLoading(false)
      },
    });
  };

  const handleUpload = async (compressedImg) => {
    try {
      await uploadFileFirebase(compressedImg, setProgress, setImageUrl);
    } catch (error) {
      console.error(error.message);
      toast({
        status: 'error',
        title: error.message,
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    } finally {
      setLoading(false)
    }
  };

  const handleUpdateOrder = async () => {
    try {
      await updateDoc(doc(db, 'orders', params.orderId), { transferReceipt: imageUrl, paymentStatus:'WAITING FOR CONFIRMATION' });
      toast({status : 'success', description : 'Bukti bayar berhasil diupload', title : 'Sukses',isClosable:true, duration : 2000, position : 'top'})
      onClose()
      router.push('/orders')
    } catch (error) {
      toast({status : 'error', description : error.message, duration : 2000, isClosable : true, position : 'top'})
    }
  }

  useEffect(() => {
    getOrderData();
    return () => setOrderData({});
  }, []);
  return (
    <Box p={10} borderRadius={'md'} borderWidth={1} m={5}>
      <Stack direction={'column'} alignItems={'center'}>
        <Heading size={'md'} textAlign={'center'}>
          Terima kasih sudah mengorder {orderData?.product?.name}
        </Heading>
        <Text>Order ID #{params?.orderId}</Text>

        <Box
          mt={10}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          flexDirection={'column'}
        >
          <VStack my={5} gap={2}>
            <Text textAlign={'center'}>
              Untuk menyelesaikan proses order, silakan transfer sejumlah{' '}
            </Text>
            <Heading size={'md'}>
              Rp {priceFormat(orderData?.product?.price)}
            </Heading>
          </VStack>
          <Button
            variant={'outline'}
            onClick={() => handleCopy(orderData?.product?.price, 'Jumlah')}
          >
            <FaRegCopy mx={2} />
            Salin Jumlah
          </Button>
        </Box>

        <Box
          mt={10}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          flexDirection={'column'}
        >
          <Text>Ke rekening di bawah ini:</Text>
          <VStack gap={2} my={5}>
            <Image
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png'
              }
              w={100}
              alt={'bca'}
            />
            <Heading size={'md'}>BCA Digital Edwin Fathudin A</Heading>
            <Heading size={'md'}>0900 - 0000 - 0080</Heading>
            <Button
              variant={'outline'}
              onClick={() => handleCopy('090000000080', 'Nomor rekening')}
            >
              <FaRegCopy mx={2} />
              Salin Nomor Rekening
            </Button>
          </VStack>
        </Box>
        <Stack direction={['column', 'row']}>
          <Button
            isDisabled={loading}
            isLoading={loading}
            size={'sm'}
            colorScheme={'blue'}
            onClick={onOpen}
          >
            Upload Bukti Transfer
          </Button>
          {/* <Button size={"sm"} colorScheme={"green"}>
            Credit Card (Visa / Mastercard) / Gopay
          </Button> */}
        </Stack>
      </Stack>
      <Drawer
        size={'full'}
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>Upload Bukti Transfer</Center>
          </DrawerHeader>

          <DrawerBody>
            <Center>
              <VStack maxW={{ base: 'full', lg: '50%' }}>
                <Input
                  type={'file'}
                  onChange={(e) => handleSelectFile(e.target.files[0])}
                />
                {loading && <HStack gap={2} alignItems={'center'}>
                  <Spinner color={'orange'} />
                  <Text>Sedang mengupload bukti transfer...</Text>
                </HStack>}
                {imageUrl && <Image src={imageUrl} alt={'uploaded'} w={{base : 'full', lg:'50%'}} />}
              </VStack>
            </Center>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={() => {setLoading(false); onClose(); setImageUrl('')}}>
              Batal
            </Button>
            <Button colorScheme='blue' onClick={handleUpdateOrder}>
              Simpan
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SummaryComponent;
