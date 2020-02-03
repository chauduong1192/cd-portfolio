import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import Footer from './Footer';
import Menu from './Menu';

const Header = ({ siteTitle }) => {

  return(
    <>
      <div className="py-3"></div>
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
    </>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
