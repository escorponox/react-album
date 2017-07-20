import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () =>
  <header className="Header">
    <h1 className="Header__heading"><Link to="/">React Album</Link></h1>
  </header>

export default Header
