import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

export default function ModeSwitcher(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon boxSize={6} /> : <SunIcon boxSize={6} />}
    </Button>
  );
}
