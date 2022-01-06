import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo-tag"
import Container from "../components/container"

import { skills, workExperience } from '../../api';

const IndexContainer = styled.div`
  max-height: 580px;
`;

const HelloWord = styled.div`
  letter-spacing: -0.04em;
  line-height: 1.4em;
`;

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return(
    <Layout>
      <SEO title="Anything from me" />
      <Container>
        <IndexContainer className="text-base">
          <div className="mb-8">
            <HelloWord
              className="text-black-52x3 font-medium mb-3 sm:mb-6 font-roboto text-2xl sm:text-4xl">
              HI!
            </HelloWord>
            <h3 className="sm:text-xl mb-4 sm:mb-6">
              {site.siteMetadata.description}
            </h3>
            <div>
              <div className="text-xl sm:text-2xl text-black-52x3 underline font-medium mb-3 sm:mb-4">
                Skills
              </div>
              <div>
                <ul className="list-square ml-8">
                  {skills.map((skill, idx) => 
                    <li key={idx}>{skill}</li>  
                  )}
                </ul>
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <div className="text-xl sm:text-2xl text-black-52x3 underline font-medium mb-3 sm:mb-4">
              Work Experience
              </div>
              <div className="wrap">
                {workExperience.map((ex, idx) => {
                  const { duration, company, companyUrl, role, experience, logo } = ex;
                  return(
                    <div key={idx} className="mb-5">
                      <div className={`text-black-52x3 font-medium items-center flex ${logo ? 'mb-2' : ''}`}>
                        {logo && <img className={`w-10 ${company !== 'Leflair' ? 'rounded-full' : ''}`} alt={company} src={logo} />}
                        {
                          companyUrl ?
                          <a
                            className={logo ? 'leading-none ml-3 text-lg' : ''}
                            href={companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >{company}</a> :
                          company
                        }
                      </div>  
                      <div className="font-normal text-black-52x3">
                        {role}
                      </div>
                      <div className="font-normal text-black-52x3 opacity-75">{duration}</div>
                      <ul className="list-square ml-8 mt-2">
                        {experience.map((child, idx) => 
                          <li key={idx}>
                            {child.url ? 
                              <a
                                className="text-black-52x3 underline uppercase"
                                href={child.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {child.projectName}
                              </a> :
                              <div className="text-black-52x3 inline uppercase">
                                {child.projectName}
                              </div>
                            }<>{child.projectName && ':'}</> {child.desc}
                          </li>
                        )}
                      </ul>
                    </div>
                  );
                }
                )}
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <div className="text-xl sm:text-2xl text-black-52x3 underline font-medium mb-3 sm:mb-4">
              OTHER SKILLS & HOBBIES
              </div>
              <div className="mt-5">
                <div className="text-black-52x3 font-medium">Other skills</div>
                <ul className="list-square ml-8 mt-1">
                  <li>
                    <div className="text-black-52x3 inline">Creativity and strong communication</div>
                  </li>
                  <li>
                    <div className="text-black-52x3 inline">Teamwork and cooperation</div>
                  </li>
                  <li>
                    <div className="text-black-52x3 inline">Ability to work under pressure with time constraints</div>
                  </li>
                </ul>
              </div>
              <div className="mt-5">
                <div className="text-black-52x3 font-medium">Hobbies</div>
                <ul className="list-square ml-8 mt-1">
                  <li>
                    <div className="text-black-52x3 inline">Coding, playing football, guitar and traveling</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 pb-4">
              <div className=" text-xl sm:text-2xl text-black-52x3 underline font-medium mb-3 sm:mb-4">
              EDUCATION
              </div>
              <div>Studied Software Engineering at <a href="http://www.vanlanguni.edu.vn/" target="_blank" rel="noopener noreferrer" className="inline text-black-52x3">Van Lang University</a> that transferred from <a href="https://www.cmu.edu/" target="_blank" rel="noopener noreferrer" className="inline text-black-52x3">Carnegie Mellon University</a>, US.</div>
            </div>
          </div>
          <div></div>
        </IndexContainer>
      </Container>
    </Layout> 
  );
}

export default IndexPage
