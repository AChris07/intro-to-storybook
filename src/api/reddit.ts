import axios from 'axios';
import {
  RedditListingResponseInterface,
  RedditListingDataInterface,
} from '../types/posts';

const getAuthToken = async (): Promise<string> => {
  const { data } = await axios.get('/api/reddit/auth');
  return data.accessToken;
};

export async function getTopPosts(
  offset: number = 0,
  nextToken?: string
): Promise<RedditListingDataInterface> {
  const accessToken = await getAuthToken();
  const { data } = await axios.get<RedditListingResponseInterface>(
    `https://oauth.reddit.com/top?count=${offset}`,
    {
      params: { count: offset, after: nextToken },
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  return data.data;
}
