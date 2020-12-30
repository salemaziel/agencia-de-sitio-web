import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Container from 'react-bootstrap/Container'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'

import Bio from "../components/old-bio"
import Layout2 from "../components/old-layout"
import OldSEO from "../components/old-seo"


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout2 location={this.props.location} title={siteTitle}>
        <OldSEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Section
        bg="white"
        textColor="dark"
        size="lg"
        bgImage=""
        bgImageOpacity>
          <Container>
          <SectionHeader
          title={post.frontmatter.title}
          subtitle=""
          size={2}
          spaced={true}
          className="text-center"
        />
        <p
          style={{
            display: `block`,
            marginBottom: '2rem',
            marginTop: '0',
            textAlign: 'left'
          }}
        >
          {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: '2rem'
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        </Container>
        </Section>
      </Layout2>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
