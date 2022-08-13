import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FutureUsefulResource = () => (
  <Layout>
    <Seo title="Future useful resource" />
    <h1>Hi from the future useful resource</h1>
    <p>Welcome to future useful resource</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FutureUsefulResource
