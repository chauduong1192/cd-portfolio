'use client';

import {
  PropsWithChildren,
  Suspense,
  useEffect,
  useRef,
  useState,
} from 'react';

import Loading from '@/app/loading';
import { GoToTop } from '@/components/GoToTop';
import { Header } from '@/components/Header';
import { ToggleTheme } from '@/components/ToggleTheme';

type CoreLayoutProps = PropsWithChildren;

export const CoreLayout = ({ children }: CoreLayoutProps) => {
  const [isShowGoToTop, setShowGoToTop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const width = window.innerWidth;
    if (width >= 767) {
      return;
    }

    const currentStatus = ref && ref?.current;

    if (currentStatus) {
      const heightOfScreen = (currentStatus?.clientHeight / 2) * -1;
      setShowGoToTop(
        currentStatus?.getBoundingClientRect().top <= heightOfScreen,
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main
        ref={ref}
        className='lg:ml-[300px] min-h-screen flex justify-center dark:bg-black-default'
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
        {isShowGoToTop && <GoToTop />}
        <div className='fixed bottom-8 right-6 hidden lg:block'>
          <ToggleTheme />
        </div>
      </main>
    </>
  );
};
