import React from "react"
import { Link, useHistory } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"

export const NavBar = () => {
const history = useHistory();

const handleLogout = () => {
    sessionStorage.clear();
    history.push("/login")
}


  return (
      <ul className="navbar">
          <li className="navbar__item active">
              <Link className="navbar__link" to="/">Home</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/About">About</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/Profile">Profile</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/Upload">Upload</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" to="/CreateNew">Create New</Link>
          </li>
          <li className="navbar__item">
              <Link className="navbar__link" onClick={handleLogout} to="/Login">Logout</Link>
          </li>
      </ul>
  )
}