import React from "react";
import get from 'lodash/get';
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';

import Layout from "../components/Layout_"
import SEO from "../components/SEO"

const GitHubContainer = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: space-around;
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
                        }
                      }
                    }
                  }
                }
              }
          }
        `
      );
    const repos = get(githubQuery, 'github.user.pinnedItems.edges');

    return(
        <Layout>
            <SEO title="Github Repos" />
            <div className="py-0 px-4 mx-0 my-16 sm:px-12.5 sm:my-12.5">
                <h1 className="text-black-52x3 font-medium mb-3 sm:mb-6 font-roboto text-2xl sm:text-4xl">Repository</h1>
                <GitHubContainer>
                    <div className="text-xl sm:text-2xl text-black-52x3 underline font-medium mb-3 sm:mb-4">
                        Web-next
                    </div>
                    <div>awdawdawd</div>
                    <div className="d-flex">
                        <div>123</div>
                        <div>123</div>
                        <div>123</div>
                    </div>
                </GitHubContainer>
            </div>
        </Layout>
    );
}

export default GithubRepos;
