import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  typography: {
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    h1: {
      fontFamily: 'Manrope',
      fontSize: 32,
      fontWeight: 800,
      lineHeight: '44px',
      letterSpacing: 'normal',
    },
    h2: {
      fontFamily: 'Manrope',
      fontSize: 32,
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h3: {
      fontFamily: 'Manrope',
      fontSize: 24,
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h4: {
      fontFamily: 'Manrope',
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h5: {
      fontFamily: 'Manrope',
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h6: {
      fontFamily: 'Manrope',
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: -0.27,
    },
    subtitle1: {
      fontFamily: 'Manrope',
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    subtitle2: {
      fontFamily: 'Manrope',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.33,
      letterSpacing: 'normal',
    },
    body1: {
      fontFamily: 'Manrope',
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.63,
      letterSpacing: 'normal',
    },
    body2: {
      fontFamily: 'Manrope',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.63,
      letterSpacing: 'normal',
    },
    button: {
      fontFamily: 'Manrope',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 2,
      letterSpacing: 'normal',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 13,
          fontWeight: 'bold',
          paddingLeft: '20px',
          paddingRight: '20px',
          borderRadius: '4px',
          textTransform: 'unset',
          transition: 'none',
          '&:hover': {
            transition: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

export default muiTheme;
