import React, { useEffect, useState, useRef, PropsWithChildren } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { GoToTop } from '@/components/GoToTop';
import { Header } from '@/components/Header';

type CoreLayoutProps = PropsWithChildren<{}>;

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
        currentStatus?.getBoundingClientRect().top <= heightOfScreen
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
        className='md:ml-[300px] min-h-screen flex justify-center'
      >
        {children}
        {isShowGoToTop && <GoToTop />}
      </main>
    </>
  );
};
