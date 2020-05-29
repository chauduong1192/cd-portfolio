import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

import tymeLogo from "./src/images/tyme.jpg";
import leflairLogo from "./src/images/leflair.png";
import gorillabLogo from "./src/images/gorillab.png";

dayjs.extend(relativeTime)

export const lastSkills = [
  'React, React Native, Redux, NextJs, GastbyJs, TypeScript, Webpack, Babel, Tslint, Workbox.',
  'Style-JSX, CSS in js, Styled-components, Bootstrap, TailwindCSS, SASS.',
  'SEO audits, site performance, marketing intergrations(GTM, GA, RTB-house, Aimtell, FB Pixel, ...).',
  'GIT, Yarn, VSCode, Xcode, Android Studio, Trello, Jira, Sketch, Figma.',
];

export const workExperience = [
  {
    duration: `Mar 2020 - Now · ${dayjs().from(dayjs('Mar 2020'), true)}`,
    company: 'TymeGlobal',
    companyUrl: 'https://www.linkedin.com/company/tymeglobal/',
    role: 'Software Engineering',
    logo: tymeLogo,
    experience: []
  },
  {
    duration: `Otc 2019 - Apr 2020 · ${dayjs('Otc 2019').from(dayjs('Apr 2020'), true)}`,
    company: 'ShelterApp - Freelancer',
    companyUrl: 'https://shelterapp.org/',
    role: 'React Native Developer',
    experience: [
      {
        desc: 'Working with the backend team to build a small app that helps homeless and low-income families connect to services using the web and mobile apps where they can find Food, Shelter, Health, Work and other resources.'
      },
    ]
  },
  {
    duration: `May 2018 - Feb 2020 · ${dayjs('May 2018').from(dayjs('Feb 2020'), true)}`,
    company: 'Leflair',
    companyUrl: 'https://www.linkedin.com/company/leflair/',
    role: 'Senior Front-end Developer',
    logo: leflairLogo,
    experience: [
      {
        projectName: 'leflair.vn',
        // url: 'https://www.leflair.vn/vn/',
        desc: 'My responsibility at Leflair in first 4 months is build up the new main website based on new technologies as NextJs (server side rendering by using Express), react, redux, sass, style-jsx, PWA...'
      },
      {
        projectName: 'promotion-page',
        // url: 'https://pages.leflair.vn/promotions',
        desc: 'Maintenance and develop new features, new campaigns, new vouchers for this page.'
      },
      {
        projectName: 'web-next',
        url: 'https://github.com/chauduong1192/web-next',
        desc: 'A well-structured production ready Next.js boilerplate with React, Typescript, Redux, Jest, Express, Style-jsx, Taildwindlcss, EnvConfig, Fetch, Reverse Proxy, Bundle Analyzer and Built-in Project CLI.'
      },
      {
        projectName: 'simple-ecom',
        url: 'http://ecommerce-simple.surge.sh/',
        desc: 'This is the first challenge before I worked at Leflair that is build the simple ecom page with few pages by using create-react-app'
      },
    ]
  },
  {
    duration: `Apr 2015 - Apr 2019 · ${dayjs('Apr 2015').from(dayjs('Apr 2019'), true)}`,
    company: 'Gorillab - Freelancer Team',
    companyUrl: 'https://www.facebook.com/gorillab.co',
    role: 'Senior Front-end Developer',
    logo: gorillabLogo,
    experience: [
      {
        projectName: 'topon.tech',
        url: 'https://www.topon.tech/',
        desc: 'Landing page site for TopOnSeek company that just show Web & mobile application development solution. I used gastby to build this project.'
      },
      {
        projectName: '5mins.fun',
        url: 'https://github.com/gorillab/reader-web',
        desc: 'The site gathers technology news from famous sites such as medium, hackernew, reader.one: React, Redux, Bootstrap 4, SASS, Webpack.'
      },
      {
        projectName: 'holdtodie.fun',
        url: 'https://github.com/phatpham9/holdtodie.fun',
        desc: 'The simple web I and my friends were builded it when free time to tracking the cryptocurrencies. This is based on MERN stack (MongoDB, Express, React, Node.js).'
      },
      {
        projectName: 'ishopmgt',
        desc: 'Internal website to Order/Shipment management for bido shop : Angularjs, Bootstrap, Express, MySQL.'
      },
      {
        projectName: 'winwheel',
        desc: 'Internal website to create event, mini game for bido shop : Angularjs, Bootstrap, Express, MySQL.'
      },
    ]
  },
  {
    duration: `Apr 2015 - May 2018 · ${dayjs('Apr 2015').from(dayjs('May 2018'), true)}`,
    company: 'Softfoundry Company',
    companyUrl: 'http://www.softfoundry.com/',
    role: 'Junior Front-end Developer',
    experience: [
      {
        projectName: 'vmeet web service',
        desc: 'Provide API to end user and third-part app: React, Redux, Bootstrap 4, SASS, Webpack.'
      },
      {
        projectName: 'uteachme',
        desc: 'E-Learning solutions for schools or universities to teacher can online teaching: React, Redux, Bootstrap, Webpack, Python.'
      },
      {
        projectName: 'reactstarter',
        desc: 'Based on create react app of facebook and add some techs as redux, bootstrap 4, SASS.'
      },
      {
        projectName: 'sf call center',
        desc: 'Provide video call solutions for businesses: Angularjs, Bootstrap, Bower, Gruntjs, Express, MongoDB.'
      },
      {
        projectName: 'vmeetplus',
        desc: 'Video call, p2p, whiteboard: Jquery, Bootstrap, WebRTC, CI PHP, MySQL.'
      },
    ]
  },
  {
    duration: `Jul 2014 - Apr 2015 · ${dayjs('Jul 2014').from(dayjs('Apr 2015'), true)}`,
    company: 'HuyenTanLion Company',
    role: 'Front-end Developer',
    experience: [
      {
        projectName: 'fundmenow',
        desc: 'Charity fund project: Jquery, Bootstrap, CI PHP, MySQL.'
      },
    ]
  },
];


