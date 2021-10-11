import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function Home({data}) {
  console.log('data: ',data)
  return (
    <Layout>
      <h4>{data.allMdx.totalCount} Posts</h4>
        {data.allMdx.edges.map(({ node }) => (
          <div className="post-item" key={node.id}>
            <Link className="post-title" to={`${node.fields.slug}`}>
              {node.frontmatter.title}{" "}
            </Link>
              <span className="date">
               {node.frontmatter.date}
              </span>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
        body
        timeToRead
      }
    }
    totalCount
  }
}

`
