import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function Home({data}) {
  console.log('data: ',data)
  return (
    <Layout>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={`${node.fields.slug}`}>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        id
        frontmatter {
          date
          title
        }
        fields {
          slug
        }
        excerpt
        html
        timeToRead
      }
    }
    totalCount
  }
}

`
