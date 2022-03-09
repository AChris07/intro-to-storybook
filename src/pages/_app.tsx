import { Global, ThemeProvider } from '@emotion/react';

import { AppPropsWithLayout } from 'src/types/pages';
import globals from 'src/styles/globals';
import theme from 'src/styles/theme';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
