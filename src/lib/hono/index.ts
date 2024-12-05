import { hc } from 'hono/client';

import { AppType } from '@/app/api/[...route]/route';
import { ApiError, ApiResponse } from '@/app/api/helpers/response';

export const RPC = hc<AppType>(process.env.API_URL ?? 'http://localhost:3000');

/**
 * Fetches data from a remote server using a request function and arguments.
 *
 * @template T - The type of the response data.
 * @template A - The type of the request arguments.
 * @param {Function} requestFunction - The function that makes the request to the server.
 * @param {A} args - The arguments to be passed to the request function.
 * @returns {Promise<ApiResponse<T>>} - A promise that resolves to the response data.
 * @throws {Error} - If the response is not successful or an error occurs during the fetch.
 */
export const fetcher = async <T, A>(
  requestFunction: (args: A) => Promise<Response>,
  args: A,
): Promise<ApiResponse<T>> => {
  try {
    const res = await requestFunction(args);
    await handleApiError(res);
    const json: ApiResponse<T> = await res.json();
    return json;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Fetch error: ', error);
    throw error;
  }
};

/**
 * Handles API errors by checking the response status and throwing an error if necessary.
 * @param response - The response object from the API request.
 * @throws {Error} - Throws an error with the error details if the response status is not ok.
 */
export const handleApiError = async (response: Response): Promise<void> => {
  if (!response.ok) {
    const errorData: { error?: ApiError } = await response.json();
    const error = new Error(errorData.error?.detail ?? 'An error occurred');
    (error as any).info = errorData.error;
    throw error;
  }
};
