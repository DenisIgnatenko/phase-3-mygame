import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import '@fontsource/open-sans';
import '@fontsource/roboto';
import { createRoutesFromChildren } from 'react-router-dom';

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#141214')(props),
    },
  }),
};

const components = {
  Drawer: {
    baseStyle: (props) => ({
      dialog: {
        bg: mode('white', '#C3E0E9')(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
});

export default theme;
