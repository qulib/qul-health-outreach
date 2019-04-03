import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"

class QHC extends Component {
  render() {
    const data = this.props.data;

    return (
      <Layout>
        <div className="cards">
          {data.allWordpressPost.edges.map(({ node }) => (
            <div key={node.slug}>
              <Card node={node} />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default QHC

export const pageQuery = graphql`
{
  allWordpressPost(sort: {fields: [date]}, filter: {categories: {elemMatch: {slug: {eq: "qhc"}}}}) {
    edges {
      node {
        ...CardData
      }
    }
  }
}
`