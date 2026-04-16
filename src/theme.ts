import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF4F",
      dark: "#388E3B",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#263238",
    },
    info: {
      main: "#2194f3",
    },
    warning: {
      main: "#FBC02D",
    },
    error: {
      main: "#E53835",
    },
    success: {
      main: "#2E7D31",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: "4rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      lineHeight: 1.1,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          textTransform: "none",
          fontWeight: 500,
          padding: "14px 32px",
          transition: "all 0.3s ease",
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width: 1440px)": {
            marginLeft: "144px",
            marginRight: "144px",
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
