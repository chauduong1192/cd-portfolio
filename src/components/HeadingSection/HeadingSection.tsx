import { ComponentPropsWithRef } from 'react';

import { TypewriterEffect } from '@/components/TypewriteEffect';

import { cn } from '@/utils/classnames';

type HeadingProps = Omit<ComponentPropsWithRef<'div'>, 'title'> & {
  headingText: string;
  title: string | { text: string; className?: string }[];
  description: string;
  withHr?: boolean;
};

export const HeadingSection = ({
  headingText,
  title,
  description,
  children,
  withHr = true,
  ...props
}: HeadingProps) => (
  <section
    {...props}
    className={cn(
      'px-0 lg:px-16 my-16 text-gray-default flex gap-6 flex-col',
      props.className,
    )}
  >
    <div className='space-y-6 max-w-[580px]'>
      <div className='text-white dark:text-slate-gray uppercase tracking-[5px]'>
        {headingText}
      </div>
      <div
        className='text-[42px] font-roboto-mono text-gray-dark dark:text-gray-lighter
          tracking-tighter leading-[58px] font-medium'
      >
        {typeof title === 'string' ? title : <TypewriterEffect words={title} />}
      </div>
      <div className='text-2xl text-slate-gray dark:text-gray-medium leading-relaxed'>
        {description}
      </div>
    </div>
    {withHr && <hr className='w-7 h-0.5 bg-white my-14' />}
    {children}
  </section>
);
