import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">BBS</a>
        </h1>
      </div>
      <div className="navBar">
        <ul className="navLists">
          <li className="navItem">
            <a href="#about" className="navLink">
              1.
              <span>About</span>
            </a>
          </li>
          <li className="navItem">
            <a href="#skills" className="navLink">
              2.
              <span>Skills</span>
            </a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink">
              3.
              <span>Projects</span>
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink">
              4.
              <span>Contact</span>
            </a>
          </li>
          <button className="btn">
            <a href="/">Resume</a>
          </button>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
