import { Hono } from 'hono';
import { StatusCodes } from 'http-status-codes';

import { Env } from '@/app/api/configs/env';
import { formatResponse } from '@/app/api/helpers/response';

const { GENERATE_PASSWORD } = Env;
const unlockPassword = GENERATE_PASSWORD;

const verifyPassword = new Hono().post('/verify-password', async (c) => {
  const { password } = await c.req.json();
  const isMatch = password === unlockPassword;
  if (!isMatch) {
    return formatResponse(c, StatusCodes.BAD_REQUEST, {
      message: 'Password is incorrect',
    });
  }

  return formatResponse(c, StatusCodes.OK, {
    message: 'Verified',
  });
});

export { verifyPassword };
