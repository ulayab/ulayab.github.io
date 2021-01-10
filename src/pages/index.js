import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({data}) {
  console.log('data: ',data)
  return (
    <Layout>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          date
          title
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
