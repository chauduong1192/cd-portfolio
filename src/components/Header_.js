import React, { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Footer from './Footer';
import Menu from './Menu';

const HeaderMobile = styled.div`
  box-shadow: ${props => !props.isShowMenu ? 'rgba(0, 0, 0, 0.07) 0px 5px 0px' : 'none'};
`;

const HeaderDesktop = styled.header`
  & div:first-child {
    flex: 0 0 25%;
  }

  & div:nth-child(2) {
    flex: 0 0 50%;
  }

  & div:last-child {
    flex: 0 0 25%;
  }
`;

const FooterContainer = styled.div`
  bottom: 14px;
`;

const Header = () => {
  const [isShowMenu, setShowMenu] = useState(false);

  const onGoShowMenu = () => {
    if(!isShowMenu) {
      document.querySelector('body').style = 'overflow: hidden';
    } else {
      document.querySelector('body').style = '';
    }
    
    setShowMenu(!isShowMenu);
  }

  const renderHeaderMobile = () => {
    return(
      <HeaderMobile
        className="
          py-2
          sm:hidden
          px-4
          flex
          flex-row
          justify-between
          left-0
          right-0
          top-0
          z-500-cd
          fixed
          bg-transparent
          shadow-none
          items-center
          bg-white
        "
        isShowMenu={isShowMenu}
      >
        <button
          className="text-black-52x3 font-rukib cursor-pointer focus:outline-none"
          onClick={onGoShowMenu}>{isShowMenu ? 'Close' : 'Menu'}</button>
        <div className="text-black-52x3 font-rukib font-medium text-xl uppercase">
          <Link className="cursor-pointer" to="/">chau duong</Link>
        </div>
        <div className="text-black-52x3 font-rukib">
          <a className="cursor-pointer" href="https://github.com/chauduong1192">Github</a>
        </div>
      </HeaderMobile>
    );
  }

  const renderHeaderDesktop = () => {
    return(
      <HeaderDesktop
        className="
        p-8 bottom-0 left-0 top-0 hidden flex-col justify-between fixed z-500-cd bg-white w-260px
        lg:w-280px sm:flex"
      >
        <div>
          <Link className="mb-4 block" to="/">
            <h1 className="text-3xl text-black-25x3 uppercase">chau duong</h1>
          </Link>
          <h2 className="text-sm-cd leading-relaxed">Senior Front-end Developer</h2>
          <h2 className="text-sm-cd leading-relaxed">React, React Native Developer</h2>
        </div>
        <div className="flex flex-col justify-center">
          <Menu />
        </div>
        <div className="justify-end flex flex-col text-sm-cd ">
          <Footer />
        </div>
      </HeaderDesktop>
    );
  }

  const renderMenuMobile = () => {
    return(
      <menu className="
      items-center bg-white bottom-0
      flex flex-col justify-center
      left-0 fixed right-0 text-center top-0 z-50 sm:hidden m-0 p-0">
        <Menu />
        <FooterContainer
          className="absolute flex justify-center items-center flex-col">
          <Footer />
        </FooterContainer>
      </menu>
    );
  }

  return(
    <>
      {renderHeaderMobile()}
      {renderHeaderDesktop()}
      {isShowMenu && renderMenuMobile()}
    </>
  );
}

export default Header
