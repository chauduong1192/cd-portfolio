import React from "react"

import GithubIcon from '../static/icons/github.svg';
import LinkedinIcon from '../static/icons/linkedin.svg';
import FacebookIcon from '../static/icons/facebook.svg';
import SkypeIcon from '../static/icons/skype.svg';

const footerData = [
  {
    url: 'https://github.com/chauduong1192',
    icon: <GithubIcon className="w-4 h-4 fill-gray" />,
  },
  {
    url: 'https://www.linkedin.com/in/chauduong1192',
    icon: <LinkedinIcon className="w-4 h-4 fill-gray" />,
  },
  {
    url: 'skype:chauduong1192?chat',
    icon: <SkypeIcon className="w-4 h-4 fill-gray" />,
  },
  {
    url: 'https://www.facebook.com/chau.duong1192',
    icon: <FacebookIcon className="w-4 h-4 fill-gray" />,
  },
];
const Footer = () => {

  const renderItemFooter = () => {
    return footerData.map((footer, idx) => (
      <li className="mr-2" key={idx}>
        <a
          className="cursor-pointer"
          href={footer.url}
          target="_blank"
        >
          {footer.icon}
        </a>
      </li>
    ))
  }

  return(
    <>
      <p className="mb-4">Contact me for business at <a href="mailto:chau.duong1192@gmail.com"><span className="text-black-52x3">chau.duong1192@gmail.com</span></a></p>
      <ul className="flex flex-row">
        {renderItemFooter()}
      </ul>
    </>
  );
}

export default Footer;
