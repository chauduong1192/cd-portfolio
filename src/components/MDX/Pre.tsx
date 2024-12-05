'use client';

import { ComponentPropsWithRef, useRef, useState } from 'react';
import { BiCheck, BiCopy } from 'react-icons/bi';

import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import { cn } from '@/utils/classnames';

export function Pre({
  className,
  children,
  ...rest
}: ComponentPropsWithRef<'pre'>) {
  const preRef = useRef<HTMLPreElement>(null);

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [copy] = useCopyToClipboard();

  return (
    <pre
      {...rest}
      ref={preRef}
      className={cn([
        `group relative p-4 rounded text-base font-roboto-mono bg-gray-lighter
        dark:bg-gray-lighter/90 mb-4`,
        className,
      ])}
    >
      {children}
      <div className={cn('absolute right-0 top-0 z-10 m-2.5 flex gap-1')}>
        <button
          onClick={() => {
            copy(preRef?.current?.textContent ?? '').then(() => {
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 1500);
            });
          }}
          title='Copy code'
          className={cn([
            'rounded p-1 text-lg md:block',
            'text-gray-dark hover:bg-white/70',
          ])}
        >
          {isCopied ? <BiCheck /> : <BiCopy />}
        </button>
      </div>
    </pre>
  );
}
