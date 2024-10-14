import { Hono } from 'hono';
import { handle } from 'hono/vercel';

import { GithubRepo } from '@/types/github';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.get('/repos', async (c) => {
  try {
    const response = await fetch(
      'https://api.github.com/users/chauduong1192/repos',
    );

    if (!response.ok) {
      return c.json({ error: 'Failed to fetch data from GitHub' }, 500);
    }

    const data: GithubRepo = await response.json();

    return c.json(data);
  } catch (error) {
    return c.json(
      { error: 'Error fetching data: ' + (error as Error).message },
      500,
    );
  }
});

export const GET = handle(app);
