import type { ReactElement } from 'react';
import Head from 'next/head';

import BasicLayout from 'src/layouts/Basic';
import { NextPageWithLayout } from 'src/types/pages';

const Home: NextPageWithLayout = () => {
  return (
    <main>
      <h1>Content</h1>
    </main>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      <Head>
        <title>Welcome to Storybook!</title>
      </Head>
      {page}
    </BasicLayout>
  );
};

export default Home;
