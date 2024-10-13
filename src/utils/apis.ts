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
      'At Airfoil, a cutting-edge design consultancy firm specializing in Web3 projects, I played a crucial role as a Product Engineer within their Singapore-based development team.',
      'Collaborating closely with designers to translate innovative Web3 concepts into functional, user-friendly interfaces.',
      'Spearheading the development of complex React components, ensuring seamless integration of blockchain functionalities.',
      'Contributing to the development of reusable component libraries and design systems tailored for Web3 projects.',
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
      'At TymeGlobal, a pioneering fintech company specializing in international money transfers and currency exchange, I played a pivotal role as a senior software engineer.',
      'My primary focus was on developing robust and user-friendly web. Implementing complex financial logic and integrating with backend services to handle real-time currency conversions, transfer tracking, and account management.',
      'Utilizing TypeScript to enhance code quality, maintainability, and catch potential errors early in the development process.',
      'Optimizing application performance, focusing on fast load times and smooth user interactions, crucial for financial transactions.',
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
      'At Leflair, a prominent Vietnamese e-commerce platform specializing in discounted luxury brands, I experienced significant professional growth and made substantial contributions to the company.',
      'Promoted to Senior Front-End Developer within one year, demonstrating rapid skill advancement and leadership potential.',
      'Collaborated closely with the marketing team and Product Owner to conceptualize, design, and implement new features that enhanced user experience and drove sales.',
      'Architected and implemented scalable front-end solutions to support Leflairs growing user base and traffic.',
      'Optimized website performance to handle millions of monthly visitors while maintaining exceptional uptime.',
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
      'At ShelterApp, a non-profit organization dedicated to connecting homeless individuals with vital resources and facilitating donations, I played a crucial role in developing a mobile-first platform that bridges the gap between those in need and those who can help',
      'Collaborated closely with the backend team and Product Owner to define and implement solutions for locating non-profit shelters and services for the homeless',
      'Led the front-end development of the mobile application using React Native, ensuring a seamless user experience across both iOS and Android platforms',
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
      'As a key member of Gorillab, a dynamic freelance team comprising four highly skilled developers, I contributed to the creation of numerous successful products with a strong focus on exceptional user experience',
      'Our expertise in React and React Native allowed us to deliver high-quality, user-centric solutions for a diverse clientele.',
      'Collaborated closely with three other talented developers in a flat, agile structure',
      'Maintained a startup-like atmosphere, fostering innovation and rapid development cycles',
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
    experience: [],
  },
  {
    duration: `Jul 2014 - Apr 2015 · ${dayjs('2014-07').from(
      dayjs('2015-04'),
      true,
    )}`,
    company: 'HuyenTanLion',
    role: 'Front-end Developer',
    experience: [],
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
