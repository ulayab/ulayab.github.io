const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const {createNodeField} = actions
    if (node.internal.type === `MarkdownRemark`) {
      const fileNode = getNode(node.parent)
      console.log(`\n`, fileNode.relativePath)
      console.log(createFilePath({ node, getNode, basePath: `pages` }))
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }