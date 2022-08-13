// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const [firstPercentageValue, setFirstPercentageValue] = React.useState(5);
  const [secondPercentageValue, setSecondPercentageValue] = React.useState(100);
  const [result, setResult] = React.useState(5);

  React.useEffect(() => {
    updateResult();
  })

  const handleFirstPercentageValue = event => {
    setFirstPercentageValue(event.target.value);
  }
  
  const handleSecondPercentageValue = event => {
    setSecondPercentageValue(event.target.value);
  }
  
  const updateResult = () => {
    setResult(Number((firstPercentageValue * 100 / secondPercentageValue).toFixed(2)));
  }
  
  return (
    <Layout>
      <Seo title="Percentage Calculation" />
      <h1>Percentage Calculation</h1>
      <p>
        <input id="first-value" type="text" value={firstPercentageValue} onChange={handleFirstPercentageValue}></input>
        &nbsp;is {result}% of&nbsp;
        <input id="second-value" type="text" value={secondPercentageValue} onChange={handleSecondPercentageValue}></input>
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
