import Link from 'next/link';
import React from 'react';

const menuData = [
  {
    name: 'About me',
    href: '/',
  },
  {
    name: 'GitHub Repos',
    href: '/github-repos',
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
  opacity-75
  inline-block
  whitespace-no-wrap
  cursor-pointer
  transition-all
`;

export const Sidebar = () => {
  return (
    <nav>
      <ul>
        {menuData.map(({ href, name }, idx) => (
          <li key={idx} className='my-2'>
            <Link href={href} className={linkClassName}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
