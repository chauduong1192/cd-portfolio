import { ComponentPropsWithoutRef } from 'react';

import { TitleSection } from '@/app/about-me/components/TitleSection';

import { Skill } from '@/types';

type SkillsProps = ComponentPropsWithoutRef<'div'> & {
  skills: Skill[];
};

export const Skills = ({ skills }: SkillsProps) => (
  <TitleSection title='Skills'>
    <ul className='ml-4 list-disc'>
      {skills.map(({ title, skills }, idx) => (
        <li key={idx}>
          <div className='text-gray-dark font-medium text-lg inline dark:text-gray-lighter'>
            {title}:{' '}
            <span className='text-base font-normal text-slate-gray dark:text-gray-medium'>
              {skills}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </TitleSection>
);
