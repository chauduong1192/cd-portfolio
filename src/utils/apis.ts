import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Skill, WorkExperience } from '@/types';

dayjs.extend(relativeTime);

export const metaData = {
  name: 'Chau Duong',
  title: 'Software Engineer',
  desc: 'I am a software engineer, I have over 7 years experience developing websites, and applications with react and react native. I’m focused on turning ideas into delightful, practical software, doing my best work when collaborating closely with founders, designers, and developers.',
};

export const skills: Skill[] = [
  {
    title: 'Core Technologies',
    skills: ['React, React Native, Redux, NextJS, TypeScript'],
  },
  {
    title: 'Styling',
    skills: ['TailwindCSS, Emotion, Styled-components, SASS'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git, Yarn, NPM, VSCode, Webpack, Babel, ...'],
  },
  {
    title: 'DevOps',
    skills: ['Github Action, Digital Ocean, Netlify, Heroku, Vercel, Surge'],
  },
];

export const workExperience: WorkExperience[] = [
  {
    duration: `Apr 2022 - Now · ${dayjs().from(dayjs('2022-04'), true)}`,
    company: 'Airfoil Studio',
    companyUrl: 'https://www.airfoil.studio/',
    role: 'Product Engineer',
    logo: '/images/airfoil.png',
    experience: [
      'Airfoil is a design consultancy firm that designs almost exclusively for the Web3 industry. In Singapore, there is also a team of engineers to implement the designs for these clients. As one of the engineers, I worked with the team to helped build the UI and implemented business logic, mostly in React, TypeScript and TailwindCSS, Styled-component.',
    ],
  },
  {
    duration: `Mar 2020 - Mar 2022 · ${dayjs('2020-03').from(
      dayjs('2022-03'),
      true,
    )}`,
    company: 'TymeGlobal',
    companyUrl: 'https://www.linkedin.com/company/tymeglobal/',
    role: 'Senior Software Engineering',
    logo: '/images/tyme.jpg',
    experience: [
      'TymeGlobal is a fintech company that provides a platform for international money transfer and currency exchange. I was responsible for building the web and mobile applications for the company. I worked with the team to build the UI and implemented business logic, mostly in React, React Native, TypeScript, and TailwindCSS.',
    ],
  },
  {
    duration: `Apr 2018 - Feb 2020 · ${dayjs('2018-04').from(
      dayjs('2020-02'),
      true,
    )}`,
    company: 'Leflair',
    companyUrl: 'https://www.linkedin.com/company/leflair/',
    role: 'Senior Front-end Developer',
    logo: '/images/leflair.png',
    experience: [
      'Leflair is a Vietnamese e-commerce company that sells luxury brands at a discount. I was responsible for building the web and mobile applications for the company. I worked with the team to build the UI and implemented business logic, mostly in React, React Native, TypeScript, and TailwindCSS.',
    ],
  },
  {
    duration: `Otc 2019 - Apr 2020 · ${dayjs('2019-10').from(
      dayjs('2020-04'),
      true,
    )}`,
    company: 'ShelterApp - Freelancer',
    companyUrl: 'https://shelterapp.org/',
    role: 'React Native Developer',
    logo: '/images/shelter.png',
    experience: [
      'ShelterApp is a non-profit organization that provides a platform for people to donate to the homeless. I was responsible for building the mobile applications for the company. I worked with the team to build the UI and implemented business logic, mostly in React Native, TypeScript, and TailwindCSS.',
    ],
  },
  {
    duration: `Apr 2015 - Apr 2019 · ${dayjs('2015-04').from(
      dayjs('2019-04'),
      true,
    )}`,
    company: 'Gorillab - Freelancer Team',
    companyUrl: 'https://www.facebook.com/gorillab.co',
    role: 'Senior Front-end Developer',
    logo: '/images/gorillab.png',
    experience: [
      'I worked with the team to build the UI and implemented business logic, mostly in React, Redux, TypeScript, and TailwindCSS.',
    ],
  },
  {
    duration: `Apr 2015 - May 2018 · ${dayjs('2015-04').from(
      dayjs('2018-05'),
      true,
    )}`,
    company: 'Softfoundry',
    companyUrl: 'http://www.softfoundry.com/',
    role: 'Junior Front-end Developer',
    logo: '/images/softfoundry.png',
    experience: [
      'I worked with the team to build the UI and implemented business logic, mostly in React, Redux, TypeScript, and TailwindCSS.',
    ],
  },
  {
    duration: `Jul 2014 - Apr 2015 · ${dayjs('2014-07').from(
      dayjs('2015-04'),
      true,
    )}`,
    company: 'HuyenTanLion',
    role: 'Front-end Developer',
    experience: [
      'I worked with the team to build the UI and implemented business logic, mostly in React, Redux, TypeScript, and TailwindCSS.',
    ],
  },
];

export const workExperienceVer2 = [{}];

export const otherSkills = [
  'Creativity and strong communication',
  'Teamwork and cooperation',
  'Ability to work under pressure with time constraints',
];
export const hobbies = [' Coding, play football and outdoor activies.'];

export const education = [
  'Studied Software Engineering at Van Lang University that transferred from Carnegie Mellon University, US.',
  'Oct 2010 - May 2014',
];
