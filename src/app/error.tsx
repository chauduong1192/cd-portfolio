'use client';

import Link from 'next/link';
import * as React from 'react';

import { Container } from '@/components/Container';
import { HeadingSection } from '@/components/HeadingSection';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <Container hasCenter>
      <HeadingSection
        headingText='Error occurred'
        title='500 - Internal Server Error'
        description='Seem you are lost. Please go back to the previous page'
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
