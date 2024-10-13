import { Container } from '@/components/Container';

import { siteConfig } from '@/constant/config';

export const metadata = {
  title: `Projects | ${siteConfig.title_short}`,
};
export default function Projects() {
  return (
    <Container>
      <div
        className='text-[42px] font-roboto-mono text-neutral-700 dark:text-gray-200
          tracking-tighter leading-[58px] font-medium'
      >
        Coming soon...
      </div>
    </Container>
  );
}
