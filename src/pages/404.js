import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex justify-center items-center flex-col">
      <div
        className="text-black-52x3 font-medium mb-2 font-roboto text-2xl sm:text-4xl uppercase"
      >
        404 not found
      </div>
      <p className="text-center">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage