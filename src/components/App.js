import React from "react"
import { Route, Redirect } from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import { ApplicationViews } from "./ApplicationViews"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login"


// function App() {
  
//   return (
//     <>
//     {/* <NavBar /> */}
//     <ApplicationViews />
// </>
//   );
// }

// export default App;

export const App = () => (
          <>
              <NavBar />
              <ApplicationViews />
          </>
)
          
  
   