import { ComponentPropsWithoutRef } from 'react';

import { TitleSection } from '@/app/about-me/components/TitleSection';

type OtherSkillsProps = ComponentPropsWithoutRef<'div'> & {
  otherSkills: string[];
  hobbies: string[];
};

export const OtherSkills = ({ otherSkills, hobbies }: OtherSkillsProps) => (
  <TitleSection title='Other skills & hobbies'>
    <div>
      <div className='text-neutral-700 font-medium dark:text-gray-200'>
        Other skills
      </div>
      <ul className='ml-8 mt-1 list-disc'>
        {otherSkills.map((skill) => (
          <li key={skill}>
            <div className='inline text-stone-500 dark:text-neutral-400'>
              {skill}
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <div className='text-neutral-700 font-medium dark:text-gray-200'>
        Hobbies
      </div>
      <ul className='ml-8 mt-1 list-disc'>
        {hobbies.map((hobby) => (
          <li key={hobby}>
            <div className='inline text-stone-500 dark:text-neutral-400'>
              {hobby}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </TitleSection>
);
