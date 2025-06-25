// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `'Monoton', cursive`,  // For headings
        body: `'Cinzel Decorative', cursive`,     // For all body text
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
});

export default theme;
