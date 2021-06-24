import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import NProgress from 'nprogress';
import Router from 'next/router';

import AppProvider from '@/hooks';
import { theme } from '../styles/theme';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
          <Component {...pageProps} />
          <ToastContainer autoClose={3000} />
      </AppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
