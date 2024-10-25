import Link from 'next/link';
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ReactNode,
} from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineStar } from 'react-icons/hi';

import { Meteors } from '@/components/Meteors';
import { cn } from '@/utils/classnames';

type CardProps = ComponentPropsWithRef<'a'> & {
  href: string;
  name: string;
  icon?: ReactNode;
  description?: string;
  tags?: string[];
  count?: number | ReactNode;
  external?: boolean;
  contentProps?: ComponentPropsWithoutRef<'div'>;
};

export const Card = ({
  href,
  name,
  description,
  icon,
  tags,
  external = true,
  count,
  contentProps,
  ...props
}: CardProps) => {
  return (
    <Link
      className='w-full h-full transition-transform transform md:hover:scale-105 cursor-pointer
        relative group'
      href={href}
      {...(external && { target: '_blank' })}
      {...props}
    >
      <div
        className='absolute inset-0 h-full w-full bg-gradient-to-r from-gray-slate
          to-black-default/20 transform scale-[0.80] bg-gray-lighter/20 rounded-full
          blur-3xl'
      />
      <div
        {...contentProps}
        className={cn(
          `relative w-full h-full p-4 gap-2 flex flex-col justify-between overflow-hidden
          bg-white dark:bg-white/95 rounded-md`,
          contentProps?.className,
        )}
      >
        <div className='flex items-center gap-2'>
          <div className='text-base font-medium grow line-clamp-1 text-black-default font-roboto-mono'>
            {name}
          </div>
          {icon ?? (
            <FaGithub
              size={16}
              className='text-slate-gray dark:text-gray-medium min-w-4'
            />
          )}
        </div>
        {description && (
          <div className='text-balance line-clamp-2 w-full text-sm'>
            {description}
          </div>
        )}
        <div className='flex justify-between gap-2 items-center'>
          <div className='flex flex-row w-full gap-1'>
            {tags?.map((tag: string) => (
              <div
                key={tag}
                className='rounded bg-gray-lighter py-1 px-2 text-xs'
              >
                {tag}
              </div>
            ))}
          </div>
          {typeof count === 'number' ? (
            <div className='flex items-center gap-1'>
              <HiOutlineStar size={16} />
              <div className='text-sm font-roboto-mono font-medium'>
                {count}
              </div>
            </div>
          ) : (
            count
          )}
        </div>
        <Meteors number={10} />
      </div>
    </Link>
  );
};
