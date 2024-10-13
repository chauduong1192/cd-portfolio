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
        'text-2xl text-neutral-700 underline font-medium dark:text-gray-200',
        className,
      )}
    >
      {title}
    </div>
    {children}
  </div>
);
