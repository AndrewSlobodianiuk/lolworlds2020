import React from "react"
import { Link } from "gatsby"

import SEO from "../components/Seo"
import Schedule from "../components/Schedule"

const IndexPage = () => (
  <>
    <SEO />
    <Link to="/results/">Go to page 2</Link> <br />
    <Schedule />
  </>
)

export default IndexPage
