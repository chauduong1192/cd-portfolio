import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Animate } from '@/components/Animate';

import { cn } from '@/utils/classnames';
import { fadeInX } from '@/utils/framer-variants';

const menuData = [
  {
    name: 'Home',
    href: '/home',
  },
  {
    name: 'About me',
    href: '/about-me',
  },
  {
    name: 'Repos',
    href: '/repos',
  },
  // {
  //   name: 'Blogs',
  //   href: '/blogs',
  // },
  {
    name: 'Shorts',
    href: '/shorts',
  },
  {
    name: 'Contact',
    to: '/',
    href: 'mailto:chau.duong1192@gmail.com',
  },
];
const linkClassName = `
  text-gray
  uppercase
  py-1
  font-medium
  tracking-widest
  text-center
  border-transparent
  hover:border-gray-dark
  hover:text-gray-dark
  border-solid
  border-b-2
  inline-block
  whitespace-no-wrap
  cursor-pointer
  dark:hover:text-gray-lighter
  dark:hover:border-gray-lighter
`;

export const Sidebar = ({ closeMenu }: { closeMenu?: () => void }) => {
  const pathName = usePathname();
  const pathNameArr = pathName === '/' ? '/home' : pathName;
  return (
    <Animate variants={fadeInX('left')}>
      <nav>
        <ul>
          {menuData.map(({ href, name }, idx) => (
            <li key={idx} className='my-2'>
              <Link
                onClick={closeMenu}
                href={href === '/home' ? '/' : href}
                className={cn(linkClassName, {
                  'text-gray-dark dark:text-gray-lighter':
                    pathNameArr.indexOf(href) >= 0,
                })}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Animate>
  );
};
