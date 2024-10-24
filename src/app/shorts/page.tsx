import { Card } from '@/components/Card';
import { Container } from '@/components/Container';

import { getAllShortsData } from '@/utils/shorts';

export const metadata = {
  title: 'Shorts',
};

export default async function ShortsPage() {
  const allShorts = getAllShortsData();

  return (
    <Container title='Shorts' subTitle='Showcase of my shorts'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {allShorts?.map(({ slug, title, tags }) => (
          <Card
            key={title}
            href={`/shorts/${slug}`}
            name={title}
            external={false}
            // description={description}
            tags={tags?.map((field) => field)}
            // count={stargazers_count}
          />
        ))}
      </div>
    </Container>
  );
}
