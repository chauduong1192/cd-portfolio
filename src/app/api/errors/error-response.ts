import { Context } from 'hono';
import { StatusCode } from 'hono/utils/http-status';

import { Env } from '@/app/api/configs/env';
import { formatResponse } from '@/app/api/helpers/response';

export interface ErrorResponse<T extends Error> {
  message: string;
  error: T;
  code?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: Record<string, any>;
}

/**
 * Builds an error response object.
 * @param c - The context object.
 * @param statusCode - The HTTP status code.
 * @param errorResponse - The error response object containing error details.
 * @returns The formatted error response.
 */
export const buildErrorResponse = <T extends Error>(
  c: Context,
  statusCode: StatusCode,
  { error, message, code, meta }: ErrorResponse<T>,
) => {
  return formatResponse(c, statusCode, {
    message,
    error: {
      code,
      title: error.name,
      detail: error.message,
      meta: {
        ...meta,
        cause: Env.isDevelopment() ? error.cause : undefined,
        stack: Env.isDevelopment() ? error.stack : undefined,
      },
    },
  });
};
