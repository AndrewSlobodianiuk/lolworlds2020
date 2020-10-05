import React from "react"
import { Link } from "gatsby"

import Seo from "../components/Seo"
import Schedule from "../components/Schedule"

const IndexPage = () => (
  <>
    <Seo />
    <Link to="/results/">Go to page 2</Link> <br />
    <Schedule />
  </>
)

export default IndexPage
