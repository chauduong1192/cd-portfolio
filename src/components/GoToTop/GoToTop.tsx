import { HiArrowUp } from 'react-icons/hi';

const goTop = () => typeof window !== 'undefined' && window.scrollTo(0, 0);

export const GoToTop = () => (
  <div
    className='right-6 bottom-10 bg-white dark:bg-gray-200 opacity-50 z-[2] cursor-pointer
      fixed flex justify-center items-center w-10 h-10 sm:hidden rounded-full
      go-to-top focus:outline-none'
    onClick={goTop}
  >
    <HiArrowUp className='text-neutral-700 dark:bg-gray-200' />
  </div>
);
