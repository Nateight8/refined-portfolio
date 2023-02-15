import { MyGlobalContext } from "@/components/GlobalContext";
import theme from "@/components/theme";
import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import React, { useState, createContext } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [value, setValue] = useState<number>(0);

  return (
    <MyGlobalContext.Provider value={{ value, setValue }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </MyGlobalContext.Provider>
  );
}
