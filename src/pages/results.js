import React from "react"
import { Link } from "gatsby"

import SEO from "../components/Seo"
import Results from "../components/Results"

const SecondPage = () => (
  <>
    <SEO />
    <Link to="/">Go back to the homepage</Link>
    <Results />
  </>
)

export default SecondPage
