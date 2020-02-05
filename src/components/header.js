import React, { useState } from "react"
import { Link } from "gatsby"

import Footer from './Footer';
import Menu from './Menu';

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
      <div
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
        "
        style={{
          backgroundColor: 'rgb(255, 255, 255)',
          boxShadow: !isShowMenu ? 'rgba(0, 0, 0, 0.07) 0px 5px 0px' : 'none',
        }}
      >
        <button
          className="text-black-52x3 font-rukib cursor-pointer focus:outline-none"
          onClick={onGoShowMenu}>Menu</button>
        <div className="text-black-52x3 font-rukib font-medium text-xl uppercase">
          <Link className="cursor-pointer" to="/">chau duong</Link>
        </div>
        <div className="text-black-52x3 font-rukib">
          <a className="cursor-pointer" href="https://github.com/chauduong1192">Github</a>
        </div>
      </div>
    );
  }

  const renderHeaderDesktop = () => {
    return(
      <header
        className="
        p-8 bottom-0 left-0 top-0 hidden flex-col justify-between fixed z-500-cd bg-white w-260px
        lg:w-280px sm:flex"
      >
        <div style={{ flex: '0 0 25%' }}>
          <Link className="mb-4 block" to="/">
            <h1 className="text-3xl text-black-25x3 uppercase">chau duong</h1>
          </Link>
          <p className="text-sm-cd leading-relaxed">Front-end developer</p>
          <p className="text-sm-cd leading-relaxed">React, React Native developer</p>
        </div>
        <div className="flex flex-col justify-center" style={{ flex: '0 0 50%' }}>
          <Menu />
        </div>
        <div
          className="justify-end flex flex-col text-sm-cd "
          style={{ flex: '0 0 25%' }}
        >
          <Footer />
        </div>
      </header>
    );
  }

  const renderMenuMobile = () => {
    return(
      <menu className="
      items-center bg-white bottom-0
      flex flex-col justify-center
      left-0 fixed right-0 text-center top-0 z-50 sm:hidden m-0 p-0">
        <Menu />
        <div className="absolute flex justify-center items-center flex-col" style={{ bottom: 14 }}>
          <Footer />
        </div>
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
