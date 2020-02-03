import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        margin: '60px 0',
        padding: '0 60px'
      }}
    >
      <div style={{
        maxHeight: 580,
      }}
      className="text-base"
      >
        <div className="mb-8"
          style={{
            // maxWidth: 646
          }}
        >
          {/* <div
            className="mb-8 uppercase"
            style={{ letterSpacing: '0.32em' }}
          >
            hi!
          </div> */}
          <div
            className="text-black-52x3 font-medium mb-6 font-roboto"
            style={{
              letterSpacing: '-0.04em',
              lineHeight: '1.4em',
              fontSize: 40
            }}
          >
            HI!
          </div>
          <div className="text-xl mb-6">
            I am a front-end web developer.
            I am not only hope I have challenges to become a
            full-stack developer, but also I am trying
            to learn new skill, new technologies to
            meet my career path.
          </div>
          <div>
            <div className="text-2xl text-black-52x3 underline font-medium mb-4">
              Last Skills
            </div>
            <div>
              <ul className="list-square ml-8">
                <li>
                  React, React Native, Redux, NextJs, GastbyJs, TypeScript, Webpack, Babel, Tslint, Workbox.
                </li>
                <li>
                  Style-JSX, CSS in js, Bootstrap, TailwindCSS, SASS.
                </li>
                <li>
                  SEO audits, site performance, marketing intergrations(Google Analytics, RTB-house, Aimtell, FB Pixel, ...).
                </li>
                <li>
                  GIT, Yarn, VSCode, Xcode, Android Studio, Trello, Jira, Sketch.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-2xl text-black-52x3 underline font-medium mb-4">
            Work Experience
            </div>
            <div>
              <div className="mb-5">
                <div className="text-black-52x3 font-medium">May 2018 - Now</div>
                <div className="font-normal text-black-52x3">Leflair Vietnam and Philippines</div>
                <div className="font-normal text-black-52x3">Senior Front-end Developer</div>
                <ul className="list-square ml-8 mt-2">
                  <li>
                    <a
                      href="https://www.leflair.vn/vn/"
                      target="_blank"
                      className="text-black-52x3 underline">LEFLAIR.VN</a>: 
                    My responsibility at Leflair in first 4 months is build up the new main website
                    based on new technologies as NextJs (server side rendering by using Express), react, redux, sass, style-jsx, PWA...
                  </li>
                  <li>
                    <a
                      href="https://pages.leflair.vn/promotions"
                      target="_blank"
                      className="text-black-52x3 underline">PROMOTION-PAGE</a>: 
                    Maintenance and develop new features, new campaigns, new vouchers for this page.
                  </li>
                  <li>
                    <a
                      href="https://github.com/chauduong1192/web-next"
                      target="_blank"
                      className="text-black-52x3 underline">WEB-NEXT</a>:
                      A well-structured production ready Next.js boilerplate with React, Typescript, Redux, Jest, Express, Style-jsx, Taildwindlcss, EnvConfig, Fetch, Reverse Proxy, Bundle Analyzer and Built-in Project CLI.
                  </li>
                  <li>
                    <a
                      href="http://ecommerce-simple.surge.sh/"
                      target="_blank"
                      className="text-black-52x3 underline">SIMPLE-ECOM</a>:
                      This is the first challenge before I worked at Leflair that is build the simple ecom page with 3 days by create-react-app (no SSR).
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <div className="text-black-52x3 font-medium">Apr 2015 - Apr 2019</div>
                <div className="font-normal text-black-52x3">Freelancer Team</div>
                <div className="font-normal text-black-52x3">Senior Front-end Developer</div>
                <ul className="list-square ml-8 mt-2">
                  <li>
                    <a
                      href="https://github.com/gorillab/reader-web"
                      target="_blank"
                      className="text-black-52x3 underline">5MINS.FUN</a>:
                    The site gathers technology news from famous sites such as medium, hackernew : React, Redux, Bootstrap 4, SASS, Webpack.
                  </li>
                  <li>
                    <a
                      href="https://github.com/phatpham9/holdtodie.fun"
                      target="_blank"
                      className="text-black-52x3 underline">HOLDTODIE</a>:
                    The simple web I and my friends were builded it when free time to tracking the cryptocurrencies. This is based on MERN stack (MongoDB, Express, React, Node.js).
                  </li>
                  <li>
                    <div
                      className="text-black-52x3 inline">WEB-NEXT</div>:
                      Internal website to Order/Shipment management for <a href="https://bidoshop.com/" target="_blank" className="text-black-52x3 underline">bido shop</a> : Angularjs, Bootstrap, Express, MySQL.
                  </li>
                  <li>
                    <div
                      className="text-black-52x3 inline">WINWHEEL</div>:
                      Create event, mini game for <a href="https://bidoshop.com/" target="_blank" className="text-black-52x3 underline">bido shop</a> : Angularjs, Bootstrap, Express, MySQL.
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <div className="text-black-52x3 font-medium">Apr 2015 - May 2018</div>
                <div className="font-normal text-black-52x3">Softfoundry Company</div>
                <div className="font-normal text-black-52x3">Front-end Developer</div>
                <ul className="list-square ml-8 mt-2">
                  <li>
                    <div className="text-black-52x3 inline">VMEET WEB SERVICE</div>:
                    Provide API to end user and third-part app: React, Redux, Bootstrap 4, SASS, Webpack.
                  </li>
                  <li>
                    <div className="text-black-52x3 inline">UTEACHME</div>:
                    E-Learning solutions for schools or universities to teacher can online teaching: React, Redux, Bootstrap, Webpack, Python.
                  </li>
                  <li>
                    <div className="text-black-52x3 inline">REACT STARTER</div>:
                    Based on create react app of facebook and add some techs as redux, bootstrap 4, SASS.
                  </li>
                  <li>
                    <div className="text-black-52x3 inline">SF CALL CENTER</div>:
                    Provide video call solutions for businesses: Angularjs, Bootstrap, Bower, Gruntjs, Express, MongoDB
                  </li>
                  <li>
                    <div className="text-black-52x3 inline">VMEETPLUS</div>:
                    Video call, p2p, whiteboard: Jquery, Bootstrap, WebRTC, CI PHP, MySQL.
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <div className="text-black-52x3 font-medium">Jul 2014 - Apr 2015</div>
                <div className="font-normal text-black-52x3">HuyenTanLion Company</div>
                <div className="font-normal text-black-52x3">Front-end Developer</div>
                <ul className="list-square ml-8 mt-2">
                  <li>
                    <div className="text-black-52x3 inline">FUNDMENOW</div>:
                    Charity fund project: Jquery, Bootstrap, CI PHP, MySQL.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-2xl text-black-52x3 underline font-medium mb-4">
            OTHER SKILLS & HOBBIES
            </div>
            <div className="mt-5">
              <div className="text-black-52x3 font-medium">Other skills</div>
              <ul className="list-square ml-8 mt-1">
                <li>
                  <div className="text-black-52x3 inline">Creativity and communication</div>
                </li>
                <li>
                  <div className="text-black-52x3 inline">Teamwork and cooperation</div>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <div className="text-black-52x3 font-medium">Coding</div>
              <ul className="list-square ml-8 mt-1">
                <li>
                  <div className="text-black-52x3 inline">Playing football, guitar and traveling</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-2xl text-black-52x3 underline font-medium mb-4">
            EDUCATION
            </div>
            <div>Studied software Engineering at <div className="inline text-black-52x3">Van Lang University</div> that transferred from <div className="inline text-black-52x3">Carnegie Mellon University</div>, US.</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </Layout> 
)

export default IndexPage
