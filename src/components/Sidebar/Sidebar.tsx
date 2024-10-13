import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Animate } from '@/components/Animate';

import { cn } from '@/utils/classnames';
import { fadeInX } from '@/utils/framer-variants';

const menuData = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About me',
    href: '/about-me',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    to: '/',
    href: 'mailto:chau.duong1192@gmail.com',
  },
];
const linkClassName = `
  text-zinc-500
  uppercase
  py-1
  font-medium
  tracking-widest
  text-center
  border-transparent
  hover:border-neutral-700
  hover:text-neutral-700
  border-solid
  border-b-2
  inline-block
  whitespace-no-wrap
  cursor-pointer
  dark:hover:text-gray-200
  dark:hover:border-gray-200
`;

export const Sidebar = ({ closeMenu }: { closeMenu?: () => void }) => {
  const pathName = usePathname();
  return (
    <Animate variants={fadeInX('left')}>
      <nav>
        <ul>
          {menuData.map(({ href, name }, idx) => (
            <li key={idx} className='my-2'>
              <Link
                onClick={closeMenu}
                href={href}
                className={cn(linkClassName, {
                  'text-neutral-700 dark:text-gray-200': href === pathName,
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
