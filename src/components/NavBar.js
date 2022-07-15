import { Link } from "gatsby"
import React from 'react';
import '../styles/global.css'

export default function NavBar() {
  return (
    <nav className="topnav">
      <div>
      <Link to="/"><h1 className="title">Variety.</h1></Link>
      </div>
      <div className="links">
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/basket">Basket</Link>
      </div>
    </nav>
  )
}
