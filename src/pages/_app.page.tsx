import "../styles/globals.css";
import { useEffect } from "react";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
// import { theme } from "@src/constants";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={{}}>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default MyApp;
