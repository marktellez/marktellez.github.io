import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Page from '../components/page'

export default function BlogPost({ data, pageContext }) {
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <Page title={post.frontmatter.title} description={post.excerpt}>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <MDXRenderer>{post.body}</MDXRenderer>

      <ul>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Page>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
