import React from "react"
import { Link } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"

export const NavBar = () => {
  return (
      <ul className="navbar">
          <li className="navbar__item active">
              <Link className="navbar__link" to="/">Home</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/Login">Sign-In</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/Register">Register</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/About">About</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/Contacts">Contacts</Link>
          </li>
      </ul>
  )
}