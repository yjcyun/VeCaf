import React from "react"
import Offer from "../components/home/Offer"
import SpecialMenu from "../components/home/SpecialMenu"
import Welcome from "../components/home/Welcome"
import Layout from "../components/layout/Layout"
import '../style.css'

export default function Home() {
  return (
    <>
      <Layout home>
        <Welcome />
        <SpecialMenu />
        <Offer />
      </Layout>
    </>
  )
}
