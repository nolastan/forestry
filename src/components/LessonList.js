import React from "react"
import { Link } from "gatsby"
import useLessonData from "../static_queries/useLessonData"
import Img from 'gatsby-image'

export default function LessonList() {
  const lessonData = useLessonData()
  function renderLessonData() {
    return (
      <div>
        {LessonData
          .map(lesson => {
            return (
              <div>{lesson.title}</div>
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul>{renderLessonData()}</ul>
    </section>
  )
}
