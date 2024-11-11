import { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/Container';
import { HeadingSection } from '@/components/HeadingSection';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <Container hasCenter>
      <HeadingSection
        headingText='Page not found'
        title='404 - Not Found'
        description='Seem you are lost. Please go back to the previous page'
        withHr={false}
      >
        <div>
          <Link
            href='/'
            className='uppercase text-gray-dark dark:text-gray-lighter border-b-2 border-gray-dark
              dark:border-gray-lighter font-medium tracking-wider'
          >
            Click me
          </Link>
        </div>
      </HeadingSection>
    </Container>
  );
}
