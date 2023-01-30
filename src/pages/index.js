import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Price from "../components/price"
import InfoSection from "../components/infoSection"

const IndexPage = () => (
  <Layout>
    <Hero />

    <InfoSection />

    <Price />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
