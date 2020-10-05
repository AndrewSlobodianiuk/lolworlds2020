import React from "react"

import Seo from "../Seo"
import Results from "../components/Results"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"

const SecondPage = () => (
  <>
    <Seo />
    <Layout>
      <Navigation results />
      <Results />
    </Layout>
  </>
)

export default SecondPage
