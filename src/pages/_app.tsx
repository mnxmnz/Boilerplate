import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import initMockAPI from '@/mocks';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';

const queryClient = new QueryClient();

initMockAPI();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My own boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
