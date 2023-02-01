import * as dayjs from "dayjs"
import * as relativeTime from "dayjs/plugin/relativeTime"

import airfoilLogo from "./src/images/airfoil.png"
import tymeLogo from "./src/images/tyme.jpg"
import leflairLogo from "./src/images/leflair.png"
import gorillabLogo from "./src/images/gorillab.png"
import shelterLogo from "./src/images/shelter.png"
import softfoundryLogo from "./src/images/softfoundry.png"

dayjs.extend(relativeTime)

export const skills = [
  "React, React Native, Redux, NextJs, GastbyJs, Strapi, TypeScript, Webpack, Babel, Tslint, Progressive Web App.",
  "Style-JSX, Styled-components, Bootstrap, TailwindCSS, SASS.",
  "SEO audits, site performance, marketing intergrations(GTM, GA, RTB-house, Aimtell, FB Pixel, ...).",
  "GIT, Yarn, NPM, VSCode, Xcode, Android Studio, Trello, Jira, Sketch, Figma.",
  "Digital Ocean, Netlify, Heroku, Vercel, Surge.",
]

export const workExperience = [
  {
    duration: `Apr 2022 - Now · ${dayjs().from(dayjs("2022-04"), true)}`,
    company: "Airfoil Studio",
    companyUrl: "https://www.airfoil.studio/",
    role: "Product Engineer",
    logo: airfoilLogo,
    experience: [
      {
        projectName: "",
        desc:"Airfoil is a design consultancy firm that designs almost exclusively for the Web3 industry. In Singapore, there is also a team of engineers to implement the designs for these clients. As one of the engineers, I worked with the team to helped build the UI and implemented business logic, mostly in React, TypeScript and TailwindCSS, Styled-component.",
      },
    ],
  },
  {
    duration: `Mar 2020 - Mar 2022 · ${dayjs("2020-03").from(
      dayjs("2022-03"),
      true
    )}`,
    company: "TymeGlobal",
    companyUrl: "https://www.linkedin.com/company/tymeglobal/",
    role: "Senior Software Engineering",
    logo: tymeLogo,
    experience: [
      {
        projectName: "Core Payment Services",
        desc:
          "In the period of 6 months, I had a chance to working with backend team and BA team to define, design, implement the new payment flow solution for new Philipin area based on Java Spring Boot, BDD testing, Microservices, Serverless and AWS",
      },
      {
        projectName: "Internet Banking",
        url: "https://bank.tymedigital.co.za/",
        desc:
          "Maintenance and develop many new features for IB as bill payment, goal save, new gen for pin pad.",
      },
      {
        projectName: "The Bamboo Mock",
        url: "https://github.com/chauduong1192/thebambooMock",
        desc:
          "The extension helps my team by mocking API and changing their response, esponse time and status, user can try all test case scenario like long loading time, error states, or any missing or incorrect data. ",
      },
    ],
  },
  {
    duration: `Apr 2018 - Feb 2020 · ${dayjs("2018-04").from(
      dayjs("2020-02"),
      true
    )}`,
    company: "Leflair",
    companyUrl: "https://www.linkedin.com/company/leflair/",
    role: "Senior Front-end Developer",
    logo: leflairLogo,
    experience: [
      {
        projectName: "leflair.com",
        url: 'https://www.leflair.com/vn/',
        desc:
          "My responsibility at Leflair in first 4 months is build up the new main website based on new technologies as NextJs (server side rendering by using Express), react, redux, sass, style-jsx, PWA.",
      },
      {
        projectName: "About Lefair",
        url: 'https://pages.leflair.com/about-us',
        desc:
          "Build up the static page based on gastby, styled-jsx and using headless cms (strapi) to manage the content.",
      },
      {
        projectName: "web-next",
        url: "https://github.com/chauduong1192/web-next",
        desc:
          "A well-structured production ready Next.js boilerplate with React, Typescript, Redux, Jest, Express, Style-jsx, Taildwindlcss, EnvConfig, Fetch, Reverse Proxy, Bundle Analyzer and Built-in Project CLI.",
      },
      {
        projectName: "simple-ecom",
        url: "http://ecommerce-simple.surge.sh/",
        desc:
          "This is the first challenge before I worked at Leflair that is build the simple ecom page with few pages by using create-react-app.",
      },
    ],
  },
  {
    duration: `Otc 2019 - Apr 2020 · ${dayjs("2019-10").from(
      dayjs("2020-04"),
      true
    )}`,
    company: "ShelterApp - Freelancer",
    companyUrl: "https://shelterapp.org/",
    role: "React Native Developer",
    logo: shelterLogo,
    experience: [
      {
        desc:
          "Working with the backend team to build a small app that helps homeless and low-income families connect to services using the web and mobile apps where they can find Food, Shelter, Health, Work and other resources.",
      },
    ],
  },
  {
    duration: `Apr 2015 - Apr 2019 · ${dayjs("2015-04").from(
      dayjs("2019-04"),
      true
    )}`,
    company: "Gorillab - Freelancer Team",
    companyUrl: "https://www.facebook.com/gorillab.co",
    role: "Senior Front-end Developer",
    logo: gorillabLogo,
    experience: [
      {
        projectName: "topon.tech",
        url: "https://www.topon.tech/",
        desc:
          "Landing page site for TopOnSeek company that just show Web & mobile application development solution. I used gastby to build this project.",
      },
      {
        projectName: "5mins.fun",
        url: "https://github.com/gorillab/reader-web",
        desc:
          "The site gathers technology news from famous sites such as medium, hackernew, reader.one: React, Redux, Bootstrap 4, SASS, Webpack.",
      },
      {
        projectName: "holdtodie.fun",
        url: "https://github.com/phatpham9/holdtodie.fun",
        desc:
          "The simple web I and my friends were builded it when free time to tracking the cryptocurrencies. This is based on MERN stack (MongoDB, Express, React, Node.js).",
      },
      {
        projectName: "ishopmgt",
        desc:
          "Internal website to Order/Shipment management for bido shop : Angularjs, Bootstrap, Express, MySQL.",
      },
      {
        projectName: "winwheel",
        desc:
          "Internal website to create event, mini game for bido shop : Angularjs, Bootstrap, Express, MySQL.",
      },
    ],
  },
  {
    duration: `Apr 2015 - May 2018 · ${dayjs("2015-04").from(
      dayjs("2018-05"),
      true
    )}`,
    company: "Softfoundry",
    companyUrl: "http://www.softfoundry.com/",
    role: "Junior Front-end Developer",
    logo: softfoundryLogo,
    experience: [
      {
        projectName: "vmeet web service",
        desc:
          "Provide API to end user and third-part app: React, Redux, Bootstrap 4, SASS, Webpack.",
      },
      {
        projectName: "uteachme",
        desc:
          "E-Learning solutions for schools or universities to teacher can online teaching: React, Redux, Bootstrap, Webpack, Python.",
      },
      {
        projectName: "reactstarter",
        desc:
          "Based on create react app of facebook and add some techs as redux, bootstrap 4, SASS.",
      },
      {
        projectName: "sf call center",
        desc:
          "Provide video call solutions for businesses: Angularjs, Bootstrap, Bower, Gruntjs, Express, MongoDB.",
      },
      {
        projectName: "vmeetplus",
        desc:
          "Video call, p2p, whiteboard: Jquery, Bootstrap, WebRTC, CI PHP, MySQL.",
      },
    ],
  },
  {
    duration: `Jul 2014 - Apr 2015 · ${dayjs("2014-07").from(
      dayjs("2015-04"),
      true
    )}`,
    company: "HuyenTanLion Company",
    role: "Front-end Developer",
    experience: [
      {
        projectName: "fundmenow",
        desc: "Charity fund project: Jquery, Bootstrap, CI PHP, MySQL.",
      },
    ],
  },
]
