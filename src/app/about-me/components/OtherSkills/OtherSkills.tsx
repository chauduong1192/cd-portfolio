import { ComponentPropsWithoutRef } from 'react';

import { TitleSection } from '@/app/about-me/components/TitleSection';

type OtherSkillsProps = ComponentPropsWithoutRef<'div'> & {
  otherSkills: string[];
  hobbies: string[];
};

export const OtherSkills = ({ otherSkills, hobbies }: OtherSkillsProps) => (
  <TitleSection title='Other skills & hobbies'>
    <div>
      <div className='text-gray-dark font-medium dark:text-gray-lighter'>
        Other skills
      </div>
      <ul className='ml-8 mt-1 list-disc'>
        {otherSkills.map((skill) => (
          <li key={skill}>
            <div className='inline text-slate-gray dark:text-gray-medium'>
              {skill}
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <div className='text-gray-dark font-medium dark:text-gray-lighter'>
        Hobbies
      </div>
      <ul className='ml-8 mt-1 list-disc'>
        {hobbies.map((hobby) => (
          <li key={hobby}>
            <div className='inline text-slate-gray dark:text-gray-medium'>
              {hobby}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </TitleSection>
);
