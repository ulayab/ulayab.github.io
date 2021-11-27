import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogPost({ data }) {
    const post = data.mdx
    console.log('data--',data)
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div className="row" style={{marginBottom: 30, marginTop: 10, alignItems: 'center'}}>
                  <p className="date">{post.frontmatter.date}</p>
                  {post.frontmatter.tags.map((tag, idx) =>
                    <Tag>{`# ${tag}`}</Tag>
                  )}
                </div>
                <MDXRenderer>{post.body}</MDXRenderer>
            </div>
        </Layout>
    )
}

const Tag = styled.div`
  display: inline;
  padding: 2px 7px;
  margin: 0px 14px;
  letter-spacing: 0.8px;
  font-size: 13px;
  border-radius: 20px;
  background-color: var(--lighterGrey);
  color: var(--darkerGrey);
`

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
        tags
      }
    }
  }
`