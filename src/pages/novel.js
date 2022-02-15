import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`
const BlogDate = styled.span`
  margin-left: 8px;
  font-size: 1rem;
  color: gray;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>小说随笔</h1>
      <div>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (            
              <div key={node.id} >
                <BlogLink to={node.fields.slug}>
                <BlogTitle> {node.frontmatter.title}
                  <BlogDate>{node.frontmatter.date}</BlogDate>
                </BlogTitle>
                </BlogLink>
                <p> {node.excerpt} </p>
              </div>
          ))
        }
        
      </div>
    </div>
  </Layout>
)

export default IndexPage;

export const query = graphql`
{
  allMarkdownRemark(
    filter: {frontmatter: {category: {eq: "novel"}}}
    sort: {fields: [frontmatter___date], order: DESC}
  ) {
    edges {
      node {
        id
        excerpt
        html
        frontmatter {
          date
          title
          category
        }
        fields {
          slug
        }
      }
    }
    totalCount
  }
}


`
