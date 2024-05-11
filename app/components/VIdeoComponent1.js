'use client'
import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from "react";

const VIdeoComponent1 = () => {
    const width = useBreakpointValue({ base: "100%", md: "700" });
    const height = useBreakpointValue({ base: "", md: "394" });
  return (
    <>
      <Box objectFit={"cover"}>
        <iframe
          width={width}
          height={height}
          autoplay={1}
          mute={1}
          src='https://www.youtube.com/embed/mkTEEOSRmFA'
        ></iframe>
      </Box>
    </>
  );
};

export default VIdeoComponent1;
