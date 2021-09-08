import React from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ModeProvider } from '@contexts/heroMode';

function App({ Component, pageProps }: AppProps) {
  return (
    <ModeProvider>
      <Component {...pageProps} />
    </ModeProvider>
  );
}
export default App;
