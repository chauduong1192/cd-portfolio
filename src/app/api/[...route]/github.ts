import { GoogleGenerativeAI } from '@google/generative-ai';
import { Hono } from 'hono';
import { StatusCodes } from 'http-status-codes';

import { Env } from '@/app/api/configs/env';
import { formatResponse } from '@/app/api/helpers/response';

import { GithubCommit } from '@/types';

const { GITHUB_URL, GITHUB_USERNAME, GITHUB_TOKEN, GENIMI_API_KEY } = Env;
const genAI = new GoogleGenerativeAI(GENIMI_API_KEY as string);

const githubApi = new Hono()
  .get('/repos', async (c) => {
    try {
      const response = await fetch(
        `${GITHUB_URL}/users/${GITHUB_USERNAME}/repos`,
      );
      const newResponse = await response.json();
      return formatResponse(c, StatusCodes.OK, {
        data: newResponse,
      });
    } catch (error) {
      throw error;
    }
  })
  .get('/repos-with-username', async (c) => {
    try {
      const response = await fetch(
        `${GITHUB_URL}/user/repos?type=private&sort=pushed&per_page=50&direction=desc`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        },
      );
      const newResponse = await response.json();
      return formatResponse(c, StatusCodes.OK, {
        data: newResponse,
      });
    } catch (error) {
      throw error;
    }
  })
  .get('/branches', async (c) => {
    try {
      const fullName = c.req.query('full_name');
      const response = await fetch(
        `${GITHUB_URL}/repos/${fullName}/branches?per_page=100`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        },
      );
      const newResponse = await response.json();
      return formatResponse(c, StatusCodes.OK, {
        data: newResponse,
      });
    } catch (error) {
      throw error;
    }
  })
  .get('/commits-with-branch', async (c) => {
    try {
      const fullName = c.req.query('full_name');
      const sha = c.req.query('sha');
      const until = c.req.query('until');

      const response = await fetch(
        `${GITHUB_URL}/repos/${fullName}/commits?author=${GITHUB_USERNAME}&committer=${GITHUB_USERNAME}&until=${until}&sha=${sha}`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        },
      );
      const newCommits = await response.json();

      const commits = newCommits.map(
        (commit: GithubCommit) => commit.commit.message,
      );

      if (commits.length === 0) {
        return formatResponse(c, StatusCodes.OK, {
          data: 'No commits found. Please try again with different branch and date.',
        });
      }

      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
      });

      const prompt = `
        Here are the commits:
        Analyze these git commits and write the summary as daily activity report.
        Only analyze the commits that are related to refactoring, bug fixes, and new features.
          ${commits.join('\n')}
      `;

      const result = await model.generateContent(prompt);
      return formatResponse(c, StatusCodes.OK, {
        data: result.response.text(),
      });
    } catch (error) {
      throw error;
    }
  });

export { githubApi };
