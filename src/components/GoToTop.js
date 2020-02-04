import React from "react";
import GoToTopIcon from '../static/icons/ic-arrow-up.svg';

const goTop = () => typeof window !== 'undefined' && window.scrollTo(0,0);
// eslint:disable 
const GoToTop = () => 
  <button
    className="
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
    "
    style={{
      right: 24,
      bottom: 40,
      background: '#212121',
      opacity: '.5',
    }}
    onClick={goTop}
  >
    <GoToTopIcon style={{ fill: '#ffffff' }} />
  </button>

export default GoToTop;
