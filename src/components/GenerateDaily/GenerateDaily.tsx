'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { ComponentPropsWithRef, useEffect, useRef, useState } from 'react';

import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import { Combobox } from '@/components/Combobox';
import { DatePicker } from '@/components/DatePicker';

import { getBranches } from '@/services/github/getBranches';
import { getCommitsByBranch } from '@/services/github/getCommitsByBranch';
import { cn } from '@/utils/classnames';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GithubRepo } from '@/types';

import { verifyPassword } from '@/services/auth/verifyPassword';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export type GenerateDailyProps = ComponentPropsWithRef<'div'> & {
  repos: GithubRepo[] | undefined;
};

const schema = yup
  .object({
    password: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const GenerateDaily = ({ repos }: GenerateDailyProps) => {
  const preRef = useRef<HTMLTextAreaElement>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [repoSelected, setRepoSelected] = useState<string>('');
  const [branchSelected, setBranchSelected] = useState<string>('');
  const [dateSelected, setDateSelected] = useState<Date | undefined>();
  const [isVerified, setVerified] = useState<boolean>(false);

  const { data: branchesQuery, isLoading: branchesLoading } = useQuery({
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

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    getValues,
    setError,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  console.log('getValues().password', getValues().password);

  const {
    data: verifyPasswordData,
    mutate: verifyPasswordMutation,
    isPending: isVerifyingPassword,
    error: verifyPasswordError,
    isError: isVerifyPasswordError,
  } = useMutation({
    mutationKey: ['verify-password'],
    mutationFn: async () => verifyPassword(getValues().password),
  });

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

  useEffect(() => {
    if (verifyPasswordData) {
      setVerified(true);
    }
  }, [verifyPasswordData]);

  useEffect(() => {
    if (isVerifyPasswordError) {
      setVerified(false);
      setError('password', {
        type: 'custom',
        message: 'Invalid password',
      });
    }
  }, [isVerifyPasswordError]);

  const onSubmit = () => {
    verifyPasswordMutation();
  };

  if (!isVerified) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex w-full max-w-sm space-x-2 justify-start'>
          <div className='flex gap-1 flex-col min-w-80'>
            <Input
              type='password'
              {...register('password')}
              placeholder='Enter password to see what is this :)'
            />
            {errors.password && (
              <div className='text-sm text-red-400'>
                {errors?.password.message}
              </div>
            )}
          </div>
          <Button
            type='submit'
            disabled={!isValid || !isDirty || isVerifyingPassword}
          >
            Go
          </Button>
        </div>
      </form>
    );
  }

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='w-full grid grid-cols-3 gap-4 justify-start items-center'>
        <Combobox
          options={options}
          onChange={setRepoSelected}
          isLoading={branchesLoading}
        />
        {branches && branches.length > 0 && (
          <>
            <Combobox options={optionsBranches} onChange={setBranchSelected} />
            <DatePicker onSelect={setDateSelected} />
          </>
        )}
      </div>

      {commitsLoading && !commits && (
        <div className='w-full animate-pulse min-h-[222px]'>
          <div className='w-full h-full bg-slate-200 rounded-lg'></div>
        </div>
      )}
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
