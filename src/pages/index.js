import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import Layout from "../components/layout"
import Seo from "../components/seo"

import './index.scss'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Showing Nataniel's profile on the left and some sample project in the right" />
    <div className="home__container">
      <div className="home__profile">
        <OutboundLink href="https://app.daily.dev/natanielmendes" alt="Link to Dev.to Nataniel Carvalho's profile">
          <StaticImage
            src="https://api.daily.dev/devcards/f9aec4e8d42049ddbddc03f35ee67424.png?r=5dd"
            width={300}
            formats={["auto", "webp", "avif", "png"]}
            alt="Nataniel Carvalho's Dev Card"
            style={{ marginBottom: `1.45rem` }}
          />
        </OutboundLink>
      </div>
      <div className="home__useful-resources">
        <p>Useful Resources to daily persistent worries:</p>
        <p>
          <Link to="/future-useful-resource/">Go to future useful resource</Link> <br />
          <Link to="/percentage-calculation/">Go to "Percentage Calculation"</Link> <br />
          <OutboundLink href="https://natanielmendes.github.io/compound-interest-calculator/">Go to "Compound Interest Calculator"</OutboundLink>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
