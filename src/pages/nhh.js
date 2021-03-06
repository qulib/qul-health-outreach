import React, { Component } from 'react'
import { graphql } from 'gatsby'

import ErrorBoundary from '../components/ErrorBoundary.jsx'
import Layout from '../components/Layout.jsx'
import Card from '../components/Card.jsx'

class NHH extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <div className="cards">
          {data.allWordpressPost.edges.map(({ node }) => (
            <div key={node.slug}>
              <ErrorBoundary>
                <Card node={node} />
              </ErrorBoundary>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default NHH

export const pageQuery = graphql`
  {
    allWordpressPost(
      sort: { fields: [date] }
      filter: { categories: { elemMatch: { slug: { eq: "nhh" } } } }
    ) {
      edges {
        node {
          ...CardData
        }
      }
    }
  }
`
