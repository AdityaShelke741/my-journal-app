// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: 'inherit',
        body: 'inherit',
  },
    colors: {
        beige: {
        50: '#fdfaf4',
        100: '#f5eee4',
        200: '#eaddcf',
        300: '#decbb9',
        400: '#d4b9a4',
        500: '#ba9f8a',
        600: '#927c6b',
        700: '#6a5a4d',
        800: '#43362f',
        900: '#1d130e',
        },
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: 'md',
        textTransform: 'uppercase',
      },
      sizes: {
        md: {
          fontSize: 'md',
          px: 6,
          py: 4,
        },
      },
      variants: {
        solid: {
          bg: 'beige.500',
          color: 'white',
          _hover: {
            bg: 'beige.600',
          },
        },
        outline: {
          borderColor: 'beige.500',
          color: 'beige.500',
          _hover: {
            bg: 'beige.50',
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'solid',
      },
    },
  },
});

export default theme;
