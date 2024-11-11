import Link, { LinkProps } from 'next/link';

import { cn } from '@/utils/classnames';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

export const UnstyledLink = ({
  children,
  href,
  openNewTab,
  className,
  ...rest
}: UnstyledLinkProps) => {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith('/') && !href.startsWith('#');

  if (!isNewTab) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      {...rest}
      className={cn(className, 'cursor-newtab')}
    >
      {children}
    </a>
  );
};
