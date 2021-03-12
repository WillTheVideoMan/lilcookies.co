import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Title = styled.h1`
  padding: 0 1rem;
  color: white;
  text-align: center;
  font-family: "Abril Fatface", cursive;
`

const Accent = styled.strong`
  color: #76544b;
`

const IndexPage = () => (
  <Layout>
    <Seo title="404" />
    <Title>
      <Accent>404:</Accent> Nothing Here.
    </Title>
  </Layout>
)

export default IndexPage
