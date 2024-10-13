import { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <Container className='flex items-center sm:px-8'>
      <section className='px-0 lg:px-16 my-16'>
        <div className='space-y-5 max-w-[580px]'>
          <div
            className='text-4xl font-roboto-mono text-neutral-700 dark:text-gray-200 tracking-tighter
              font-medium'
          >
            Opps! Page not found
          </div>
          <div className='text-2xl text-stone-500 dark:text-neutral-400 leading-relaxed'>
            Seem you are lost. <br />
            Please go back to the previous page.
          </div>
          <div className='flex gap-4 items-center text-center'>
            <Link
              href='/'
              className='uppercase text-neutral-700 dark:text-gray-200 border-b-2 border-neutral-700
                dark:border-gray-200 font-medium tracking-wider'
            >
              Click me
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
