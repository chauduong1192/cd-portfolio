import React, { useState } from 'react';

// import PhoneIcon from '../static/icons/phone.svg';
// import EmailIcon from '../static/icons/email.svg';
// import AddresIcon from '../static/icons/address.svg';
// import { SendIcon, MapPinnedIcon } from 'lucide-react';

import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { cn } from '@/utils/classnames';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

export const Header = () => {
  const [isShowMenu, setShowMenu] = useState(false);

  const onGoShowMenu = () => {
    // if(!isShowMenu) {
    //   document.querySelector('body').style = 'overflow: hidden';
    // } else {
    //   document.querySelector('body').style = '';
    // }

    setShowMenu(!isShowMenu);
  };

  const renderHeaderMobile = () => {
    return (
      <div
        className={cn(
          'py-2 sm:hidden px-4 flex flex-row justify-between left-0 right-0 top-0 z-[500] fixed bg-transparent shadow-none items-center bg-white',
          {
            'shadow-inner': isShowMenu,
          }
        )}
      >
        <button
          className='text-black-52x3 font-rukib cursor-pointer focus:outline-none'
          onClick={onGoShowMenu}
        >
          {isShowMenu ? 'Close' : 'Menu'}
        </button>
        <div className='text-black-52x3 font-rukib font-medium text-xl uppercase'>
          <Link className='cursor-pointer' href='/'>
            chau duong
          </Link>
        </div>
        <div className='text-black-52x3 font-rukib'>
          <a className='cursor-pointer' href='https://github.com/chauduong1192'>
            Github
          </a>
        </div>
      </div>
    );
  };
  const renderInfo = () => {
    return (
      <>
        <h2 className='text-sm leading-relaxed flex items-center mb-1 gap-2'>
          <HiOutlineMail className='text-stone-500' size={16} />
          <div>
            <a href='mailto:chau.duong1192@gmail.com'>
              chau.duong1192@gmail.com
            </a>
          </div>
        </h2>
        <h2 className='text-sm leading-relaxed flex items-center gap-2'>
          <HiOutlineLocationMarker className='text-stone-500' size={16} />
          Ho Chi Minh, Viet Nam
        </h2>
      </>
    );
  };
  const renderHeaderDesktop = () => {
    return (
      <div className='p-8 bottom-0 left-0 top-0 hidden flex-col justify-between fixed z-[500] bg-white w-[300px] md:flex'>
        <div>
          <Link className='mb-0 block' href='/'>
            <h1 className='text-3xl text-neutral-700 uppercase'>chau duong</h1>
          </Link>
          <h2 className='text-sm leading-relaxed mb-5'>Software Engineer</h2>
          {renderInfo()}
        </div>
        <div className='flex flex-col justify-center'>
          <Sidebar />
        </div>
        <div className='justify-end flex flex-col text-sm'>
          <Footer />
        </div>
      </div>
    );
  };

  const renderMenuMobile = () => {
    return (
      <menu
        className='
      items-center bg-white bottom-0
      flex flex-col justify-center
      left-0 fixed right-0 text-center top-0 z-50 sm:hidden m-0 p-0'
      >
        <Sidebar />
        <div className='absolute flex justify-center items-center flex-col mb-3.5'>
          <div>{renderInfo()}</div>
          <Footer />
        </div>
      </menu>
    );
  };

  return (
    <>
      {renderHeaderMobile()}
      {renderHeaderDesktop()}
      {isShowMenu && renderMenuMobile()}
    </>
  );
};
