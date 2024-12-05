import { InferRequestType } from 'hono';

import { fetcher, RPC } from '@/lib/hono';

import { GithubBranch } from '@/types';

const $get = RPC['api'].github.branches.$get;

export type UseGithubArgs = InferRequestType<typeof $get>;

export const getBranches = (full_name: string) => {
  return fetcher<GithubBranch[], UseGithubArgs>($get, { query: { full_name } });
};
