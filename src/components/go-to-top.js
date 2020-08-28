import React from "react";
import styled from 'styled-components';
import GoToTopIcon from '../static/icons/ic-arrow-up.svg';

const Button = styled.div`
  right: 24px;
  bottom: 40px;
  background: #212121;
  opacity: .5;
  z-index: 2;

  & svg {
    fill: #ffffff;
  }
`;

const goTop = () => typeof window !== 'undefined' && window.scrollTo(0,0);

const GoToTop = () => 
  <Button
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
    onClick={goTop}
  >
    <GoToTopIcon />
  </Button>

export default GoToTop;
