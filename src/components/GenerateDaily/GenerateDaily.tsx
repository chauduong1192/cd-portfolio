'use client';

import { useQuery } from '@tanstack/react-query';
import { ComponentPropsWithRef, useRef, useState } from 'react';

import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import { Combobox } from '@/components/Combobox';
import { DatePicker } from '@/components/DatePicker';

import { getBranches } from '@/services/github/getBranches';
import { getCommitsByBranch } from '@/services/github/getCommitsByBranch';
import { cn } from '@/utils/classnames';

import { GithubRepo } from '@/types';

export type GenerateDailyProps = ComponentPropsWithRef<'div'> & {
  repos: GithubRepo[] | undefined;
};

export const GenerateDaily = ({ repos }: GenerateDailyProps) => {
  const preRef = useRef<HTMLTextAreaElement>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [repoSelected, setRepoSelected] = useState<string>('');
  const [branchSelected, setBranchSelected] = useState<string>('');
  const [dateSelected, setDateSelected] = useState<Date | undefined>();

  const { data: branchesQuery } = useQuery({
    queryKey: ['branches', repoSelected],
    queryFn: () => getBranches(repoSelected),
    enabled: !!repoSelected,
  });

  const { data: commitsQuery, isLoading: commitsLoading } = useQuery({
    queryKey: [
      'commits',
      dateSelected?.toISOString(),
      repoSelected,
      branchSelected,
    ],
    queryFn: async () =>
      getCommitsByBranch({
        full_name: repoSelected,
        sha: branchSelected,
        until: dateSelected?.toISOString() ?? '',
      }),
    enabled: !!branchSelected,
  });

  const [copy] = useCopyToClipboard();

  const { data: branches } = branchesQuery ?? {};
  const { data: commits } = commitsQuery ?? {};

  const options =
    repos?.map((repo) => ({
      value: repo?.full_name,
      label: repo?.name,
    })) ?? [];

  const optionsBranches =
    branches?.map((branch) => ({
      value: branch?.name,
      label: branch?.name,
    })) ?? [];

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='w-full grid grid-cols-3 gap-4 justify-start items-center'>
        <Combobox options={options} onChange={setRepoSelected} />
        {branches && branches.length > 0 && (
          <>
            <Combobox options={optionsBranches} onChange={setBranchSelected} />
            <DatePicker onSelect={setDateSelected} />
          </>
        )}
      </div>
      {commitsLoading && !commits && <p>Loading...</p>}
      {commits && (
        <>
          <textarea
            rows={10}
            className='block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border w-full h-full
              border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              dark:focus:ring-blue-500 dark:focus:border-blue-500'
            ref={preRef}
            value={commits}
            readOnly
          />
          <button
            onClick={() => {
              copy(preRef?.current?.textContent ?? '').then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 1500);
              });
            }}
            title='Copy code'
            className={cn([
              'rounded p-1 text-lg md:block w-fit bg-gray-50 dark:bg-gray-700',
              'text-gray-dark hover:bg-white/70',
            ])}
          >
            {isCopied ? 'Copied' : 'Copy'}
          </button>
        </>
      )}
    </div>
  );
};
