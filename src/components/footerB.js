import React from "react"

import GithubIcon from '../static/icons/github.svg';
import LinkedinIcon from '../static/icons/linkedin.svg';
import FacebookIcon from '../static/icons/facebook.svg';
import SkypeIcon from '../static/icons/skype.svg';


const commonClass = 'md:w-4 md:h-4 w-5 h-5 fill-gray';
const footerData = [
  {
    icon: <div>Other contacts: </div>,
  },
  {
    url: 'https://github.com/chauduong1192',
    icon: <GithubIcon className={commonClass} />,
  },
  {
    url: 'https://www.linkedin.com/in/chauduong1192',
    icon: <LinkedinIcon className={commonClass} />,
  },
  {
    url: 'skype:chauduong1192?chat',
    icon: <SkypeIcon className={commonClass} />,
  },
  // {
  //   url: 'https://www.facebook.com/chau.duong1192',
  //   icon: <FacebookIcon className={commonClass} />,
  // },
];
const Footer = () => {

  const renderItemFooter = () => {
    return footerData.map((footer, idx) => (
      <li className="mr-2" key={idx}>
        <a
          className="cursor-pointer"
          href={footer.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {footer.icon}
        </a>
      </li>
    ))
  }

  return(
    <>
      {/* <h4 className="mb-4">
        <div>Contact me for business at </div>
        <a href="mailto:chau.duong1192@gmail.com"><span className="text-black-52x3">chau.duong1192@gmail.com</span></a></h4> */}
      <ul className="flex flex-row">
        {renderItemFooter()}
      </ul>
    </>
  );
}

export default Footer;
