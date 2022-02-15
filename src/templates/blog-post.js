import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PostPage = ({ data }) => {
    const post = data.markdownRemark;

    return (
        <Layout>
            <h1> {post.frontmatter.title} </h1>
            <div dangerouslySetInnerHTML={{ __html: post.html}} />

        </Layout>
        )
}

export default PostPage;

export const query = graphql`
query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
    }
  }
}
`
