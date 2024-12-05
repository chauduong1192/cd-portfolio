import { UnstyledLink } from '@/components/UnstyledLink';

import { cn } from '@/utils/classnames';

type TOCLinkProps = {
  id: string;
  level: number;
  minLevel: number;
  text: string;
  activeSection: string | null;
};

export const TOCLink = ({
  id,
  level,
  minLevel,
  text,
  activeSection,
}: TOCLinkProps) => {
  return (
    <UnstyledLink
      href={`#${id}`}
      id={`link-${id}`}
      className={cn(
        'font-medium text-gray hover:text-gray-dark dark:hover:text-gray-lighter',
        '',
        activeSection === id
          ? 'text-gray-900 dark:text-gray-100'
          : 'text-gray-400 dark:text-gray-500',
      )}
      style={{ marginLeft: (level - minLevel) * 16 }}
    >
      {text}
    </UnstyledLink>
  );
};
