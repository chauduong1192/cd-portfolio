import { Context } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { StatusCodes } from 'http-status-codes';

import { ErrorCodes } from '@/app/api/errors/error-codes';
import { buildErrorResponse } from '@/app/api/errors/error-response';
import { formatResponse } from '@/app/api/helpers/response';
import { logger } from '@/app/api/libs/logger';

/**
 * Handles errors and returns an appropriate response.
 * @param error - The error object.
 * @param c - The context object.
 * @returns The response object.
 */
export const errorHandlers = (error: unknown, c: Context) => {
  // If the error is not an instance of Error, return an internal server error response.
  if (!(error instanceof Error)) {
    return formatResponse(c, StatusCodes.INTERNAL_SERVER_ERROR, {
      message: 'An unexpected error occurred',
    });
  }

  logger.error(`An error occurred: ${error.message}`, { error });

  // If the error is an instance of HTTPException, return an error response based on its status.
  if (error instanceof HTTPException) {
    return buildErrorResponse<HTTPException>(c, error.status, {
      error,
      message: error.message,
    });
  }
  // Otherwise, return an internal server error response.
  return buildErrorResponse(c, StatusCodes.INTERNAL_SERVER_ERROR, {
    error,
    message: 'An unexpected error occurred',
    code: ErrorCodes.UNEXPECTED_ERROR,
  });
};
