const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      const postTemplate = path.resolve(`./src/templates/post.js`)
      _.each(result.data.allWordpressPost.edges, edge => {
        createPage({
          path: edge.node.slug,
          component: slash(postTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    })
  })
  // ==== END POSTS ====
}
