import { InferRequestType } from 'hono';

import { fetcher, RPC } from '@/lib/hono';

import { ApiResponse } from '@/app/api/helpers/response';

const $post = RPC['api'].auth['verify-password'].$post;

export type UseVerifyPasswordArgs = InferRequestType<typeof $post>;

export const verifyPassword = (password: string) => {
  return fetcher<ApiResponse<any>, UseVerifyPasswordArgs>($post, {
    json: { password },
  });
};
