import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineStar } from 'react-icons/hi';

import { Container } from '@/components/Container';

import { GithubRepo } from '@/types/github';

export const metadata = {
  title: 'Github repositories',
};

async function getPosts() {
  const res = await fetch(
    `${process.env.API_URL ?? 'http://localhost:3000'}/api/repos`,
    {
      cache: 'no-store', // Ensure fresh data on each request
    },
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function GithubRepositories() {
  const posts: GithubRepo[] = await getPosts();

  const renderGitHubList = () => {
    if (!posts) {
      return <div>Loading...</div>;
    }
    return posts
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      ?.map((node) => (
        <Link
          key={node.id}
          className='flex flex-col justify-between bg-white dark:bg-white/95 rounded-md p-4 gap-2
            overflow-hidden'
          href={node.html_url}
          target='_blank'
        >
          <div className='flex items-center gap-2'>
            <div className='text-sm font-medium grow line-clamp-1 text-zinc-900 font-roboto-mono'>
              {node.name}
            </div>
            <FaGithub
              size={16}
              className='text-stone-500 dark:text-neutral-400 min-w-4'
            />
          </div>
          <div className='text-balance line-clamp-2 w-full text-sm'>
            {node.description}
          </div>
          <div className='flex justify-between gap-2 items-center'>
            <div className='flex flex-row w-full gap-1'>
              {node.topics?.slice(0, 3).map((topic: string) => (
                <div
                  key={topic}
                  className='rounded bg-gray-200 py-1 px-2 text-xs'
                >
                  {topic}
                </div>
              ))}
            </div>
            <div className='flex items-center gap-1'>
              <HiOutlineStar size={16} />
              <div className='text-sm font-roboto-mono font-medium'>
                {node.stargazers_count}
              </div>
            </div>
          </div>
        </Link>
      ));
  };
  return (
    <Container title='Repositories' subTitle='Showcase of my github repository'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {renderGitHubList()}
      </div>
    </Container>
  );
}
