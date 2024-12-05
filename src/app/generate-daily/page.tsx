import { Container } from '@/components/Container';
import { GenerateDaily as GenerateDailyComponent } from '@/components/GenerateDaily';
import { HeadingSection } from '@/components/HeadingSection';

import { getReposByUser } from '@/services/github/getReposByUser';

export const metadata = {
  title: 'Github repositories',
};

export default async function GenerateDaily() {
  const { data } = await getReposByUser();

  return (
    <Container>
      <HeadingSection
        headingText='Generate Daily'
        title='Generate Daily Components'
        description='Here are the latest commits from my private repositories.'
        withHr={true}
        className='gap-0'
      >
        <GenerateDailyComponent repos={data} />
      </HeadingSection>
    </Container>
  );
}
