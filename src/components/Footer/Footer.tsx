// import { Facebook, Github, Linkedin } from 'lucide-react';
import React from 'react';

// import GithubIcon from '../static/icons/github.svg';
// import LinkedinIcon from '../static/icons/linkedin.svg';

// import SkypeIcon from '../static/icons/skype.svg';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const commonClass = 'text-stone-500';
const footerData = [
  {
    icon: <div>Other contacts: </div>,
  },
  {
    url: 'https://github.com/chauduong1192',
    icon: <FaGithub className='text-stone-500' size={16} />,
  },
  {
    url: 'https://www.linkedin.com/in/chauduong1192',
    // icon: <LinkedinIcon className={commonClass} />,
    icon: <FaLinkedin className='text-stone-500' size={16} />,
  },
  {
    url: 'https://www.facebook.com/chau.duong1192',
    icon: <FaFacebook className='text-stone-500' size={16} />,
  },
];
export const Footer = () => {
  const renderItemFooter = () => {
    return footerData.map((footer, idx) => (
      <li className='mr-2' key={idx}>
        <a
          className='cursor-pointer'
          href={footer.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          {footer.icon}
          {/* <div>icon</div> */}
        </a>
      </li>
    ));
  };

  return (
    <>
      {/* <h4 className="mb-4">
        <div>Contact me for business at </div>
        <a href="mailto:chau.duong1192@gmail.com"><span className="text-black-52x3">chau.duong1192@gmail.com</span></a></h4> */}
      <ul className='flex flex-row'>{renderItemFooter()}</ul>
    </>
  );
};
