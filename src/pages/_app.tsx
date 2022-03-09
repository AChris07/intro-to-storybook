import { ThemeProvider } from '@emotion/react';

import { AppPropsWithLayout } from 'src/types/pages';
import theme from 'src/styles/theme';
import 'src/styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
  );
}

export default MyApp;
