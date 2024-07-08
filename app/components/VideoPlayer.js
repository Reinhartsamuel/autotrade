'use client'
import { AspectRatio } from '@chakra-ui/react'
import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({url}) => {
//   return  <ReactPlayer url={url} />
    return <AspectRatio  w="100%" ratio={16 / 9}><video src={url} type='video/mp4' controls /></AspectRatio>
}

export default VideoPlayer