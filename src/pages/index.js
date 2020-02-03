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
        <div className="mb-8">
          <div
            className="mb-8 uppercase text-white"
            style={{ letterSpacing: '0.32em' }}
          >
            hi, i'm chau duong  
          </div>
          <div
            className="text-black-52x3 font-medium"
            style={{
              letterSpacing: '-0.04em',
              lineHeight: '1.4em',
              fontFamily: 'Roboto Mono, monospace',
              fontSize: 40
            }}
          >
            I help companies deliver delightful digital experiences
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </Layout> 
)

export default IndexPage
