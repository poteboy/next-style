import '../styles/globals.css';
import { useEffect } from 'react';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import type { AppProps } from 'next/app';
import { theme } from '@src/styles';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default MyApp;
