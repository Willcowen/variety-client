import React from "react"
import NavBar from "../components/NavBar"
import { Helmet } from 'react-helmet'

export default function Home() {

  return (
    <div>
    <NavBar />
    <Helmet><title>{'Variety'}</title></Helmet>
    </div>
  )
}
