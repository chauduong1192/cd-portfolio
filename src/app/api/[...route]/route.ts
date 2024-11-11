import { Hono } from 'hono';
import { cache } from 'hono/cache';
import { handle } from 'hono/vercel';

import { GithubRepo } from '@/types';

const app = new Hono().basePath('/api');

const cacheMiddleware = cache({
  cacheName: 'my-repos',
  cacheControl: 'max-age=3600',
});

// @typescript-eslint/no-explicit-any
// Common function to fetch data and handle errors
async function fetchData<T>(fetchFn: () => Promise<T>, c: any) {
  try {
    const data = await fetchFn();
    return c.json(data);
  } catch (error) {
    return c.json(
      { error: 'Error fetching data: ' + (error as Error).message },
      500,
    );
  }
}

// Fetch GitHub repositories
app.get('/repos', (c) => {
  return fetchData(async () => {
    const response = await fetch(
      'https://api.github.com/users/chauduong1192/repos',
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from GitHub');
    }

    return response.json() as Promise<GithubRepo>;
  }, c);
});

if (typeof caches !== 'undefined') {
  app.use('/repos', cacheMiddleware);
}

export const GET = handle(app);
