import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/services/queryClient';
import AppProvider from '@/hooks';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </AppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
