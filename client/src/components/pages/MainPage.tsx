// MainPage.jsx
import React from 'react';
import { Flex, Text, Box, HStack, Container } from '@chakra-ui/react';
import VideoWithLogo from '../ui/VideoWithLogo';

export default function MainPage() {
  return (
    <Container maxW="100%">
      <VideoWithLogo />
    </Container>
  );
}
