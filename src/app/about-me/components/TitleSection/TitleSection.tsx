import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/classnames';

type TitleSectionProps = ComponentPropsWithoutRef<'div'>;

export const TitleSection = ({
  title,
  className,
  children,
}: TitleSectionProps) => (
  <div className='flex gap-3 sm:gap-4 flex-col'>
    <div
      className={cn(
        'text-2xl text-gray-dark underline font-medium dark:text-gray-lighter',
        className,
      )}
    >
      {title}
    </div>
    {children}
  </div>
);
