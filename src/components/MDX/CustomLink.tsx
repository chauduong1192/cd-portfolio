import { UnstyledLink, UnstyledLinkProps } from '@/components/UnstyledLink';

import { cn } from '@/utils/classnames';

export const CustomLink = ({
  children,
  className,
  ...rest
}: UnstyledLinkProps) => {
  return (
    <UnstyledLink
      {...rest}
      className={cn(
        'text-gray-dark dark:text-gray-lighter animated-underline',
        'border-b border-dark hover:border-black/0 no-underline',
        className,
      )}
    >
      {children}
    </UnstyledLink>
  );
};
