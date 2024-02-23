import { Container } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './ui/Header';
import Footer from './ui/Footer';

export default function Root(): JSX.Element {
  return (
    <Container maxW="container.xl">
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
