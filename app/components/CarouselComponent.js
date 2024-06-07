'use client'
import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const defaultCards = [
  '/signal1.png',
  '/signal2.jpg',
  '/signal3.jpg',
  '/signal4.jpg',
]

export default function CarouselComponent({cards = defaultCards}) {
  const [slider, setSlider] = React.useState(null);

  // These are the images used in the slide
  return (
    <Box
      position={'relative'}
      height={{base:'200',xl:'600px'}}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'2xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}