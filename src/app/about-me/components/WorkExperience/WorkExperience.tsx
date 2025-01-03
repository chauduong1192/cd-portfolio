import { ComponentPropsWithoutRef } from 'react';

import NextImage from '@/components/NextImage';

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
                  <NextImage
                    width={40}
                    height={40}
                    useSkeleton
                    classNames={{
                      image: 'rounded-full size-10 bg-slate-gray',
                    }}
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
                      className='text-lg leading-6 dark:text-gray-lighter text-gray-dark font-medium'
                      href={companyUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {company}
                    </a>
                  ) : (
                    <div className='leading-none text-lg dark:text-gray-lighter text-gray-dark font-medium'>
                      {company}
                    </div>
                  )}
                  <div className='font-normal text-gray-dark dark:text-gray-lighter'>
                    {role}
                  </div>
                </div>
              </div>
              <div className='font-normal text-gray-dark/75 dark:text-gray-lighter/75'>
                {duration}
              </div>
              <ul className='mt-2 ml-8 list-disc flex flex-col gap-1'>
                {experience.map((desc, idx) => (
                  <li key={idx}>
                    <div className='dark:text-gray-medium inline text-balance'>
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
