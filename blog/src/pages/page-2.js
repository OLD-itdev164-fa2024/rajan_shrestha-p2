import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Our Journey</h1>
    <p>Our bus service is the largest provider of intercity bus transportation, 
      serving across North America with a modern, 
      environmentally friendly fleet. It has become an American icon, 
      providing safe, enjoyable, and affordable travel to nearly 16 million passengers
       each year in the United States and Canada.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
