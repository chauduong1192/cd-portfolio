import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import Header from "./header"
import GoToTop from "./go-to-top"

const Layout = ({ children }) => {
  const [isShowGoToTop, setShowGoToTop] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    const width = window.innerWidth;
    if(width >= 767) {
      return;
    }

    const currentStatus = ref && ref.current;
    
    if(currentStatus) {
      const heightOfScreen = (currentStatus.clientHeight / 2) * -1;
      setShowGoToTop(currentStatus.getBoundingClientRect().top <= heightOfScreen);
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
        className="sm:ml-260px md:ml-260px lg:ml-280px min-h-screen flex justify-center"
      >
        {children}
        {isShowGoToTop && <GoToTop />}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
