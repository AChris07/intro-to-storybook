import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  accessToken: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const params = new URLSearchParams();
  params.append('grant_type', 'password');
  params.append('username', process.env.REDDIT_USERNAME ?? '');
  params.append('password', process.env.REDDIT_PASSWORD ?? '');

  const { data } = await axios.post(
    'https://www.reddit.com/api/v1/access_token',
    params,
    {
      auth: {
        username: process.env.CLIENT_ID ?? '',
        password: process.env.CLIENT_SECRET ?? '',
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  res.status(200).json({ accessToken: data.access_token });
}
