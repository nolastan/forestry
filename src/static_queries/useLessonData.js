import { graphql, useStaticQuery } from "gatsby"

export default function useLessonData() {
  const data = useStaticQuery(graphql`
    query getLessonData {
      allMarkdownRemark() {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              title
            }
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
