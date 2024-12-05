import { InferRequestType } from 'hono';

import { fetcher, RPC } from '@/lib/hono';

import { GithubRepo } from '@/types';

const $get = RPC['api'].github['repos-with-username'].$get;

export type UseGithubArgs = InferRequestType<typeof $get>;

export const getReposByUser = () => {
  return fetcher<GithubRepo[], UseGithubArgs>($get, {});
};
