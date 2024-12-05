import { createLogger, format, transports } from 'winston';

import { Env } from '@/app/api/configs/env';

// Define custom format for pretty print in development
const prettyPrintFormat = format.printf(
  ({ level, message, timestamp, stack }) => {
    let formattedMessage = message;
    if (typeof message === 'object') {
      formattedMessage = JSON.stringify(message, null, 2);
    }
    return `${timestamp} [${level}]: ${stack || formattedMessage}`;
  },
);

export const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }), // Include stack trace if available
    format.splat(), // Enables string interpolation
    // Use pretty print format in development, otherwise use JSON
    Env.isDevelopment()
      ? format.combine(format.colorize(), prettyPrintFormat)
      : format.json(),
  ),
  transports: [
    new transports.Console({
      // For console transport, apply additional formatting in development
      format: Env.isDevelopment()
        ? format.combine(format.colorize(), prettyPrintFormat)
        : undefined,
    }),
    // File transport (can be configured for production to log in single-line JSON)
    new transports.File({ filename: 'combined.log', format: format.json() }),
    new transports.File({ filename: 'error.log', level: 'error' }),
  ],
});
