import React from "react"
import get from "lodash/get"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/Container"

const GithubWrap = styled.a`
  width: 300px;
  height: 134px;
  cursor: pointer;
  transition: background 0.5s;

  ${media.lessThan("medium")`
    width: 100%;
  `}

  &:hover {
    background: #ffffff87;
  }

  & .overflow-x-scroll::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;
  }
  
`;

const GithubRepos = () => {
  const githubQuery = useStaticQuery(
    graphql`
      query {
        github {
          user(login: "chauduong1192") {
            pinnedItems(first: 10) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    name
                    languages(first: 10) {
                      edges {
                        node {
                          id
                          name
                        }
                      }
                    }
                    description
                    stargazers(first: 10) {
                      totalCount
                    }
                    resourcePath
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const repos = get(githubQuery, "github.user.pinnedItems.edges")

  const renderGitHubList = () => {
    return repos.map(({ node }) => (
      <GithubWrap
        key={node.id}
        className="flex flex-col justify-around flex-wrap bg-white rounded p-3 mb-5 mr-0 sm:w-full sm:mr-3"
        href={`https://github.com${node.resourcePath}`}
        target="_blank"
      >
        <div className="text-base text-lg text-black-52x3 font-medium mb-1 flex items-center">
          <div className="flex-grow">{node.name}</div>
          <div className="flex-grow-0 text-sm">
            {node.stargazers?.totalCount} &#9829;
          </div>
        </div>
        <div className="mb-4 truncate w-full">{node.description}</div>
        <div className="flex flex-row flex-no-wrap w-full overflow-x-scroll">
          {node.languages?.edges.slice(0, 4).map(({ node }) => (
            <div
              key={node.id}
              className=" last:mr-0 mr-2 rounded bg-primary py-1 px-3 text-sm text-black-52x3"
            >
              {node.name}
            </div>
          ))}
        </div>
      </GithubWrap>
    ))
  }
  return (
    <Layout>
      <SEO title="Github Repos" />
      <Container>
        <h1 className="text-black-52x3 font-medium mb-3 sm:mb-6 font-roboto text-2xl sm:text-4xl">
          Repositories
        </h1>
        <div className="flex justify-start flex-wrap">
          {renderGitHubList()}
        </div>
      </Container>
    </Layout>
  )
}

export default GithubRepos
