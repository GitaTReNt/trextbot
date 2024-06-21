import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appWithTranslation } from 'next-i18next';
import type { AppProps, AppType } from 'next/app';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <Component {...(pageProps as any)} />
      </QueryClientProvider>
    </div>
  );
}

export default appWithTranslation(App);

