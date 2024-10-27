import { HiCode } from 'react-icons/hi';

import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { HeadingSection } from '@/components/HeadingSection';

import { getAllShortsData } from '@/utils/shorts';

export const metadata = {
  title: 'Shorts',
};

export default async function ShortsPage() {
  const allShorts = getAllShortsData();

  return (
    <Container subTitle='Showcase of my shorts'>
      <HeadingSection
        headingText='Github repositories'
        title='My open-source projects'
        description="Here's a list of my open-source projects hosted on GitHub."
        withHr={true}
        className='gap-0'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {allShorts?.map(({ slug, title, tags }) => (
            <Card
              contentProps={{ className: 'gap-4' }}
              key={title}
              href={`/shorts/${slug}`}
              name={title}
              external={false}
              icon={
                <HiCode
                  size={16}
                  className='text-slate-gray dark:text-gray-medium min-w-4'
                />
              }
              tags={tags?.map((field) => field)}
            />
          ))}
        </div>
      </HeadingSection>
    </Container>
  );
}