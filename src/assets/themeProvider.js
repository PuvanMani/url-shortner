
import LatoBold from '../assets/Fonts/lato/Lato-Bold.ttf';
import MontserratRegular from '../assets/Fonts/montserrat/Montserrat-Regular.ttf';
import { createTheme } from '@mui/material';

// Define a custom theme with the new font
const theme = createTheme({
    typography: {
        fontFamily: 'lato, Montserrat, sans-serif', // Use the name you'll reference later
    },
    // Other theme configurations...
});

export default theme;
