import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { HeadingSection } from '@/components/HeadingSection';

import { getRepos } from '@/services/github/getRepos';

export const metadata = {
  title: 'Github repositories',
};

export const dynamic = 'force-dynamic';

export default async function GithubRepositories() {
  const { data: repos } = await getRepos();

  if (!repos) {
    return null;
  }

  const renderGitHubList = () => {
    if (!repos) {
      return <div>Loading...</div>;
    }
    return (
      repos?.length > 0 &&
      repos
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
        ))
    );
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
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
            gap-4 auto-rows-fr'
        >
          {renderGitHubList()}
        </div>
      </HeadingSection>
    </Container>
  );
}
