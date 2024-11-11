import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const commonClassIcons = {
  size: 16,
  className: 'text-slate-gray dark:text-gray-medium',
};
const footerData = [
  {
    icon: <div>Other contacts: </div>,
  },
  {
    url: 'https://github.com/chauduong1192',
    icon: <FaGithub {...commonClassIcons} />,
  },
  {
    url: 'https://www.linkedin.com/in/chauduong1192',
    // icon: <LinkedinIcon className={commonClass} />,
    icon: <FaLinkedin {...commonClassIcons} />,
  },
  {
    url: 'https://www.facebook.com/chau.duong1192',
    icon: <FaFacebook {...commonClassIcons} />,
  },
];
export const Footer = () => {
  const renderItemFooter = () => {
    return footerData.map((footer, idx) => (
      <li className='mr-2' key={idx}>
        <a
          className='cursor-pointer dark:text-gray-medium'
          href={footer.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          {footer.icon}
        </a>
      </li>
    ));
  };

  return (
    <>
      {/* <h4 className="mb-4">
        <div>Contact me for business at </div>
        <a href="mailto:chau.duong1192@gmail.com"><span className="text-black-52x3">chau.duong1192@gmail.com</span></a></h4> */}
      <ul className='flex flex-row items-center'>{renderItemFooter()}</ul>
    </>
  );
};
