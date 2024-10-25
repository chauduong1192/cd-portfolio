import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { HeadingSection } from '@/components/HeadingSection';

import { GithubRepo } from '@/types';

export const metadata = {
  title: 'Github repositories',
};

async function getPosts() {
  const res = await fetch(
    `${process.env.API_URL ?? 'http://localhost:3000'}/api/repos`,
    {
      cache: 'force-cache', // Ensure fresh data on each request
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
      .filter((post) => post.fork === false)
      ?.map(({ html_url, name, description, topics, stargazers_count }) => (
        <Card
          key={name}
          href={html_url}
          name={name}
          description={description}
          tags={topics.slice(0, 3)}
          count={stargazers_count}
        />
      ));
  };
  return (
    <Container>
      <HeadingSection
        headingText='Github repositories'
        title='My open-source projects'
        description="Here's a list of my open-source projects hosted on GitHub."
        withHr={true}
        className='gap-0'
      >
        <div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4
            auto-rows-fr'
        >
          {renderGitHubList()}
        </div>
      </HeadingSection>
    </Container>
  );
}
