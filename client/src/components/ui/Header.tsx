import React, { useContext } from 'react';
import { Flex, Text, Box, HStack, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import ModeSwitcher from './ModeSwitcher';
// import AppModal from './AppModal';

type LinkProps = {
  link: { name: string; path: string };
};

const Links = [
  { name: 'Главная', path: '/' },
  { name: 'Начать Свою Игру', path: '/mygame' },
];

function Link({ link }: LinkProps): JSX.Element {
  return (
    <Box
      as={NavLink}
      px={2}
      py={1}
      to={link.path}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: 'gray.200',
      }}
    >
      {link.name}
    </Box>
  );
}

export default function Header(): JSX.Element {
  /*  const { itemsAndCategories, submitHandler } = useItems(); */
  // const restaurauntsAndComments = useContext(RestaurauntContext);
  return (
    <Flex
      mt={3}
      mb={3}
      as="header"
      align="center"
      justify="space-between"
      padding="1.5rem"
      bg="#95CCFC"
      color="brand.header"
      boxShadow="md"
      borderRadius="md"
    >
      <Text fontSize="xl" fontWeight="bold">
        <Image src={'./logo.png'} width="250px" alt="logo" />
      </Text>
      <Box>
        <HStack>
          {Links.map((link) => (
            <Link key={link.name} link={link} fontSize="lg" mr={6} />
          ))}
          {/* <Button variant="outline">Вход</Button>
        <Button m={3}>Регистрация</Button>
          <AppModal buttonName="Добавить">
            <RestaurauntForm />
          </AppModal> */}
          <ModeSwitcher />
        </HStack>
      </Box>
    </Flex>
  );
}
