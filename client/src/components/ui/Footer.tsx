import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export default function Footer(): JSX.Element {
  return (
    <Flex
      mt={3}
      as="footer"
      align="center"
      justify="center"
      padding="1rem"
      bg="#95CCFC"
      color="white"
      boxShadow="md"
      borderRadius=" md"
    >
      <Text>© {new Date().getFullYear()} Своя Игра. Все права защищены.</Text>
    </Flex>
  );
}
