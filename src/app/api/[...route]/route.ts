import { Hono } from 'hono';
import { etag } from 'hono/etag';
import { logger as HonoLogger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { secureHeaders } from 'hono/secure-headers';
import { handle } from 'hono/vercel';
import { StatusCodes } from 'http-status-codes';

import { githubApi } from '@/app/api/[...route]/github';
import { formatResponse } from '@/app/api/helpers/response';
import { errorHandlers } from '@/app/api/middlewares/error.middleware';
import { loggerMiddleware } from '@/app/api/middlewares/logger.middleware';

const app = new Hono().basePath('/api');

/**
 * Middlewares
 */
app.use('*', prettyJSON());
app.use('*', etag());
app.use('*', secureHeaders());
app.use('*', HonoLogger());

/**
 * Error handlers
 */
app.notFound((c) =>
  formatResponse(c, StatusCodes.NOT_FOUND, { message: 'Not found' }),
);
app.onError((error, c) => errorHandlers(error, c));

/**
 * Custom middlewares
 */
app.use('*', loggerMiddleware);

/**
 * Routes
 */
const routes = app.route('/github', githubApi);

export type AppType = typeof routes;
export const GET = handle(app);
export const POST = handle(app);
