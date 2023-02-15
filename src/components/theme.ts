import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#111010",
    },
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#fff",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            fontSize: "1rem",
            textTransform: "capitalize",
            fontWeight: 400,
            color: "rgba(232,232,233, 0.5)",
            marginRight: "1rem",
            "&:hover": {
              color: "rgba(232,232,233, 0.8)",
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#0b85c9",
          marginX: "0.5rem",
          background: "inherit",
          color: "rgba(232,232,233, 0.5)",
          "&:hover": {
            color: "rgba(232,232,233, 0.8)",
            scale: 1.3,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "rgba(232,232,233, 0.4)",
          fontWeight: 300,
          fontSize: "0.75rem",
        },
      },
    },
  },
});

export default theme;
