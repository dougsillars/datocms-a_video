const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsZap {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        })
      })
      result.data.allDatoCmsZap.edges.map(({ node: zaps }) => {
        createPage({
          path: `zaps/${zaps.slug}`,
          component: path.resolve(`./src/templates/zap.js`),
          context: {
            slug: zaps.slug,
          },
        })
      })
      resolve()
    })
  })
  
}


