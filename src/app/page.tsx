'use client';

import * as React from 'react';
import '@/utils/env';
import { CoreLayout } from '@/components/CoreLayout';
import { Container } from '@/components/Container';
import { skills, workExperience } from '@/utils/apis';

export default function HomePage() {
  return (
    <CoreLayout>
      <Container>
        <section className='text-base max-h-[580px]'>
          <div className='mb-8'>
            <div className='text-neutral-700 font-medium mb-3 sm:mb-6 font-roboto-mono text-2xl sm:text-4xl'>
              HI THERE!
            </div>
            <h3 className='sm:text-xl mb-4 sm:mb-6'>
              describe yourself in a few words
            </h3>
            <div>
              <div className='text-xl sm:text-2xl text-neutral-700 underline font-medium mb-3 sm:mb-4'>
                Skills
              </div>
              <div>
                <ul className='list-square ml-8'>
                  {skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='mt-4 sm:mt-6'>
              <div className='text-xl sm:text-2xl text-neutral-700 underline font-medium mb-3 sm:mb-4'>
                Work Experience
              </div>
              <div className='wrap'>
                {workExperience.map((ex, idx) => {
                  const {
                    duration,
                    company,
                    companyUrl,
                    role,
                    experience,
                    logo,
                  } = ex;
                  return (
                    <div key={idx} className='mb-6'>
                      <div
                        className={`text-neutral-700 font-medium items-center flex ${
                          logo ? 'mb-2' : ''
                        }`}
                      >
                        {logo && (
                          <img
                            className='w-10 rounded-full'
                            alt={company}
                            src={logo}
                          />
                        )}
                        {companyUrl ? (
                          <a
                            className={logo ? 'leading-none ml-3 text-lg' : ''}
                            href={companyUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {company}
                          </a>
                        ) : (
                          company
                        )}
                      </div>
                      <div className='font-normal text-neutral-700'>{role}</div>
                      <div className='font-normal text-neutral-700 opacity-75'>
                        {duration}
                      </div>
                      <ul className='list-square ml-8 mt-2'>
                        {experience.map((child, idx) => (
                          <li key={idx}>
                            {child.url ? (
                              <a
                                className='text-neutral-700 underline uppercase'
                                href={child.url}
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                {child.projectName}
                              </a>
                            ) : (
                              <div className='text-neutral-700 inline uppercase'>
                                {child.projectName}
                              </div>
                            )}
                            <>{child.projectName && ':'}</> {child.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='mt-4 sm:mt-6'>
              <div className='text-xl sm:text-2xl text-neutral-700 underline font-medium mb-3 sm:mb-4'>
                OTHER SKILLS & HOBBIES
              </div>
              <div className='mt-5'>
                <div className='text-neutral-700 font-medium'>Other skills</div>
                <ul className='list-square ml-8 mt-1'>
                  <li>
                    <div className='text-neutral-700 inline'>
                      Creativity and strong communication
                    </div>
                  </li>
                  <li>
                    <div className='text-neutral-700 inline'>
                      Teamwork and cooperation
                    </div>
                  </li>
                  <li>
                    <div className='text-neutral-700 inline'>
                      Ability to work under pressure with time constraints
                    </div>
                  </li>
                </ul>
              </div>
              <div className='mt-5'>
                <div className='text-neutral-700 font-medium'>Hobbies</div>
                <ul className='list-square ml-8 mt-1'>
                  <li>
                    <div className='text-neutral-700 inline'>
                      Coding, play football and outdoor activies.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mt-4 sm:mt-6 pb-4'>
              <div className=' text-xl sm:text-2xl text-neutral-700 underline font-medium mb-3 sm:mb-4'>
                EDUCATION
              </div>
              <div>
                Studied Software Engineering at{' '}
                <a
                  href='http://www.vanlanguni.edu.vn/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline text-neutral-700'
                >
                  Van Lang University
                </a>{' '}
                that transferred from{' '}
                <a
                  href='https://www.cmu.edu/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline text-neutral-700'
                >
                  Carnegie Mellon University
                </a>
                , US.
              </div>
              <div>Oct 2010 - May 2014</div>
              <div>GPA: 6.5</div>
            </div>
          </div>
          <div></div>
        </section>
      </Container>
    </CoreLayout>
  );
}
