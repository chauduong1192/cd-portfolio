'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';

import { Animate } from '@/components/Animate';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { ToggleTheme } from '@/components/ToggleTheme';

import { cn } from '@/utils/classnames';
import { fadeInY } from '@/utils/framer-variants';

export const Header = () => {
  const [isShowMenu, setShowMenu] = useState(false);

  const onGoShowMenu = () => {
    setShowMenu(!isShowMenu);
  };

  const renderHeaderMobile = () => {
    return (
      <div
        className={cn(
          `fixed left-0 right-0 top-0 z-[100] flex flex-row items-center justify-between
          bg-transparent bg-white px-4 md:px-8 py-2 shadow-none lg:hidden
          dark:bg-neutral-700`,
          {
            'shadow-inner': isShowMenu,
          },
        )}
      >
        <button
          className='text-black-52x3 font-rukib cursor-pointer focus:outline-none dark:text-gray-200'
          onClick={onGoShowMenu}
        >
          {isShowMenu ? 'Close' : 'Menu'}
        </button>
        <Link className='cursor-pointer' href='/'>
          <div className='text-black-52x3 font-rukib text-xl font-medium uppercase dark:text-gray-200'>
            chau duong
          </div>
        </Link>
        {/* <div className='text-black-52x3 font-rukib'>
          <a className='cursor-pointer' href='https://github.com/chauduong1192'>
            Github
          </a>
        </div> */}
        <ToggleTheme />
      </div>
    );
  };

  const renderHeaderDesktop = () => {
    return (
      <div
        className='fixed bottom-0 left-0 top-0 z-[100] hidden w-[300px] flex-col justify-between
          bg-white p-8 lg:flex dark:bg-neutral-700'
      >
        <Animate variants={fadeInY('down')}>
          <Link className='mb-0 block' href='/'>
            <h1 className='text-3xl uppercase text-neutral-700 dark:text-gray-200'>
              chau duong
            </h1>
          </Link>
          <h2 className='mb-5 text-sm dark:text-neutral-400'>
            Software Engineer
          </h2>
          <div className='mb-1 flex items-center gap-2'>
            <HiOutlineMail
              className='text-stone-500 dark:text-neutral-400'
              size={16}
            />
            <a
              href='mailto:chau.duong1192@gmail.com'
              className='text-sm dark:text-neutral-400'
            >
              chau.duong1192@gmail.com
            </a>
          </div>
          <div className='flex items-center gap-2 text-sm dark:text-neutral-400'>
            <HiOutlineLocationMarker
              className='text-stone-500 dark:text-neutral-400'
              size={16}
            />
            Ho Chi Minh, Viet Nam
          </div>
        </Animate>
        <div className='flex flex-col justify-center'>
          <Sidebar />
        </div>
        <Animate
          variants={fadeInY('up')}
          className='flex flex-col justify-end text-sm'
        >
          <Footer />
        </Animate>
      </div>
    );
  };

  const renderMenuMobile = () => {
    return (
      <motion.div
        animate={
          isShowMenu
            ? { opacity: 1, display: 'flex' }
            : { opacity: 0, display: 'none' }
        }
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='fixed bottom-0 left-0 right-0 z-50 top-0 m-0 flex-col items-center
          justify-center bg-white p-0 text-center lg:hidden dark:bg-neutral-700'
      >
        <Sidebar closeMenu={() => setShowMenu(false)} />
      </motion.div>
    );
  };

  return (
    <>
      {renderHeaderMobile()}
      {renderHeaderDesktop()}
      {renderMenuMobile()}
    </>
  );
};
