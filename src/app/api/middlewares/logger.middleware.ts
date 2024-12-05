import { Context } from 'hono';
import { createMiddleware } from 'hono/factory';

import { logger } from '@/app/api/libs/logger';

export const loggerMiddleware = createMiddleware(async (ctx, next) => {
  const start = process.hrtime();

  await next(); // Execute the next middleware in the chain before logging

  const responseTime = getResponseTime(start);
  const requestBody = await getRequestSummary(ctx);

  // Log the request and response details
  logger.info({
    method: ctx.req.method,
    url: ctx.req.url,
    status: ctx.res.status,
    responseTime: `${responseTime.toFixed(2)}ms`,
    requestBody,
  });

  // Optionally set the response time header
  ctx.header('X-Response-Time', `${responseTime.toFixed(2)}ms`);
});

// Helper function to calculate the response time
function getResponseTime(start: [number, number]) {
  const diff = process.hrtime(start);
  return (diff[0] * 1e9 + diff[1]) / 1e6; // Convert to milliseconds
}

// Helper function to summarize the request body or indicate content type
async function getRequestSummary(ctx: Context) {
  const contentType = ctx.req.header('Content-Type') || '';
  if (contentType.includes('application/json')) {
    try {
      return await ctx.req.json(); // Attempt to parse JSON body
    } catch {
      return 'Invalid JSON or no body';
    }
  } else if (contentType.includes('text/')) {
    return await ctx.req.text(); // Handle text content
  } else if (contentType.includes('multipart/form-data')) {
    return 'File or data'; // Simplified handling for form data
  }
  return undefined; // Fallback message
}
