import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"

class NHH extends Component {
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
    );
  }
}

export default NHH

export const pageQuery = graphql`
{
  allWordpressPost(sort: {fields: [date]}, filter: {categories: {elemMatch: {slug: {eq: "nhh"}}}}) {
    edges {
      node {
        ...CardData
      }
    }
  }
}
`