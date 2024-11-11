import { ComponentPropsWithoutRef } from 'react';

import { TitleSection } from '@/app/about-me/components/TitleSection';

type EducationProps = ComponentPropsWithoutRef<'div'> & {
  education: string[];
};

export const Education = ({ education }: EducationProps) => (
  <TitleSection title='Education'>
    <ul>
      {education.map((edu) => (
        <li key={edu}>
          <div className='dark:text-gray-medium'>{edu}</div>
        </li>
      ))}
    </ul>
  </TitleSection>
);
