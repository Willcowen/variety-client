import React from 'react'
import Navbar from './NavBar'
import '../styles/global.css'

export default function Layout({children, basket}) {
  return (
    <div className="layout">
      <Navbar basket={basket} />
      <div className="content">
          { children }
      </div>
    </div>
  )
}
