import { InferRequestType } from 'hono';

import { fetcher, RPC } from '@/lib/hono';

const $get = RPC['api'].github['commits-with-branch'].$get;

export type UseGithubArgs = InferRequestType<typeof $get>;

export const getCommitsByBranch = ({
  full_name,
  sha,
  until,
}: {
  full_name: string;
  sha: string;
  until: string;
}) => {
  return fetcher<string, UseGithubArgs>($get, {
    query: { full_name, sha, until },
  });
};
