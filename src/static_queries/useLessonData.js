import { graphql, useStaticQuery } from "gatsby"

export default function useLessonData() {
  const data = useStaticQuery(graphql`
    query getLessonData {
      lesson {
        lessonData {
          title,
          emoji
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
