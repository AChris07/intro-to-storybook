import type { ReactElement } from 'react';
import { useEffect } from 'react';
import Head from 'next/head';

import BasicLayout from 'src/layouts/Basic';
import { NextPageWithLayout } from 'src/types/pages';
import IconButton from '../components/IconButton';
import PostDetails from '../components/PostDetails';
import PostList from 'src/components/PostList';
import {
  AppContainer,
  AppHeader,
  AppBody,
  AppListColumn,
  AppDetailSection,
} from '../styles/reddit';
import {
  PostProvider,
  dismissAll,
  dismissPost,
  fetchInitialPosts,
  fetchTopPosts,
  getPostSelected,
  getPosts,
  selectPost,
  usePostContext,
} from 'src/contexts/reddit';

const Reddit: NextPageWithLayout = () => {
  const { state, dispatch } = usePostContext();
  const { offset, nextToken, status } = state;

  const selected = getPostSelected(state);
  const posts = getPosts(state);

  const fetchInitialPostsDispatch = fetchInitialPosts(dispatch);
  const fetchTopPostsDispatch = fetchTopPosts(dispatch);

  useEffect(() => {
    if (!posts.length) {
      fetchInitialPostsDispatch();
    }
  }, []);

  return (
    <AppContainer>
      <AppHeader>
        <h1>Reddit App</h1>
        <IconButton icon="fa-redo" />
      </AppHeader>
      <AppBody className="columns is-desktop">
        <AppDetailSection className="column">
          <PostDetails post={selected} />
        </AppDetailSection>
        <AppListColumn className="column is-one-third">
          <PostList
            status={status}
            posts={posts}
            onSelect={(id: string) => dispatch(selectPost(id))}
            onPaginate={() => fetchTopPostsDispatch({ offset, nextToken })}
            onDismiss={(id: string) => dispatch(dismissPost(id))}
            onDismissAll={() => dispatch(dismissAll())}
          />
        </AppListColumn>
      </AppBody>
    </AppContainer>
  );
};

Reddit.getLayout = function getLayout(page: ReactElement) {
  return (
    <PostProvider>
      <BasicLayout>
        <Head>
          <title>Reddit Demo</title>
        </Head>
        {page}
      </BasicLayout>
    </PostProvider>
  );
};

export default Reddit;
