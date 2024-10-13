'use client';

import { ComponentPropsWithoutRef } from 'react';

import { Animate } from '@/components/Animate';

import { cn } from '@/utils/classnames';
import { fadeIn } from '@/utils/framer-variants';

type ContainerProps = ComponentPropsWithoutRef<'div'>;

export const Container = ({ children, className }: ContainerProps) => (
  <Animate
    variants={fadeIn}
    className={cn(
      'py-0 px-4 mx-0 my-16 lg:px-12 lg:my-8 w-full md:px-8',
      className,
    )}
  >
    {children}
  </Animate>
);
