import { Container } from '@/components/Container';

import { Education } from '@/app/about-me/components/Education';
import { OtherSkills } from '@/app/about-me/components/OtherSkills';
import { Skills } from '@/app/about-me/components/Skills';
import { WorkExperience } from '@/app/about-me/components/WorkExperience';
import {
  education,
  hobbies,
  otherSkills,
  skills,
  workExperience,
} from '@/utils/apis';

export const metadata = {
  title: 'About me',
};

export default function AboutMe() {
  return (
    <Container>
      <section className='text-base'>
        <div className='flex gap-4 sm:gap-7 flex-col'>
          <Skills skills={skills} />
          <WorkExperience workExperience={workExperience} />
          <OtherSkills otherSkills={otherSkills} hobbies={hobbies} />
          <Education education={education} />
        </div>
      </section>
    </Container>
  );
}
