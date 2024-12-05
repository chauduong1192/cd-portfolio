import 'dotenv/config';

export class Env {
  static readonly NODE_ENV = process.env.NODE_ENV ?? 'development';
  static readonly PORT: number = process.env.PORT
    ? parseInt(process.env.PORT)
    : 8000;
  static readonly API_URL = process.env.API_URL ?? 'http://localhost:3000';
  static readonly GITHUB_URL = process.env.GITHUB_URL;
  static readonly GITHUB_USERNAME = process.env.GITHUB_USERNAME;
  static readonly GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  static readonly GENIMI_API_KEY = process.env.GENIMI_API_KEY;
  static readonly GENERATE_PASSWORD = process.env.GENERATE_PASSWORD;

  static isDevelopment(): boolean {
    return this.NODE_ENV === 'development';
  }

  static isProduction(): boolean {
    return this.NODE_ENV === 'production';
  }

  static isTest(): boolean {
    return this.NODE_ENV === 'test';
  }
}
