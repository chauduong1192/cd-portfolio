import React from 'react';

const goTop = () => typeof window !== 'undefined' && window.scrollTo(0, 0);

export const GoToTop = () => (
  <div
    className='
      right-6
      bottom-10
      background-neutral-800
      opacity-50
      z-[2]
      cursor-pointer
      fixed
      flex
      justify-center
      items-center
      z-500-cd
      w-10
      h-10
      sm:hidden
      rounded-full
      go-to-top
      focus:outline-none
    '
    onClick={goTop}
  >
    <div>go to top icon</div>
  </div>
);
