import { Context } from 'hono';
import { StatusCode } from 'hono/utils/http-status';
import { StatusCodes } from 'http-status-codes';

export interface ApiError {
  /**
   * Error code
   * @example "ERR_INVALID_INPUT"
   */
  code?: string;
  /**
   * Error title
   * @example "Invalid input"
   */
  title?: string;
  /**
   * Error detail
   * @example "The input is invalid"
   */
  detail?: string;
  /**
   * Additional error metadata
   * @example { "field": "username" }
   */
  meta?: Record<string, unknown>;
}

export interface ApiResponse<T> {
  /**
   * Response message
   * @example "Success"
   */
  message?: string;
  /**
   * Response data
   * @example { "id": 1, "name": "John Doe" }
   */
  data?: T;
  /**
   * Additional response metadata
   * @example { "page": 1, "limit": 10, "total": 100 }
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: Record<string, any>;
  /**
   * Custom error data
   */
  error?: ApiError;
}

/**
 * Format response to standard API response
 * @param status - HTTP status code
 * @param response - Response object
 * @returns Formatted response
 */
export function formatResponse<T>(
  // @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  c: Context,
  status: StatusCode,
  { error, message, data }: ApiResponse<T> = {},
): Response {
  const response: ApiResponse<T> = {
    message: message ?? getDefaultMessage(status),
    data: data ?? undefined,
    error: error ?? undefined,
  };

  // No content response
  if (status === StatusCodes.NO_CONTENT)
    return c.body(null, StatusCodes.NO_CONTENT);

  return c.json(response, status);
}

function getDefaultMessage(status: number): string {
  if (status >= 200 && status < 300) {
    return 'Success';
  }

  if (status >= 300 && status < 400) {
    return 'Resource has been moved';
  }

  if (status >= 400) {
    return 'An error occurred, please try again later';
  }

  if (status >= 500) {
    return 'An internal server error occurred, contact support for more information';
  }

  return '';
}
