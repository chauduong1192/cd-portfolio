'use client';

import { ComponentPropsWithoutRef } from 'react';

import { Animate } from '@/components/Animate';

import { cn } from '@/utils/classnames';
import { fadeIn } from '@/utils/framer-variants';

type ContainerProps = ComponentPropsWithoutRef<'div'> & {
  hasCenter?: boolean;
  subTitle?: string;
};

export const Container = ({
  children,
  className,
  title,
  hasCenter = false,
  subTitle,
}: ContainerProps) => (
  <Animate
    variants={fadeIn}
    className={cn(
      `py-0 px-4 mx-0 my-16 lg:px-12 lg:my-8 w-full md:px-8 flex flex-col lg:gap-6
      gap-3`,
      {
        'items-start justify-center lg:px-8': hasCenter,
      },
      className,
    )}
  >
    {title && (
      <div className='flex flex-col'>
        <h1 className='text-2xl lg:text-3xl text-neutral-700 dark:text-gray-200'>
          {title}
        </h1>
        {subTitle && <span className=''>{subTitle}</span>}
      </div>
    )}
    {children}
  </Animate>
);
