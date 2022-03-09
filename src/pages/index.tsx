import type { ReactElement } from 'react';
import Head from 'next/head';

import BasicLayout from 'src/layouts/Basic';
import HeroBanner from 'src/components/HeroBanner';
import ThumbnailList from 'src/components/ThumbnailList';
import { NextPageWithLayout } from 'src/types/pages';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeroBanner
        img="https://picsum.photos/id/271/2000/400"
        title="Intro to Storybook"
        height={400}
      />

      <main className="container mb-6">
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit
          blandit mauris, sed tincidunt mauris ornare vel. Suspendisse commodo, tortor
          quis dapibus dignissim, elit urna facilisis metus, non semper metus mi et risus.
          Nunc vitae scelerisque mauris, eget egestas nibh. Aliquam ultrices lacinia nibh
          id venenatis. Sed iaculis egestas rhoncus. Curabitur eget elementum ligula, nec
          ornare dolor. Pellentesque non massa mi. Vivamus aliquet enim vel mauris
          ullamcorper semper. Suspendisse quis metus id mauris tristique mattis a et ante.
          Morbi massa libero, congue nec elit ut, euismod fringilla magna. Suspendisse ac
          sodales leo. Integer id tellus justo.
        </p>

        <h1 className="is-size-3 mb-6 has-text-centered">List of Projects</h1>

        <ThumbnailList
          thumbnails={[
            {
              href: '/todo',
              img: 'https://picsum.photos/200/200',
              width: 200,
              height: 200,
              title: 'To-Do List',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              href: '/reddit',
              img: 'https://picsum.photos/200/200',
              width: 200,
              height: 200,
              title: 'Reddit Demo',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
          ]}
        />
      </main>
    </>
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
