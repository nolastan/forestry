import React from "react"
import Layout from "../components/Layout"
import LessonList from "../components/LessonList"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <section>
        <LessonList />
      </section>
    </Layout>
  )
}
