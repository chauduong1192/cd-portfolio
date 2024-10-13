import Link from 'next/link';

import { Container } from '@/components/Container';

export const metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <Container className='flex items-center sm:px-8'>
      <section className='px-0 lg:px-16 my-16'>
        <div className='space-y-6 max-w-[580px]'>
          <div className='text-white dark:text-stone-500 uppercase tracking-[5px]'>
            Hi, I’m Chau,
          </div>
          <div
            className='text-[42px] font-roboto-mono text-neutral-700 dark:text-gray-200
              tracking-tighter leading-[58px] font-medium'
          >
            I craft engaging and performant front-end experiences
          </div>
          <div className='text-2xl text-stone-500 dark:text-neutral-400 leading-relaxed'>
            I'm a specialized front-end engineer with expertise in React and
            React Native, delivering seamless experiences across web and mobile
            platforms.
          </div>
          <div className='flex gap-4 items-center'>
            <Link
              href='/about-me'
              className='uppercase text-neutral-700 dark:text-gray-200 border-b-2 border-neutral-700
                dark:border-gray-200 font-medium tracking-wider'
            >
              About me
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
