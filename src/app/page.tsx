import Link from 'next/link';

import { Container } from '@/components/Container';
import { HeadingSection } from '@/components/HeadingSection';

export const metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <Container hasCenter>
      <HeadingSection
        withHr={false}
        headingText='Hi, I’m Chau,'
        title='I craft engaging and performant front-end experiences'
        description="I'm a specialized front-end engineer with expertise in React and React Native, delivering seamless experiences across web and mobile platforms."
      >
        <div>
          <Link
            href='/about-me'
            className='uppercase text-gray-dark dark:text-gray-lighter border-b-2 border-gray-dark
              dark:border-gray-lighter font-medium tracking-wider'
          >
            About me
          </Link>
        </div>
      </HeadingSection>
    </Container>
  );
}
