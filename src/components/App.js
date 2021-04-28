import React from "react"
import { Route, Redirect } from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import { ApplicationViews } from "./ApplicationViews"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login"


export const App = () => (
          <>
               <>
    <Route
      render={() => {
        if (sessionStorage.getItem("nation_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
          </>
)
          
  
   