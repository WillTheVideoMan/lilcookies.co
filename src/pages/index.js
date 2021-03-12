import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({ data }) => (
  <Layout>
    <Seo title="Coming Soon" />
    <Img fluid={data.file.childImageSharp.fluid} />
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "logo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
