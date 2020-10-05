import React from "react"

import Seo from "../Seo"
import Schedule from "../components/Schedule"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"

const IndexPage = () => (
  <>
    <Seo />
    <Layout>
      <Navigation />
      <Schedule />
    </Layout>
  </>
)

export default IndexPage
