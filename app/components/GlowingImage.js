// src/GlowingImage.js
import { Image } from '@chakra-ui/react';
import styled from 'styled-components';
const GlowingImageRoot = styled.div`
  position: relative;
  border-radius: 0.6rem;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background:${({ bg }) => `${bg ||'linear-gradient(0deg, transparent, yellow)'}`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    border-radius: inherit;
    /* You can change these values until it looks fine to you */
    filter: blur(3rem) saturate(3);
  }
  > img {
    width: 110%;
    object-fit: cover;
    border-radius: inherit;
    transform: scale(0.98);
  }
`;
function GlowingImage({ src, alt, bg, width }) {
  return (
    <GlowingImageRoot src={src} bg={bg}>
      <Image w={width} src={src} alt={alt} border={'2px'} borderColor={'gray.600'}/>
    </GlowingImageRoot>
  );
}
export default GlowingImage;