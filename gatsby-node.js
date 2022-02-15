const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })

  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
  query {
  allMarkdownRemark {
    edges {
      node {
        id
        fields {
          slug
        }
      }
    }
  }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node } )=> {
      createPage({
          path: node.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
            slug: node.fields.slug
          }
        })      
    })
  })

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
