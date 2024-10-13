import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

import { TitleSection } from '@/app/about-me/components/TitleSection';
import { cn } from '@/utils/classnames';

import { WorkExperience as WorkExperienceType } from '@/types';

type WorkExperienceProps = ComponentPropsWithoutRef<'div'> & {
  workExperience: WorkExperienceType[];
};

export const WorkExperience = ({ workExperience }: WorkExperienceProps) => {
  return (
    <TitleSection title='Work Experience'>
      <div className='flex gap-6 flex-col'>
        {workExperience.map(
          ({ duration, company, companyUrl, role, experience, logo }) => (
            <div key={company}>
              <div className={cn('items-center flex mb-2')}>
                {logo && (
                  <Image
                    width={40}
                    height={40}
                    className='rounded-full'
                    alt={company}
                    src={logo}
                  />
                )}
                <div
                  className={cn('flex flex-col', {
                    'ml-3': !!logo,
                  })}
                >
                  {companyUrl ? (
                    <a
                      className='text-lg leading-6 dark:text-gray-200 text-neutral-700 font-medium'
                      href={companyUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {company}
                    </a>
                  ) : (
                    <div className='leading-none text-lg dark:text-gray-200 text-neutral-700 font-medium'>
                      {company}
                    </div>
                  )}
                  <div className='font-normal text-neutral-700 dark:text-gray-200'>
                    {role}
                  </div>
                </div>
              </div>
              <div className='font-normal text-neutral-700/75 dark:text-gray-200/75'>
                {duration}
              </div>
              <ul className='mt-2 flex flex-col gap-1'>
                {experience.map((desc, idx) => (
                  <li key={idx}>
                    <div className='dark:text-neutral-400 inline text-balance'>
                      {desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ),
        )}
      </div>
    </TitleSection>
  );
};
