import React from "react"
import Welcome from "../components/home/Welcome"
import Layout from "../components/layout/Layout"
import '../style.css'

export default function Home() {
  return (
    <>
      <Layout home>
        <Welcome />
      </Layout>
    </>
  )
}
